import { getCatagorys } from "@/api/getNewsData";
import { Button } from "@heroui/react";

async function getNews(id) {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;

  const res = await fetch(url);
  const dataObj = await res.json();

  const { data } = dataObj;

  return data;
}

// To get the news catagorys
const catagorys = await getCatagorys();

// To get the news in a catagory
let news;
async function handleNews(id) {
  news = await getNews(id);
}
console.log(news);

export default async function Home() {
  return (
    <section className="cssContainer grid grid-cols-12 gap-5  justify-center pb-12 ">
      {/* Catagory selector*/}
      <div className="col-span-3 space-y-2.5 p-4 bg-background-inverse">
        <h3 className="font-semibold text-md text-white mb-2">All Catagorys</h3>

        {catagorys.map((catagory) => (
          <Button
            key={catagory.category_id}
            onClick={() => handleNews(catagory.category_id)}
            variant="tertiary"
            fullWidth={true}
            className={"rounded-none"}
          >
            {catagory.category_name}
          </Button>
        ))}
      </div>
      {/* End of catagory filter*/}

      {/* News Display area*/}
      <div className="col-span-6 bg-red-700">d</div>
      {/* End of news display*/}

      {/* Sidebar*/}
      <div className="col-span-3 bg-red-950">k</div>
      {/* End of sidebar*/}
    </section>
  );
}
