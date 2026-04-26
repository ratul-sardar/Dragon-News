import CatagorySelectorButton from "@/components/Home_Sections/CatagorySelectorButton/CatagorySelectorButton";
import { NewsCard } from "@/components/Home_Sections/NewsCard/NewsCard";
import Sidebar from "@/components/Home_Sections/Sidebar/Sidebar";

// To get news by catagory
async function getNewsByCatagory(newsId) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${newsId}`,
  );
  const dataObj = await res.json();

  const { data } = dataObj;

  return data;
}

export default async function NewsDetail({ params }) {
  const { newsId } = await params;

  const newsDataByCatagory = await getNewsByCatagory(newsId);

  return (
    <section className="cssContainer grid grid-cols-12 gap-5  justify-center pb-12 ">
      {/* Catagory selector*/}
      <div className="col-span-3 space-y-2.5 p-4 bg-background-inverse">
        <h3 className="font-semibold text-md text-white mb-2">All Catagorys</h3>

        <CatagorySelectorButton></CatagorySelectorButton>
      </div>
      {/* End of catagory filter*/}

      {/* News Display area*/}
      <div className="col-span-6 w-full max-h-[65vh] overflow-y-scroll bg-background-secondary p-5 space-y-4">
        {newsDataByCatagory.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
      {/* End of news display*/}

      {/* Sidebar*/}
      <div className="col-span-3  p-4 bg-background-inverse text-white">
        <Sidebar></Sidebar>
      </div>
      {/* End of sidebar*/}
    </section>
  );
}
