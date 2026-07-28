import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Breaking News: Global Tech Conference  AI Innovations",
  },
  {
    id: 2,
    title: "Breaking News: Heavy Rainfall Triggers Flood Warnings ",
  },
  {
    id: 5,
    title: "Breaking News: Stock Markets Positive Economic Growth ",
  },
];

const BreakingNews = () => {
  return (
    <div className="container mx-auto flex justify-between gap-4 items-center bg-gray-200 py-4  px-2">
      <button className="btn bg-pink-500 text-white"> Latest news</button>
      <Marquee pauseOnHover={true} speed={80}>
        {news.map((singleNews) => {
          return (
            <span key={singleNews.id} className="mr-10">
              <span className="text-pink-500 font-bold">
                Breaking News:
              </span>
              {singleNews.title.substring("Breaking News:".length)}{" "}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
