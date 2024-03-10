export async function getCategories() {
  const response = await fetchApi('https://api.mercadolibre.com/sites/MLB/categories');
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const response = await fetchApi(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return response;
}

export async function getProductById(productId: string) {
  const response = await fetchApi(`https://api.mercadolibre.com/items/${productId}`);
  return response;
}

export async function fetchApi(url: string) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
