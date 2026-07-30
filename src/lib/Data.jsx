export const getCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data.news_category;
}
export const getNewsByCategoriesId = async (category_id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}
export const getNewsDetailsById = async (news_id1) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id1}`);
  const data = await res.json();
  return data.data[0];
}