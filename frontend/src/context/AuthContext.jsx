import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  loginUser,
  registerUser,
  getProfile
} from "../api/auth.api";

import {
  updateProfile
} from "../api/profile.api";

import {
  toast
} from "react-toastify";


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


        const response = await getProfile();



        console.log(
          "HYDRATE PROFILE:",
          response
        );



        /*
        backend returns:

        {
          success:true,
          user:{},
          profile:{}
        }

        */


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




    /*
    Immediately load profile
    */

    try {


      const profileResponse =
        await getProfile();



      setProfile(
        profileResponse.profile
      );


    }
    catch (error) {


      console.error(
        "Profile loading after login failed",
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


    const response =
      await registerUser(formData);



    return response;


  };









  /*
  ===============================
  UPDATE PROFILE
  ===============================
  */
  const updateProfileState = async (updatedProfile) => {

    try {

      const response = await updateProfile(updatedProfile);


      console.log(
        "UPDATE RESPONSE:",
        response.data
      );


      const newProfile = response.data.profile;



      if (!newProfile) {

        throw new Error(
          "Profile update returned empty profile"
        );

      }



      setProfile(newProfile);



      setUserState(prev => ({
        ...prev,
        name: newProfile.name,
        email: newProfile.email
      }));



      toast.success(
        "Profile updated successfully"
      );



      return newProfile;


    } catch (error) {


      toast.error(
        "Profile update failed"
      );


      console.error(
        "Update profile error:",
        error
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


    localStorage.removeItem(
      "token"
    );


    localStorage.removeItem(
      "user"
    );



    setToken(null);

    setUser(null);

    setProfile(null);



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