//delete the import in the maincontainer
//delete the window.tmdb = tmdb

const tmdb = async (path, params = {}) => {
  const qs = new URLSearchParams({ path, ...params });
  const res = await fetch("/.netlify/functions/tmdb?" + qs);
  if (!res.ok) throw new Error(await res.text());

  return res;
};

export default tmdb;
