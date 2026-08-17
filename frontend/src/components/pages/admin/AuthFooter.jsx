import React from "react";

const AuthFooter = () => {
  return (
    <div className="mt-5 text-center">
      <p>
        © {new Date().getFullYear()} CipherPortfolio.
        <br />
        Made with <i className="bi bi-heart-fill text-danger"></i> by{" "}
        <a
          href="https://www.cyberspheresystems.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CybersphereSystems
        </a>
      </p>
    </div>
  );
};
export default AuthFooter;
