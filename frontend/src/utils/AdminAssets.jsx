import { useEffect } from "react";


const AdminAssets = () => {


    useEffect(() => {


        const styles = [
            "/assets/auth/css/bootstrap.min.css",
            "/assets/auth/css/icons.min.css",
            "/assets/auth/css/app.min.css"
        ];



        const scripts = [

            // Core dependency
            "/assets/auth/libs/jquery/jquery.min.js",

            // Bootstrap
            "/assets/auth/libs/bootstrap/js/bootstrap.bundle.min.js",

            // Sidebar menu
            "/assets/auth/libs/metismenu/metisMenu.min.js",

            // Custom scrollbar
            "/assets/auth/libs/simplebar/simplebar.min.js",

            // Waves animation
            "/assets/auth/libs/node-waves/waves.min.js",

            // Counter animations
            "/assets/auth/libs/waypoints/lib/jquery.waypoints.min.js",

            "/assets/auth/libs/jquery.counterup/jquery.counterup.min.js",

            // Template controller
            "/assets/auth/js/app.js"

        ];





        const loadedStyles = styles.map((href) => {


            const link =
                document.createElement("link");


            link.rel = "stylesheet";

            link.href = href;


            document.head.appendChild(link);


            return link;


        });








        const loadScripts = async () => {


            for (const src of scripts) {


                await new Promise((resolve, reject) => {


                    const script =
                        document.createElement("script");


                    script.src = src;


                    script.async = false;



                    script.onload = resolve;


                    script.onerror = reject;



                    document.body.appendChild(script);


                });


            }


        };



        loadScripts();








        return () => {


            loadedStyles.forEach(style => {


                if (style.parentNode) {

                    style.parentNode.removeChild(style);

                }


            });



            // Remove scripts on unmount
            document
                .querySelectorAll(
                    "script[data-admin-asset]"
                )
                .forEach(script => {

                    script.remove();

                });


        };



    }, []);





    return null;


};


export default AdminAssets;