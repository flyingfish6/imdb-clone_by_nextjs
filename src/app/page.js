// "use client";
import Results from "../components/Results";
import delay from "delay";
const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  // const res = await fetch(
  //   `https://api.themoviedb.org/3${
  //     genre === "fetchTopRoated" ? "/movie/top_rated" : "/trending/all/week"
  //   }?api_key=${API_KEY}&language=en-US&page=1`
  // );
  // const value = ;
  // await delay(2000);
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=3737a1121b5ff57560380ba8aa4524cc&language=en-US&page=1"
  );
  if (!res.ok) {
    throw new Error("meiyoudan");
  }
  const data = await res.json();

  const results = data.results;
  // console.log(results);

  return <div>{<Results results={results} />}</div>;
}
