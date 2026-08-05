import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


import {
  loginUser,
  registerUser,
  getProfile,
  unlockUser
} from "../api/auth.api";


import {
  updateProfile
} from "../api/profile.api";


import {
  toast
} from "react-toastify";


import lockTimer from "../utils/IdleTimer";



const AuthContext = createContext();





export function AuthProvider({ children }) {



  const [user, setUserState] = useState(null);

  const [profile, setProfile] = useState(null);



  const [token, setToken] = useState(
    localStorage.getItem("token")
  );


  const [loading, setLoading] = useState(true);



  /*
  ===============================
  SCREEN LOCK
  ===============================
  */


  const [locked, setLocked] = useState(
    localStorage.getItem("locked") === "true"
  );





  const lockScreen = () => {


    setLocked(true);


    localStorage.setItem(
      "locked",
      "true"
    );


  };







  const unlockScreen = async (password) => {


    const response =
      await unlockUser(password);




    if (response.success) {


      setLocked(false);



      localStorage.removeItem(
        "locked"
      );



      /*
      restart idle timer
      */

      lockTimer.reset();


    }



    return response;


  };









  /*
  ===============================
  AUTO IDLE LOCK TIMER
  ===============================
  */


  useEffect(() => {


    if (!token) {


      lockTimer.stop();


      return;


    }



    lockTimer.start(

      5 * 60 * 1000,


      () => {


        lockScreen();


      }

    );




    return () => {


      lockTimer.stop();


    };



  }, [token]);









  /*
  ===============================
  SAVE USER
  ===============================
  */


  const setUser = (newUser) => {


    setUserState(newUser);



    if (newUser) {


      localStorage.setItem(

        "user",

        JSON.stringify(newUser)

      );


    }
    else {


      localStorage.removeItem(
        "user"
      );


    }


  };









  /*
  ===============================
  HYDRATE AUTH
  ===============================
  */


  useEffect(() => {


    const hydrate = async () => {


      const savedToken =
        localStorage.getItem("token");




      if (!savedToken) {


        setLoading(false);

        return;


      }





      try {


        const response =
          await getProfile();




        setUser(
          response.user
        );



        setProfile(
          response.profile
        );



      }
      catch (error) {



        console.error(
          "Hydration failed:",
          error
        );



        localStorage.removeItem(
          "token"
        );



        localStorage.removeItem(
          "user"
        );



        localStorage.removeItem(
          "locked"
        );



        setToken(null);

        setUser(null);

        setProfile(null);



      }





      setLoading(false);



    };



    hydrate();



  }, []);









  /*
  ===============================
  LOGIN
  ===============================
  */


  const login = async (formData) => {


    const response =
      await loginUser(formData);



    const {
      user,
      token
    } = response;





    localStorage.setItem(
      "token",
      token
    );



    setToken(token);



    setUser(user);



    localStorage.removeItem(
      "locked"
    );



    setLocked(false);





    try {


      const profileResponse =
        await getProfile();



      setProfile(
        profileResponse.profile
      );


    }
    catch (error) {


      console.error(
        "Profile loading failed",
        error
      );


    }





    return {
      user,
      token
    };


  };









  /*
  ===============================
  REGISTER
  ===============================
  */


  const register = async (formData) => {


    return await registerUser(formData);


  };









  /*
  ===============================
  UPDATE PROFILE
  ===============================
  */


  const updateProfileState = async (updatedProfile) => {


    try {


      const response =
        await updateProfile(updatedProfile);



      const newProfile =
        response.data.profile;



      if (!newProfile) {


        throw new Error(
          "Profile update returned empty profile"
        );


      }




      setProfile(
        newProfile
      );



      setUserState(prev => ({

        ...prev,

        name: newProfile.name,

        email: newProfile.email

      }));





      toast.success(
        "Profile updated successfully"
      );



      return newProfile;



    }
    catch (error) {


      toast.error(
        "Profile update failed"
      );


      throw error;


    }


  };









  /*
  ===============================
  REFRESH PROFILE
  ===============================
  */


  const refreshProfile = async () => {


    const response =
      await getProfile();



    setProfile(
      response.profile
    );



    return response.profile;


  };









  /*
  ===============================
  LOGOUT
  ===============================
  */


  const logout = () => {


    lockTimer.stop();



    localStorage.removeItem(
      "token"
    );



    localStorage.removeItem(
      "user"
    );



    localStorage.removeItem(
      "locked"
    );



    setToken(null);

    setUser(null);

    setProfile(null);

    setLocked(false);




    window.location.replace(
      "/auth/login"
    );



  };









  return (

    <AuthContext.Provider


      value={{

        user,

        setUser,


        profile,

        setProfile,


        token,


        loading,


        login,


        register,


        logout,



        lockScreen,


        unlockScreen,


        locked,



        updateProfileState,


        refreshProfile,



        isAuthenticated:
          !!token


      }}


    >


      {children}



    </AuthContext.Provider>


  );


}






export function useAuth() {

  return useContext(AuthContext);

}