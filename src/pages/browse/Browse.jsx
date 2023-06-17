import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import Banner from "../../Components/Banner.js";
import MovieList from "../../Components/MovieList";
function Browse() {
  //Các state để quản lý data movie Array, banner random và trạng thái loading
  const [movieDataArr, setmovieDataArr] = useState([]);
  const [movieBannerRandom, setMovieBannerRandom] = useState();
  const [isLoading, setIsLoading] = useState(false);
  //API key
  const API_KEY = "381d90cbe832f9ed337e1407f33d8116";
  //quản lý các api bằng object
  const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };
  //Khai báo array rổng để sau khi fetching sẽ push các data của từng thể loại phim vào
  const movieArrTem = [];
  //Hàm để fetching data các thể loại phim bằng vòng lặp for trong object
  //Bắt đầu fetching thì trạng thái loading và true và kết thúc sẽ là false để hiển thị Loading... cho người dùng
  const getMovieFunction = async function () {
    setIsLoading(true);
    try {
      for (const request in requests) {
        const response = await fetch(
          `https://api.themoviedb.org/3${requests[request]}`
        );
        if (!response.ok) {
          throw new Error("This film is not available");
        }
        const data = await response.json();
        movieArrTem.push({ type: request, data: data });
      }
    } catch (error) {
      console.log(error.message);
    }
    setmovieDataArr(movieArrTem);
    setIsLoading(false);
  };
  //Sử dụng useEffect cho hàm gọi data movie khi load vào trang web
  useEffect(() => {
    getMovieFunction();
  }, []);
  //Lọc ra mảng chứa data sử dụng cho phần banner và  Lấy random 1 movie cho banner
  useEffect(() => {
    const movieArrforBanner = movieDataArr.filter(
      (dataarr) => dataarr.type === "fetchNetflixOriginals"
    );
    if (movieArrforBanner.length !== 0) {
      setMovieBannerRandom(
        movieArrforBanner[0].data.results[
          Math.floor(
            Math.random() * movieArrforBanner[0].data.results.length - 1
          )
        ]
      );
    }
  }, [movieDataArr]);
  //Thành phần JSX trang chủ gồm có Navbar, banner và Movielist chứa các list thể loại phim
  return (
    <div className="app">
      <NavBar />
      <Banner movieBannerRandom={movieBannerRandom} isLoading={isLoading} />
      <MovieList movieDataArr={movieDataArr} isLoading={isLoading} />
    </div>
  );
}

export default Browse;
