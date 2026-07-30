import { getNewsDetailsById } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const newsD = await getNewsDetailsById(id);
  console.log(newsD);

  return (
    <div className="mx-auto max-w-5xl my-8 ">
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          {/* Author info */}
          <div className="flex justify-between items-center bg-slate-100 p-4">
            <div className="flex gap-2 items-center">
              <Image
                src={newsD.author?.img}
                alt={newsD.author?.img}
                width={40}
                height={40}
                className="rounded-full"
              ></Image>
              <div>
                <h2 className="font-semibold">{newsD.author?.name}</h2>
                <p className="text-xs">{newsD.author?.published_date}</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 items-center text-xl">
              <CiShare2 />
              <CiBookmark />
            </div>
          </div>

          <h2 className="card-title">{newsD.title}</h2>
          <figure>
            <Image
              className=" w-full"
              src={newsD.image_url}
              width={600}
              height={400}
              alt={newsD.title}
            ></Image>
          </figure>
          <p>{newsD.details}</p>
          <hr className="text-gray-200" />
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-2  ">
                <IoIosStar className="text-lg text-orange-300" />
                {newsD.rating.number}
              </h2>
              <h2 className="flex items-center gap-2 ">
                <FaEye className="text-lg " /> {newsD.total_view}
              </h2>
            </div>
            <Link href={`/category/${newsD.category_id}`}>
              <button className="btn bg-purple-500 text-white">
                see other news for this categoty <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
