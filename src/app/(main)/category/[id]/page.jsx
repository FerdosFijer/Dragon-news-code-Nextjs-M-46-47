import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoriesId } from '@/lib/Data';

const NewsCatagoryPage = async ({params}) => {
    const {id} = await params;
    // console.log(id, "it is n");

    const categories = await getCategories()
    // console.log(categories);

    const news = await getNewsByCategoriesId(id);
    // console.log(news);
    
    
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-16">

      <div className=" col-span-3">
        <LeftSidebar categories={categories} active_id={id}/>
      </div>

      <div className=" col-span-6">
        <h2 className='font-bold text-lg  '> News by category</h2>
        <div className="space-y-4 mt-6">
          {
          news.length >0 ? news.map((n, ind) => {
            return (<NewsCard key={ind} news={n} ></NewsCard>)
          }): <h2 className='font-bold text-4xl text-center my-7'> No news found</h2>
        }
        </div>
      </div>

      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>

    </div>
    );
};

export default NewsCatagoryPage;