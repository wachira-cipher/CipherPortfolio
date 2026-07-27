const SERVER_URL = import.meta.env.VITE_API_URL.replace("/api", "");


export const getImageUrl = (image) => {


    if (!image) {

        return "/assets/auth/images/users/avatar-4.jpg";

    }




    // Already full URL

    if (image.startsWith("http")) {

        return image;

    }




    // Remove accidental leading slash

    const cleanImage = image.startsWith("/")
        ? image.substring(1)
        : image;




    return `${SERVER_URL}/${encodeURI(cleanImage)}`;


};