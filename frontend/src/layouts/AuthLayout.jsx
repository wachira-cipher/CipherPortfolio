import { Outlet } from "react-router-dom";
import { useEffect } from "react";


export default function AuthLayout() {


    useEffect(() => {


        // =========================
        // Body class
        // =========================

        document.body.classList.add(
            "authentication-bg"
        );



        // =========================
        // Auth CSS
        // =========================

        const cssFiles = [

            "/assets/auth/css/bootstrap.min.css",

            "/assets/auth/css/icons.min.css",

            "/assets/auth/css/app.min.css"

        ];



        const addedCss = cssFiles.map((file) => {


            const link = document.createElement("link");


            link.rel = "stylesheet";

            link.href = file;

            link.dataset.auth = "true";


            document.head.appendChild(link);


            return link;


        });






        // =========================
        // Auth JS
        // =========================

        const jsFiles = [


            "/assets/auth/libs/jquery/jquery.min.js",

            "/assets/auth/libs/bootstrap/js/bootstrap.bundle.min.js",

            "/assets/auth/libs/metismenu/metisMenu.min.js",

            "/assets/auth/libs/simplebar/simplebar.min.js",

            "/assets/auth/libs/node-waves/waves.min.js",

            "/assets/auth/libs/waypoints/lib/jquery.waypoints.min.js",

            "/assets/auth/libs/jquery.counterup/jquery.counterup.min.js",

            "/assets/auth/js/app.js"


        ];



        const addedScripts = jsFiles.map((file) => {


            const script = document.createElement(
                "script"
            );


            script.src = file;

            script.dataset.auth = "true";


            document.body.appendChild(script);


            return script;


        });







        // =========================
        // Cleanup when leaving auth
        // =========================

        return () => {


            document.body.classList.remove(
                "authentication-bg"
            );



            addedCss.forEach((link) => {


                link.remove();


            });



            addedScripts.forEach((script) => {


                script.remove();


            });


        };


    }, []);




    return (

        <Outlet />

    );

}