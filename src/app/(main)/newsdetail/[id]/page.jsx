async function getNewsDetail(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const dataObj = await res.json();

  const { data } = dataObj;

  const [news] = data;

  return news;
}

export default async function NewsDetails({ params }) {
  const { id } = await params;
  const newsDetails = await getNewsDetail(id);

  const { title } = newsDetails;

  console.log(title);

  return (
    <section>
      <div className="cssContainer py-12">
        <h2 className="">{title}</h2>
      </div>
    </section>
  );
}
