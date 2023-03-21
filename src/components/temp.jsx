const options = {
  method: 'GET',
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd3d31e2bd9mshea393665808dfbap1dc1d6jsn9990c03d0378',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  },
}

fetch(
  'https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurency&count=100&freshness=Day&textFormat=Raw&safeSearch=Off',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
