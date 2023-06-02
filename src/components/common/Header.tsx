import React from "react";
import { Helmet } from "react-helmet";

export default function Header() {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700;900&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
}
