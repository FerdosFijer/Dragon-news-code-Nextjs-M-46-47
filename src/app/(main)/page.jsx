import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";

const getCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data.news_category;
}
const getNewsByCategoriesId = async (category_id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories()
  // console.log(categories);

  const news = await getNewsByCategoriesId("01 ");
  console.log(news);


  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-16">

      <div className=" col-span-3">
        <LeftSidebar categories={categories}/>
      </div>

      <div className="font-bold text bg-purple-200 col-span-6">
        All News
        <div className="space-y-4">
          {
          news.map((n, ind) => {
            return (<div key={ind} className="p-6 rounded-md border-2"><h2> {n.title}</h2></div>)
          })
        }
        </div>
      </div>

      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>

    </div>
  );
}
