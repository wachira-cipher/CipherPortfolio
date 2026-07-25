import http from "./http";



// UPDATE PROFILE
export const updateProfile = (formData) => {

    return http.put(
        "/profile",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

};