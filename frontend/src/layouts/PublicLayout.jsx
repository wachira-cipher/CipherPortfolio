import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/ScrollTop";


export default function PublicLayout() {


    useEffect(() => {


        document.body.className = "";



        /*
        ============================
        LOAD CSS
        ============================
        */


        const cssFiles = [

            "/assets/portfolio/vendor/bootstrap/css/bootstrap.min.css",

            "/assets/portfolio/vendor/bootstrap-icons/bootstrap-icons.css",

            "/assets/portfolio/vendor/aos/aos.css",

            "/assets/portfolio/vendor/swiper/swiper-bundle.min.css",

            "/assets/portfolio/vendor/glightbox/css/glightbox.min.css",

            "/assets/portfolio/css/main.css"

        ];



        cssFiles.forEach(src => {


            if (!document.querySelector(`link[href="${src}"]`)) {


                const link =
                    document.createElement("link");


                link.rel = "stylesheet";

                link.href = src;

                link.dataset.layout = "public";


                document.head.appendChild(link);


            }


        });








        /*
        ============================
        LOAD JS
        ============================
        */


        const scripts = [


            "/assets/portfolio/vendor/bootstrap/js/bootstrap.bundle.min.js",


            "/assets/portfolio/vendor/aos/aos.js",


            "/assets/portfolio/vendor/typed.js/typed.umd.js",


            "/assets/portfolio/vendor/waypoints/noframework.waypoints.js",


            "/assets/portfolio/vendor/purecounter/purecounter_vanilla.js",


            "/assets/portfolio/vendor/swiper/swiper-bundle.min.js",


            "/assets/portfolio/vendor/imagesloaded/imagesloaded.pkgd.min.js",


            "/assets/portfolio/vendor/isotope-layout/isotope.pkgd.min.js",


            "/assets/portfolio/vendor/glightbox/js/glightbox.min.js"



        ];








        const loadScript = (src) => {


            return new Promise((resolve) => {


                const existing =
                    document.querySelector(
                        `script[src="${src}"]`
                    );



                if (existing) {

                    resolve();

                    return;

                }




                const script =
                    document.createElement("script");



                script.src = src;


                script.async = false;


                script.dataset.layout = "public";



                script.onload = resolve;


                document.body.appendChild(script);


            });



        };








        const initScripts = async () => {


            for (const script of scripts) {


                await loadScript(script);


            }






            /*
            LOAD MAIN JS LAST
            */

            await loadScript(
                "/assets/portfolio/js/main.js"
            );



        };



        initScripts();









        /*
        ============================
        CLEANUP
        ============================
        */


        return () => {


            document
                .querySelectorAll(
                    '[data-layout="public"]'
                )
                .forEach(el => {


                    el.remove();


                });


        };




    }, []);









    return (

        <>


            <Header />


            <main>

                <Outlet />

            </main>


            <Footer />


            {/* <div id="preloader"></div>*/}


            <ScrollTop />


        </>

    );

}