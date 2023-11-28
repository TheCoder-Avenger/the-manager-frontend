/**
 * External dependencies
 */
import React from "react";

/**
 * Internal dependencies
 */
import Container from "../../components/container";

/**
 * Style dependencies
 */
import "./style.css";

function Header() {
  return (
    <div className="header__wrapper">
      <Container medium>
        <div className="header__menues">
          <div className="header__main-title">The Manager</div>
          <div className="header__routes-wrapper">
            <div className="header__route">Services</div>
            <div className="header__route">About</div>
            <div className="header__route">FAQ</div>
          </div>
          <div className="header__contact-us-wrapper">Contact us</div>
        </div>

        <div className="header__desc-wrapper">
          <div>
            <img
              className="header__image"
              // src="../../../public/header_image.jpg"
              src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>

          <div className="header__content-wrapper">
            <div className="header__desc">
              Experience the efficiency of 'The Manager'—an AI-driven platform
              streamlining tasks, just like Jarvis from Iron Man. Organize,
              manage, and simplify your workflow effortlessly
            </div>
            <div className="header__sub-desc">
              "Welcome to The Manager, your digital assistant crafted to enhance
              productivity. Embrace the future of streamlined management
              inspired by Iron Man's Jarvis AI."
            </div>

            <div className="header__activate-jarvis-btn">Hey, Manager</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
