import { useEffect } from "react";


const BreadcrumbStyle = () => {


    useEffect(() => {


        const appUrl = window.location.origin;


        document.documentElement.style.setProperty(

            "--bs-breadcrumb-divider",

            `"${appUrl}"`

        );


    }, []);



    return null;

};


export default BreadcrumbStyle;