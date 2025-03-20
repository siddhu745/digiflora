import React, { useEffect, useState } from "react";
import logo from "../../../images/digifloraLogo.svg";

function NavBar() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemCss = "my-auto tracking-wider hover:font-semibold hover:border-b-2 border-pink-500 cursor-pointer"

  return (
    <div
      className={`h-fit py-3 sticky top-0 bg-white/80 backdrop-blur-sm transition-shadow duration-300 z-50 ${
        hasShadow ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between">
        <div>
          <img src={logo} alt="logo" className="h-12" />
        </div>
        <div className="flex gap-3 text-pink-500">
          <div className={navItemCss}>Pricing</div>
          <div className={navItemCss}>Contact</div>
          <div className={navItemCss}>About us</div>
          <div className="text-white bg-pink-500 px-2 py-1 my-auto rounded-full cursor-pointer">Get Full Access</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
