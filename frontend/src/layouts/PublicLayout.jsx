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
        Load Portfolio CSS
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



        cssFiles.forEach((file) => {


            const exists = document.querySelector(
                `link[href="${file}"]`
            );


            if (!exists) {


                const link = document.createElement(
                    "link"
                );


                link.rel = "stylesheet";

                link.href = file;

                link.dataset.layout = "public";


                document.head.appendChild(link);


            }


        });







        /*
        ============================
        Load Portfolio JS
        ============================
        */


        const jsFiles = [

            "/assets/portfolio/vendor/bootstrap/js/bootstrap.bundle.min.js",
            "/assets/portfolio/vendor/php-email-form/validate.js",
            "/assets/portfolio/vendor/aos/aos.js",
            "/assets/portfolio/vendor/typed.js/typed.umd.js",
            "/assets/portfolio/vendor/waypoints/noframework.waypoints.js",
            "/assets/portfolio/vendor/purecounter/purecounter_vanilla.js",
            "/assets/portfolio/vendor/swiper/swiper-bundle.min.js",
            "/assets/portfolio/vendor/imagesloaded/imagesloaded.pkgd.min.js",
            "/assets/portfolio/vendor/isotope-layout/isotope.pkgd.min.js",
            "/assets/portfolio/vendor/glightbox/js/glightbox.min.js",
            "/assets/portfolio/js/main.js"


        ];



        jsFiles.forEach((file) => {


            const exists = document.querySelector(
                `script[src="${file}"]`
            );


            if (!exists) {


                const script = document.createElement(
                    "script"
                );


                script.src = file;

                script.dataset.layout = "public";


                document.body.appendChild(
                    script
                );


            }


        });






        /*
        ============================
        Preloader
        ============================
        */


        const preloader = document.getElementById(
            "preloader"
        );


        if (preloader) {

            preloader.remove();

        }






        /*
        ============================
        Scroll Top
        ============================
        */


        const scrollTop = document.querySelector(
            ".scroll-top"
        );



        const handleScroll = () => {


            if (!scrollTop) return;



            if (window.scrollY > 100) {


                scrollTop.classList.add(
                    "active"
                );


            }
            else {


                scrollTop.classList.remove(
                    "active"
                );


            }


        };



        window.addEventListener(
            "scroll",
            handleScroll
        );






        /*
        ============================
        Cleanup when leaving public
        ============================
        */


        return () => {


            document
                .querySelectorAll(
                    '[data-layout="public"]'
                )
                .forEach((item) => {


                    item.remove();


                });



            window.removeEventListener(
                "scroll",
                handleScroll
            );


        };



    }, []);






    useEffect(() => {


        /*
        BootstrapMade Header Scroll
        Protection
        */


        const header = document.querySelector(
            "#header"
        );



        if (!header) return;




        const handleScrolled = () => {


            if (window.scrollY > 100) {


                header.classList.add(
                    "scrolled"
                );


            }
            else {


                header.classList.remove(
                    "scrolled"
                );


            }


        };



        window.addEventListener(
            "scroll",
            handleScrolled
        );



        return () => {


            window.removeEventListener(
                "scroll",
                handleScrolled
            );


        };



    }, []);






    return (

        <>


            <Header />



            <main>

                <Outlet />

            </main>




            <Footer />





            <div id="preloader"></div>




            <ScrollTop />



        </>

    );

}