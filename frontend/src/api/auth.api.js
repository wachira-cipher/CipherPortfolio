import http from "./http";


// Login
export const loginUser = async (data) => {

    const response = await http.post(
        "/auth/login",
        data
    );

    return response.data;

};


// Register
export const registerUser = async (data) => {

    const response = await http.post(
        "/auth/register",
        data
    );

    return response.data;

};


// Profile
export const getProfile = async () => {

    const response = await http.get(
        "/auth/profile"
    );

    return response.data;

};

export const logoutUser = async () => {

    const response = await http.post("/auth/logout");

    return response.data;

};