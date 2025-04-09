import React, { useEffect, useState } from "react";
import logo from "../../../images/digifloraLogo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [show, setShow] = useState(false);

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

  const navItemCss =
    "my-auto tracking-wider hover:font-semibold hover:border-b-2 border-teal-500 cursor-pointer";

    const navItemCss2 = "'tracking-widest p-2 w-fit'"

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
        <div className="hidden sm:block">
          <div className="flex gap-3 text-teal-500">
            <div className={navItemCss}>Pricing</div>
            <div className={navItemCss}>Contact</div>
            <div className={navItemCss}>About us</div>
            <div className="text-white bg-teal-500 px-2 py-1 my-auto rounded-full cursor-pointer">
              Get Full Access
            </div>
          </div>
        </div>
        <div
          className="sm:hidden text-4xl text-teal-500"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <IoMdClose /> : <CgMenuRightAlt />}
        </div>
      </div>
      {show && (
        <div
          className="absolute h-fit w-screen bg-white p-5 border-2 border-teal-500"
        >
          <div className={navItemCss2}>Pricing</div>
            <div className={navItemCss2}>Contact</div>
            <div className={navItemCss2}>About us</div>
            <div className={navItemCss2}>
              Get Full Access
            </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
