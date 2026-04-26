export async function getCatagorys() {
  const url = "https://openapi.programming-hero.com/api/news/categories";

  const res = await fetch(url);
  const data = await res.json();

  const {
    data: { news_category },
  } = data;

  return news_category;
}

// To get news by catagory
export async function getNewsByCatagory(newsId) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${newsId}`,
  );
  const dataObj = await res.json();

  const { data } = dataObj;

  return data;
}
