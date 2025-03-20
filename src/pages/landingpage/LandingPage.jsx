import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { PiPillFill, PiPlant } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { GrUserExpert } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { BsStars } from "react-icons/bs";

import PlantGallery from "./components/PlantGallery";

var mainHeadingCss = "text-center font-semibold text-3xl mb-10";

function LandingPage() {
  const features = [
    {
      icon: <PiPlant />,
      title: "Detailed Plant Care Guides",
      description:
        "Get personalized care instructions for watering, sunlight, soil, and seasonal tips.",
    },
    {
      icon: <IoIosSearch />,
      title: "Search by Type, Benefit, or Region",
      description:
        "Quickly find plants based on category, purpose, or climate — whether air-purifiers or tropical blooms.",
    },
    {
      icon: <PiPillFill />,
      title: "Medicinal Uses & Edible Info",
      description:
        "Explore plants with healing properties, from Aloe’s soothing gel to Mint’s digestive relief.",
    },
    {
      icon: <GrUserExpert />,
      title: "Expert Tips & Growing Tricks",
      description:
        "Unlock pro-level advice, from boosting growth to fixing yellow leaves or poor soil drainage.",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const spark = document.createElement("div");
      spark.className = "spark";

      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 500);
    };

    const sparkDiv = document.getElementById("sparkDiv");
    sparkDiv.addEventListener("mousemove", handleMouseMove);

    return () => sparkDiv.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cards = [
    { text: "This site made my garden thrive!", author: "Aisha, Gardener" },
    {
      text: "Found rare plant info I couldn’t find elsewhere!",
      author: "Vikram, Botanist",
    },
    {
      text: "My succulents have never looked better!",
      author: "Meera, Plant Lover",
    },
    { text: "The plant care tips are spot on!", author: "Ravi, Green Thumb" },
    {
      text: "I discovered new exotic plants to grow!",
      author: "Siddhu, Hobbyist",
    },
    {
      text: "Best community for plant lovers!",
      author: "Arjun, Indoor Gardener",
    },
    {
      text: "My herbs are flourishing thanks to this guide!",
      author: "Sanya, Chef",
    },
    {
      text: "Learned how to rescue my dying plants!",
      author: "Kabir, Newbie Gardener",
    },
    {
      text: "Finally found low-maintenance plants for my home!",
      author: "Sophia, Busy Professional",
    },
    {
      text: "Beautiful garden ideas and inspiration!",
      author: "Oliver, Home Decor Enthusiast",
    },
  ];

  const faqs = [
    {
      question: "What types of plants are featured?",
      answer:
        "We feature a wide range of rare, medicinal, and exotic plants found in Andhra Pradesh forests.",
    },
    {
      question: "How can I purchase the plant information?",
      answer:
        "You can choose from our Free, Standard, or Pro plans to unlock detailed plant guides.",
    },
    {
      question: "Are the plant details scientifically verified?",
      answer:
        "Yes, we carefully research and cross-check information with botanical sources.",
    },
    {
      question: "How do I care for these plants at home?",
      answer:
        "Each plant guide includes detailed care instructions like sunlight, watering, and soil needs.",
    },
  ];

  return (
    <div>
      <NavBar />

      {/* hero section */}
      <div id="sparkDiv" className="h-80 content-center text-gray-700">
        <div className=" text-5xl font-bold flex gap-2 justify-center items-end">
          <BsStars className="text-7xl mb-5 text-teal-500" />
          Unlock Secrets of <span className="text-teal-500"> 3000+ </span>{" "}
          Plants!
        </div>
        <div className="text-2xl text-center m-3">
          From care tips to medicinal uses — get all the insights you need in
          one place.
        </div>
        <div className="flex justify-center">
          <div className="cursor-pointer m-3 text-xl flex gap-3 items-center border border-teal-500 w-fit p-1 px-3 rounded-full bg-teal-500 text-white">
            Explore More <HiMiniArrowRightCircle />
          </div>
        </div>
        <style>
          {`
          .spark {
            position: absolute;
            width: 15px;
            height: 15px;
            background: teal;
            border-radius: 50%;
            opacity: 1;
            animation: spark-fade 0.5s forwards ease-out;
            pointer-events: none;
          }

          @keyframes spark-fade {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(3);
            }
          }
        `}
        </style>
      </div>

      {/* features section */}
      <div className="bg-slate-50   text-gray-700 py-10">
        <div className={mainHeadingCss}>Why Our Plant Database Stands Out</div>
        <div className="flex flex-wrap justify-center gap-4 m-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white w-72 p-4 rounded-md shadow-md"
            >
              <div className="p-2 bg-teal-100 text-teal-500 w-fit rounded-md text-2xl">
                {feature.icon}
              </div>
              <div className="font-semibold text-lg my-2">{feature.title}</div>
              <div className="text-sm">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* plant gallery */}
      <div id="plantGallery" className="text-gray-700 py-10 pt-20">
        <div className={mainHeadingCss}>
          Discover <span className="text-teal-500">Andhra Pradesh’s</span> Botanical Treasures
        </div>
        <PlantGallery />
      </div>

      {/* testimonials */}
      <div className="text-gray-700 py-10 my-10">
        <div className={mainHeadingCss}>What Our Plant Enthusiasts Say</div>
        <div className="overflow-hidden">
          <div className="w-fit mb-4">
            <div className="animate-loopLeft gap-4">
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={`left-${index}`}
                  className="w-80 bg-slate-50 rounded-sm  text-center p-2 py-4"
                >
                  {card.text} - <b>{card.author}</b>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4 animate-loopRight">
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={`right-${index}`}
                  className="w-80 bg-slate-100 rounded-sm  text-center p-2 py-4"
                >
                  {card.text} - <b>{card.author}</b>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
          @keyframes loopLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes loopRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-loopLeft {
            display: flex;
            animation: loopLeft 100s linear infinite;
          }
          .animate-loopRight {
            display: flex;
            animation: loopRight 100s linear infinite;
          }
        `}
        </style>
      </div>

      {/* Pricing section */}
      <div id="pricing" className="text-gray-700 py-10">
        <div className={mainHeadingCss}>Unlock the Green Library</div>
        <div className="flex flex-wrap justify-center gap-4 m-3">
          <div className="border-2 border-gray-200 rounded-2xl p-5 w-64 hover:shadow-md">
            <div className="text-center font-semibold text-xl my-2">
              Free Plan
            </div>
            <div className="text-5xl text-teal-500  flex justify-center">
              <BiRupee className="mt-1" />0
            </div>
            <div className="text-sm m-2 text-center">life time</div>
            <div className="text-center font-semibold text-lg my-2">
              Includes
            </div>
            <div className="flex justify-center">
              <div className="w-44">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" /> Basic plant list
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-2xl p-5 w-64 hover:shadow-md">
            <div className="text-center font-semibold text-xl my-2">
              Standard Plan
            </div>
            <div className="text-5xl text-teal-500  flex justify-center">
              <BiRupee className="mt-1" />
              100
            </div>
            <div className="text-sm m-2 text-center">per year</div>

            <div className="text-center font-semibold text-lg my-2">
              Includes
            </div>
            <div className="flex justify-center">
              <div className="w-44">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" /> Basic plant list
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" />
                  Full details
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" /> Growing guides
                </div>
                <div className="bg-teal-500 text-white text-center my-3 p-1 rounded-sm cursor-pointer">
                  Checkout
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-2xl p-5 w-64 hover:shadow-md">
            <div className="text-center font-semibold text-xl my-2">
              Pro Plan
            </div>
            <div className="text-5xl text-teal-500  flex justify-center">
              <BiRupee className="mt-1" />
              700
            </div>
            <div className="text-sm m-2 text-center">life time</div>

            <div className="text-center font-semibold text-lg my-2">
              Includes
            </div>
            <div className="flex justify-center">
              <div className="w-44">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" /> Basic plant list
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" />
                  Full details
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" /> Growing guides
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" /> Exclusive rare
                  plants
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-500" /> Updates
                </div>
                <div className="bg-teal-500 text-white text-center my-3 p-1 rounded-sm cursor-pointer">
                  Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="max-w-4xl text-gray-700 mx-auto p-4 mb-10">
        <h2 className="text-2xl  font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <footer id="footer" className="bg-slate-100 text-gray-700 p-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We aim to preserve and share knowledge about rare and medicinal
              plants from Andhra Pradesh forests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sparkDiv" className=" hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#plantGallery" className=" hover:text-black">
                  Plant Guides
                </a>
              </li>
              <li>
                <a href="#pricing" className=" hover:text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#footer" className=" hover:text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">Email: support@greenlibrary.com</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
            <div className="flex gap-4 mt-2">
              <a href="#footer" className=" hover:text-black">
                Facebook
              </a>
              <a href="#footer" className=" hover:text-black">
                Instagram
              </a>
              <a href="#footer" className=" hover:text-black">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-6 border-t border-t-white pt-4">
          Designed & Developed By APCFSS
          <br />© 2025 DigiFlora By APFD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
