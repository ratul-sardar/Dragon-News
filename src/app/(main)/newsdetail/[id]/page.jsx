// MetaData
export async function generateMetadata({ params }) {
  const { id } = await params;

  // fetch post information
  const news = await getNewsDetail(id);

  return {
    title: news.title,
    description: news.details,
  };
}

// To get a single news
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

  return (
    <section>
      <div className="cssContainer py-12">
        <h2 className="">{title}</h2>
      </div>
    </section>
  );
}
