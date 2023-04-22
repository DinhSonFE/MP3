import axios from "axios";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import DetailSong from "./Components/DetailSong/DetailSong";
import Header from "./Components/Header./Header";
import ListSong from "./Components/ListSong/ListSong";
import Playing from "./Components/Playing/Playing";
export const context = createContext();
function App() {
  const [listSong, setListSong] = useState();
  const [idSong, setIdSong] = useState(0);
  const [detailSong, setDetailSong] = useState({});
  const [playingSong, setPlayingSong] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // ! Fetching Data
  useEffect(() => {
    axios
      .get("http://localhost:3000/song")
      .then((response) => {
        setListSong(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //! Get Song By Id Song
  useEffect(() => {
    const song = listSong && listSong[idSong];
    setDetailSong(song);
  }, [idSong, listSong]);

  return (
    <context.Provider
      value={{
        idSong,
        setIdSong,
        playingSong,
        setPlayingSong,
        showMenu,
        setShowMenu,
      }}
    >
      <div className="App">
        <Header></Header>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-4 bg-bg-sc h-content-height justify-start p-4 ">
          <DetailSong detailSong={detailSong}></DetailSong>
          <ListSong listSong={listSong || []}></ListSong>
        </div>
        <Playing urlSong={detailSong}></Playing>
      </div>
    </context.Provider>
  );
}

export default App;
