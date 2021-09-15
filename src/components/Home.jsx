import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewer";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import { setMovie } from "../features/movie/movieSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const movies = useSelector((state) => state.movie.recommends);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  const getMovies = async (db) => {
    const moviescol = collection(db, "movies");
    const moviesSnapshot = await getDocs(moviescol);
    const movieList = moviesSnapshot.docs;
    return movieList;
  };
  // console.log(getMovies(db));

  useEffect(() => {
    getMovies(db).then((movies) => {
      movies.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            return null;
        }
      });
      dispatch(
        setMovie({
          recommends: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });

    console.log(newDisneys);
    
  }, [userName]);

  console.log(movies);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
