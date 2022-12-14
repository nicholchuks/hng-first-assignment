import data from "./Data";
import { useState } from "react";
import { DiGithubBadge } from "react-icons/di";

import ingforgood from "./assets/I4G.png";
import image from "./assets/image.png";
import imagehover from "./assets/imagehover.png";

import mobileshare from "./assets/mobileshare.png";
import sharehover from "./assets/sharehover.png";
import tooltip from "./assets/Tooltip.png";

import slack from "./assets/slack.jpg";
import text from "./assets/text.jpg";
import zuri from "./assets/zuri.jpg";

import share from "./assets/share-button.jpg";

function Home() {
  const [select, setSelect] = useState(null);
  const [shareBtn, setShareBtn] = useState(false);
  const [imagePic, setImagePic] = useState(true);

  return (
    <main className="max-w-6xl mx-auto mt-[30px]">
      <div className="flex justify-end w-full pr-[10%] mt-[10px]">
        <img
          src={mobileshare}
          alt="share button "
          className="mobile-share md:hidden"
        />
        {shareBtn && (
          <img src={tooltip} alt="share button " className="hidden md:block" />
        )}
        <img
          src={share}
          alt="share button"
          onMouseEnter={() => {
            setShareBtn(true);
          }}
          onMouseLeave={() => {
            setShareBtn(false);
          }}
          className="w-[40px] h-[40px] rounded-full cursor-pointer hidden md:block web-share"
        />
      </div>

      <section className="flex flex-col justify-center items-center mt-[25px]">
        {imagePic ? (
          <img
            src={image}
            alt="profile"
            onMouseEnter={() => {
              setImagePic(false);
            }}
            s
            id="profile-id"
            className="w-[65px] h-[65px] rounded-full cursor-pointer"
          />
        ) : (
          <img
            src={imagehover}
            alt="profile"
            onMouseLeave={() => {
              setImagePic(true);
            }}
            id="profile-id"
            className="w-[65px] h-[65px] rounded-full cursor-pointer "
          />
        )}
        <p className="text-sm font-bold block mt-[10px]">Kadina</p>
      </section>
      <section className="max-w-6xl mx-auto p-4 ">
        {data.map((x, i) => {
          const { link, linkName, pitchText } = x;

          const handleMouseEnter = (index) => {
            if (select === index) {
              setSelect(null);
            } else {
              setSelect(index);
            }
          };

          const handleMouseLeave = () => {
            return setSelect(null);
          };

          return (
            <div
              key={i}
              className="w-full  flex flex-col justify-center mx-auto  items-center "
            >
              {pitchText ? (
                <a
                  href={link}
                  onMouseEnter={() => {
                    handleMouseEnter(i);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                  }}
                  className="w-full"
                >
                  <button className=" hover:bg-gray-500 w-full p-4 bg-gray-300 my-[4px] h-[60px] whitespace-nowrap flex items-center justify-center capitalize rounded text-sm hover:shadow-sm transition duration-150 ease-in-out  ">
                    {linkName}
                  </button>
                </a>
              ) : (
                <a href={link} className="w-full">
                  <button className=" hover:bg-gray-500 w-full p-4 bg-gray-300 my-[4px] h-[60px] whitespace-nowrap flex items-center justify-center capitalize rounded text-sm hover:shadow-sm transition duration-150 ease-in-out ">
                    {linkName}
                  </button>
                </a>
              )}

              <p
                className={
                  select === i ? " w-full flex flex-col items-start" : "hidden"
                }
              >
                {pitchText}
              </p>
            </div>
          );
        })}

        <p id="slack" className=" hidden  ">
          Kadina
        </p>
      </section>
      <section className="flex justify-center items-center text-lg  my-0">
        <a href="https://slack.com/mysticwillz">
          <img
            src={slack}
            alt="slack"
            className="w-[1.5rem] cursor-pointer px-[3px]"
          />
        </a>
        <a href="https://github.com/mysticwillz/hng-first-task">
          <DiGithubBadge className="text-[2rem] cursor-pointer px-[4px]" />
        </a>
      </section>
      <div className="w-full bg-gray-400 h-[2px] px-4  mt-[50px]"></div>
      <footer className="  md:flex justify-between items-center  p-4">
        <img src={zuri} alt="zuri" className=" h-[25px]" />
        <img src={text} alt="text" className="my-[8px] h-[15px]" />
        <img src={ingforgood} alt="i4g" className=" h-[25px]" />
      </footer>
    </main>
  );
}

export default Home;
