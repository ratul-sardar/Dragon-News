import CatagorySelectorButton from "@/components/Home_Sections/CatagorySelectorButton/CatagorySelectorButton";
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
      <div className="col-span-6 bg-red-700">
        {newsDataByCatagory.map((news) => (
          <h2 key={news._id}>{news.title}</h2>
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
