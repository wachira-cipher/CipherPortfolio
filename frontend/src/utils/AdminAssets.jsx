import { useEffect } from "react";



const AdminAssets = () => {


    useEffect(() => {


        const styles = [
            "/assets/auth/css/bootstrap.min.css",
            "/assets/auth/css/icons.min.css",
            "/assets/auth/css/app.min.css"
        ];


        const scripts = [
            "/assets/auth/libs/jquery/jquery.min.js",
            "/assets/auth/libs/bootstrap/js/bootstrap.bundle.min.js",
            "/assets/auth/libs/metismenu/metisMenu.min.js",
            "/assets/auth/libs/simplebar/simplebar.min.js",
            "/assets/auth/libs/node-waves/waves.min.js",
            "/assets/auth/libs/waypoints/lib/jquery.waypoints.min.js",
            "/assets/auth/libs/jquery.counterup/jquery.counterup.min.js",



            "/assets/auth/js/pages/dashboard.init.js",


            "/assets/auth/js/app.js",
        ];



        const loadedStyles = styles.map((href) => {

            const link = document.createElement("link");

            link.rel = "stylesheet";

            link.href = href;

            document.head.appendChild(link);

            return link;

        });



        const loadedScripts = scripts.map((src) => {


            const script = document.createElement("script");

            script.src = src;

            script.async = false;

            document.body.appendChild(script);


            return script;


        });



        return () => {


            loadedStyles.forEach(style => {
                document.head.removeChild(style);
            });


            loadedScripts.forEach(script => {
                document.body.removeChild(script);
            });


        };


    }, []);



    return null;

};


export default AdminAssets;