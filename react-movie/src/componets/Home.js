import React, { useState } from "react";
import data from "../data.json";
import MainImg from "../assets/FeaturedCoverImage.png";
import LowImg from "../assets/FeaturedTitleImage.png";
import photo from "../assets/https_specials-2.png"


function Home() {
  const [content, setContent] = useState(data.Featured);
  const [bgImg, setBgImg] = useState(MainImg);
  const [lowImg, setLowImg] = useState(LowImg);
  const [indexID, setIndexId] = useState(0);

  const renderItemContent = (index) => {
    return data.TendingNow.filter((item, idx) => idx === index);
  };

  return (
    <div className=" w-full h-screen relative overflow-hidden">
      <img
        src={bgImg}
        alt="Featured Title"
        className="w-full h-full object-cover"
      />
      {renderItemContent(indexID).map((item) => (
        <div
          key={item.Id}
          className="absolute top-0 w-full h-full flex flex-col justify-start items-start p-52 text-white text-2xl space-y-2 font-bold"
        >
          <p>{item.Category}</p>
          <img src={lowImg} />
          <p>{item.Title}</p>
          <p>{item.Date.slice(0, 4) + " " + item.MpaRating + " " + "1 42 հ"}</p>
          <p>{item.Description}</p>
          <div className="flex space-x-[60px] py-8">
            <button className="bg-gray-100 p-4 rounded-full w-[200px] font-bold">
              <span class="text-black">▶ Play</span>
            </button>
            <button className="bg-blue-600 p-4 rounded-full w-[200px] font-bold"> More Info</button>
          </div>
          <div className="flex  justify-between items-start py-2  ">
            {data.TendingNow.map((el, index) => {
              const imgSrc = `/assets/${el.CoverImage}`

              return <div key={index} className=" h-full w-[214px]" ><img src={photo} alt="/" /></div>
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
