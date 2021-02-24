import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import PopupImage from "./components/Modal/PopupImage";
import { ImagesApp } from "./utils/api/api";
function App() {
  const [isOpen, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [modalCard, setModalCard] = useState({});
  useEffect(() => {
    ImagesApp.getCards().then((res) => {
      setCards(res);
    });
  }, []);
  console.log(cards);
  function setModalOpen() {
    setOpen(true);
  }
  function setModalClose() {
    setOpen(false);
  }
  const handleOverlayClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setModalClose();
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
    ImagesApp.getCard(card.id).then((res) => {
      setModalCard(res);
    });
    setModalOpen();
  };
  return (
    <div className="App">
      <Header />
      <Cards
        handleCardClick={handleCardClick}
        cards={cards}
        setModalOpen={setModalOpen}
        setModalClose={setModalClose}
      ></Cards>
      <Footer />
      <PopupImage
        card={selectedCard}
        modalCard={modalCard}
        isOpen={isOpen}
        isClose={setModalClose}
        closeToOverlay={handleOverlayClose}
      />
    </div>
  );
}

export default App;
