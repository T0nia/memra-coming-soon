import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <img
          src="/memra_logo.png"
          alt="MEMRA Logo"
          className="logo"
        />

        <h1 className="heading">Coming Soon!</h1>

        <p className="description">Stay tuned</p>
      </main>

      <footer className="footer">
        <div className="legal-links">
          <a href="/legal/privacy-policy.html">
            Privacy Policy
          </a>

          <a href="/legal/terms-and-conditions.html">
            Terms &amp; Conditions
          </a>
        </div>

        <p className="copyright">
          © 2026 Memra. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;