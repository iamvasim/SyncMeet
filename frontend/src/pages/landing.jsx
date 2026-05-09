import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      {/* Background Blur Effects */}
      <div className="landingBlurOne"></div>
      <div className="landingBlurTwo"></div>

      {/* Navbar */}
      <nav className="landingNavbar">

{/* Left */}
<div className="landingNavHeader">

    <div className="landingLogoBox">
        C
    </div>

    <div className="landingBrandContainer">

        <h2>Connectify</h2>

        <span>
            Secure Virtual Meetings
        </span>

    </div>

</div>

{/* Right */}
<div className="landingNavList">

    <p
        className="landingNavLink"
        onClick={() => {
            router("/aljk23");
        }}
    >
        Join as Guest
    </p>

    <p
        className="landingNavLink"
        onClick={() => {
            router("/auth");
        }}
    >
        Register
    </p>

    <div
        className="landingLoginButton"
        onClick={() => {
            router("/auth");
        }}
        role="button"
    >
        <p>Login</p>
    </div>

</div>

</nav>

      {/* Main Section */}
      <div className="landingMainContainer">
        {/* Left Side */}
        <div className="landingHeroLeft">
          <div className="landingBadge">
            <div className="landingBadgeDot"></div>
            <span>Trusted virtual meetings platform</span>
          </div>

          <h1>
            <span>Connect</span> with your loved Ones
          </h1>

          <p>
            Cover distance with high-quality video calls, crystal clear audio,
            and premium virtual meeting experience.
          </p>

          <div className="landingButtonContainer" role="button">
            <Link className="landingGetStartedButton" to={"/auth"}>
              Get Started
            </Link>
          </div>

          {/* Stats */}
          <div className="landingStatsContainer">
            <div className="landingStatCard">
              <h3>99.9%</h3>
              <span>Uptime</span>
            </div>

            <div className="landingStatDivider"></div>

            <div className="landingStatCard">
              <h3>HD</h3>
              <span>Video Quality</span>
            </div>

            <div className="landingStatDivider"></div>

            <div className="landingStatCard">
              <h3>Secure</h3>
              <span>Meetings</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="landingHeroRight">
          <div className="landingImageCard">
            <div className="landingWindowControls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <img src="/mobile.png" alt="" />
          </div>
        </div>
      </div>

      <footer className="meetingFooter">
        <div className="meetingFooterContent">
          {/* Left */}
          <div className="meetingFooterLeft">
            <div className="meetingFooterLogo">
              <div className="meetingFooterLogoBox">C</div>

              <div>
                <h2>Connectify</h2>
                <p>Virtual meetings made simple & secure.</p>
              </div>
            </div>
          </div>

          {/* Center */}
          <div className="meetingFooterCenter">
            <a
              href="https://github.com/iamvasim"
              target="_blank"
              rel="noreferrer"
              className="meetingSocialLink"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/mohdvasim09"
              target="_blank"
              rel="noreferrer"
              className="meetingSocialLink"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Right */}
          <div className="meetingFooterRight">
            <button
              onClick={() => {
                router("/auth");
              }}
            >
              Start Meeting
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="meetingFooterBottom">
          <p>© 2026 Connectify — Built for seamless communication.</p>
        </div>
      </footer>
    </div>
  );
}
