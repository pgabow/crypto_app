import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  // 'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  // 'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  'X-RapidAPI-Key': 'd3d31e2bd9mshea393665808dfbap1dc1d6jsn9990c03d0378',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
}

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      // query: ({ newsCategory, count }) =>
      //   createRequest(
      //     `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
      //   ),
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=Cryptocurency&count=100&freshness=Day&textFormat=Raw&safeSearch=Off`
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
// https://bing-news-search1.p.rapidapi.com/news/search?q=%3CREQUIRED%3E&freshness=Day&textFormat=Raw&safeSearch=Off
// https://bing-news-search1.p.rapidapi.com/news/search?q=crypto&count=100&freshness=Day&textFormat=Raw&safeSearch=Off