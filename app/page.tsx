"use client";

import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState("home");

  const Nav = ({ label, target }: any) => (
    <button
      onClick={() => setPage(target)}
      style={{ margin: "0 10px" }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      
      {/* NAV */}
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <Nav label="Home" target="home" />
        <Nav label="About" target="about" />
        <Nav label="Menu" target="menu" />
        <Nav label="Catering" target="catering" />
        <Nav label="Pricing" target="pricing" />
        <Nav label="Contact" target="contact" />
      </div>

      {/* HOME */}
      {page === "home" && (
        <div style={{ textAlign: "center" }}>
          <h1>Ash & Co</h1>
          <p>Modern cooking with an Asian-inspired influence</p>
        </div>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <div>
          <h2>About</h2>
          <p>
            Ash & Co is a modern culinary concept rooted in refined seasonal cooking
            with a strong Asian influence. My cooking blends technique, balance,
            and bold flavour inspiration from East Asian cuisine.
          </p>
        </div>
      )}

      {/* MENU */}
      {page === "menu" && (
        <div>
          <h2>Menu</h2>
          <ul>
            <li>Seared line fish, lemon butter</li>
            <li>Roast chicken, seasonal vegetables</li>
            <li>Mushroom risotto</li>
            <li>Dark chocolate dessert</li>
          </ul>
        </div>
      )}

      {/* CATERING */}
      {page === "catering" && (
        <div>
          <h2>Catering</h2>
          <p>Private dining, small events, and curated tasting menus.</p>
        </div>
      )}

      {/* PRICING */}
      {page === "pricing" && (
        <div>
          <h2>Pricing</h2>
          <p>Private dining: From R350 per person</p>
          <p>Catering: Custom quoted</p>
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <div>
          <h2>Contact</h2>
          <p>Email: damonsashlynn21@gmail.com</p>
          <p>WhatsApp: +27 60 870 49331</p>
          <a href="https://instagram.com/cookingwith._lynn" target="_blank">
            Instagram
          </a>
          <br /><br />
          <a
            href="https://wa.me/276087049331?text=Hi%20Ash%20%26%20Co%2C%20I%20would%20like%20to%20book%20an%20enquiry."
            target="_blank"
          >
            Book via WhatsApp
          </a>
        </div>
      )}
      
    </div>
  );
}
