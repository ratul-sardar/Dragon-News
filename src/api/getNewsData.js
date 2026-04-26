export async function getCatagorys() {
  const url = "https://openapi.programming-hero.com/api/news/categories";

  const res = await fetch(url);
  const data = await res.json();

  const {
    data: { news_category },
  } = data;

  return news_category;
}
