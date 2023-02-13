import React from "react";

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "20vh",
        width: "100%",
        border: "2px solid red"
    }
    return (
        <footer className="bg-dark text-light py-3 my-5" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}