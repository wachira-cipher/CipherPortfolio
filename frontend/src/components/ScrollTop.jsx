import { useEffect } from "react";


export default function ScrollTop() {

    useEffect(() => {

        const scrollTop = document.querySelector(
            ".scroll-top"
        );


        if (!scrollTop) return;


        const toggleScroll = () => {

            if (window.scrollY > 100) {

                scrollTop.classList.add(
                    "active"
                );

            } else {

                scrollTop.classList.remove(
                    "active"
                );

            }

        };


        window.addEventListener(
            "scroll",
            toggleScroll
        );


        return () => {

            window.removeEventListener(
                "scroll",
                toggleScroll
            );

        };


    }, []);



    return (

        <a
            href="#"
            className="scroll-top d-flex align-items-center justify-content-center"
        >

            <i className="bi bi-arrow-up-short"></i>

        </a>

    );

}