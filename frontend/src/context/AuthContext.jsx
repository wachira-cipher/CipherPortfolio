import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, getProfile } from "../api/auth.api";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUserState] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  // ==================================
  // HYDRATE USER FROM BACKEND (IMPORTANT FIX)
  // ==================================

  useEffect(() => {

    const initAuth = async () => {

      const savedToken = localStorage.getItem("token");

      if (!savedToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await getProfile();

        setUserState(res.data);

        localStorage.setItem(
          "user",
          JSON.stringify(res.data)
        );

      } catch (err) {

        console.error("Auth hydration failed:", err);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUserState(null);
        setToken(null);
      }

      setLoading(false);
    };

    initAuth();

  }, []);

  // ==================================
  // CENTRALIZED USER UPDATE
  // ==================================

  const setUser = (newUser) => {

    setUserState(newUser);

    if (newUser) {
      localStorage.setItem(
        "user",
        JSON.stringify(newUser)
      );
    } else {
      localStorage.removeItem("user");
    }
  };

  // ==================================
  // LOGIN
  // ==================================

  const login = async (formData) => {

    const response = await loginUser(formData);

    const { user, token } = response;

    localStorage.setItem("token", token);

    setToken(token);

    setUser(user);

    return {
      user,
      token
    };

  };

  // ==================================
  // REGISTER
  // ==================================

  const register = async (formData) => {
    const response = await registerUser(formData);
    return response.data;
  };

  // ==================================
  // LOGOUT
  // ==================================

  const logout = () => {

    console.log("Before:", localStorage.getItem("token"));

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    console.log("After:", localStorage.getItem("token"));

    setToken(null);
    setUser(null);

    window.location.replace("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}