import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="card-body">
        {/* Author info */}
        <div className="flex justify-between items-center bg-slate-100 p-4">
            <div className="flex gap-2 items-center">
                <Image src={news.author?.img} alt={news.author?.img} width={40} height={40} className="rounded-full"></Image>
                <div>
                    <h2 className="font-semibold">{news.author?.name}</h2>
                    <p className="text-xs">{news.author?.published_date}</p>
                </div>
            </div>
            <div className="flex justify-between gap-2 items-center text-xl" >
                <CiShare2 />
                <CiBookmark />
            </div>
        </div>

        <h2 className="card-title">{news.title}</h2>
        <figure>
       <Image className=" w-full" src={news.image_url} width={600} height={400} alt={news.title} ></Image>
      </figure>
      <p className="line-clamp-3">{news.details}</p>
      <hr className="text-gray-200" />
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <h2 className="flex items-center gap-2  "> <IoIosStar  className="text-lg text-orange-300" /> {news.rating.number}</h2>
          <h2 className="flex items-center gap-2 "> <FaEye  className="text-lg " /> {news.total_view}</h2>
        </div>
        <Link href={`/news/${news._id}`}> <button className="btn">see details</button> </Link>
      </div>
      </div>
    </div>
  );
};

export default NewsCard;
