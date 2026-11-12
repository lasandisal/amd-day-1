// can do this by seperate backend

import axios from "axios"

const API_KEY = "8ce42a6141194a38bbe18cb8a76af320"
const BASE_URL = "https://newsapi.org/v2"

export const fetchNews = async () => {
  const res = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`)
  return res.data
}

// export interface Ariticle{
//   source: {
//     id: string | null,
//     name: string
//   };
//   authour: string | null;
//   title: string;
//   description: string | null;
//   url: string;
//   urlToImage: string | null;
//   publishedAt: string;
//   content: string | null;
// }

// export interface NewsResponse{
//   status: string;
//   totalResults: number;
//   articles: Ariticle[];
// }

// export const fetchTopHeadlines = async (country: string = "us"): Promise<Article[]> =>{
//   try{

//   }catch(error){
    
//   }
// } 