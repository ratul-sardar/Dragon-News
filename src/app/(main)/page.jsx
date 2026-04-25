async function getCatagorys() {
  const url = "https://openapi.programming-hero.com/api/news/categories";

  const res = await fetch(url);
  const data = await res.json();

  const {
    data: { news_category },
  } = data;

  return news_category;
}

export default async function Home() {
  console.log(await getCatagorys());

  return (
    <section className="cssContainer grid justify-center py-12 ">
      <h2 className="">Hi, from News page.</h2>
    </section>
  );
}
