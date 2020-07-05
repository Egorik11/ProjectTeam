export const loadPosts = async (page = 1, limit = 6) => {
  const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });
};