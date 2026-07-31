import Link from "next/link";
import React from "react";

const LeftSidebar = ({categories, active_id}) => {
  return (
    <div >
      <h2 className="font-bold text-lg mb-4 bg-gray-200">All Categories</h2>
      <ul className="flex flex-col  gap-3 mt-6 ">
        {categories.map((category) => (
            <li
            key={category.category_id}
            className={`
                ${active_id === category.category_id ? "bg-purple-500 text-white" : "text-gray-400"}
                text-left  p-2 rounded-md font-bold text-lg `}>
            <Link href={`/category/${category.category_id}`} className="block pl-12 "> {category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar; 
