import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
import SearchForm from "../../Components/SearchForm";
import ResultList from "../../Components/ResultList";
import "./Search.css";
const Search = () => {
  //Khai báo các state để quản lý trạng thái, data, error, đóng mở movieDetail, ID movie, trailer ở trang Search,
  const [dataSearch, setDataSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieModaleOpen, setMovieModalOpen] = useState(false);
  const [curMovieID, setCurMovieID] = useState(0);
  const [movieTrailer, setMovieTrailer] = useState([]);
  //Hàm để lấy data search dựa trên keywordSearch được lift state từ trang SearchForm
  //Nếu keyword là rỗng thì trả ra data search là array rỗng, còn nếu lỗi thì sẽ trả ra lỗi cho người dùng
  //Trạng thái Loading hiển thị loading khi bắt đầu search và khi kết thúc search
  const getDataSearchMovie = async (keywordSearch) => {
    setIsLoading((prevState) => true);
    if (keywordSearch === "") {
      setDataSearch([]);
    }
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=381d90cbe832f9ed337e1407f33d8116&language=en&query=${keywordSearch}`
      );
      if (!response.ok) {
        throw new Error(
          "Something Went Wrong, Please refresh the page and research again!"
        );
      }
      const data = await response.json();
      setDataSearch(data.results);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    setIsLoading((prevState) => false);
  };
  //Xây dựng function lấy trailer của phim
  const getTrailer = async function (movieId) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=381d90cbe832f9ed337e1407f33d8116`
      );
      //Trong trường hợp API bị lỗi không tồn tại thì báo với user là phim k có trailer
      if (!response.ok) {
        throw new Error("This film dont have trailer");
      }
      const data = await response.json();
      // Lọc ra lấy data trailer theo thứ tự ưu tiên lấy trailer nếu không có mới lấy teaser với site Youtube, nếu không có trả mảng rỗng

      let trailerdata = data.results.filter((arr) => {
        return arr.site === "YouTube" && arr.type === "Trailer";
      });
      if (trailerdata.length === 0) {
        trailerdata = data.results.filter((arr) => {
          return arr.site === "YouTube" && arr.type === "Teaser";
        });
      }
      //Nếu trailerdata có giá trị thì lấy giá trị đó để truyền xuống cho movie detail, và set Error thành string rỗng
      //Nếu trailer data không có thì setMovieTrailer thành mảng rỗng  và báo user là không có trailer(Nguồn Youtube không có)
      if (trailerdata[0]) {
        setMovieTrailer(trailerdata[0]);
        setError("");
      } else {
        setError("This film dont have trailer");
        setMovieTrailer([]);
      }
    } catch (error) {
      setMovieTrailer([]);
      setError(error.message);
    }
  };
  //Xây dựng function khi click vào Movie:  nếu như click vào movie có ID trùng với ID đang mở thì sẽ đóng cửa sổ movieDetail
  // Ngược lại nếu current ID không bằng với ID vừa click thì sẽ mở cửa sổ detail cũng như gọi hàm getTrailer và set ID
  //Có thể mở movieDetail ở multiple thể loại phim, còn nếu
  const chooseMovieHandler = (event) => {
    if (
      event.target.closest(".movieCheck") &&
      event.target.closest(".movieCheck").classList.contains("movieCheck")
    ) {
      if (curMovieID) {
        setMovieModalOpen(true);
      }
      if (event.target.id) {
        setMovieModalOpen(true);
        getTrailer(event.target.id);
        setCurMovieID(event.target.id);
      }
      if (curMovieID === event.target.id) {
        setMovieModalOpen((prevState) => !prevState);
      }
    } else {
      setMovieModalOpen(false);
    }
  };
  //JSX trang search sẽ trả ra data NavBar, SearchFrom và ResultList
  return (
    <div className="app" onClick={chooseMovieHandler}>
      <NavBar />
      <SearchForm getDataSearchMovie={getDataSearchMovie} />
      <ResultList
        dataSearch={dataSearch}
        isLoading={isLoading}
        error={error}
        movieModaleOpen={movieModaleOpen}
        curMovieID={curMovieID}
        movieTrailer={movieTrailer}
      />
    </div>
  );
};

export default Search;
