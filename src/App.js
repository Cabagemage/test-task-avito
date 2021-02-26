import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import PopupImage from "./components/Modal/PopupImage";
import Preloader from "./components/Preloader/Preloader";
import { ImagesApp } from "./utils/api/api";
function App() {
  const [isOpen, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [modalCard, setModalCard] = useState({});
  useEffect(() => {
    async function fetchCards() {
      try {
        setPreloader(true);
        const getAllCards = await ImagesApp.getCards();
        setCards(getAllCards);
      } catch (e) {
        console.log(e);
      } finally {
        setPreloader(false);
      }
    }
    fetchCards();
  }, []);

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

  const handleCardClick = async (card) => {
    setSelectedCard(card);
    try {
      setPreloader(true);
      const getThisCard = await ImagesApp.getCard(card.id);
      console.log(getThisCard);
      setModalCard(getThisCard);
      setModalOpen();
    } catch (e) {
      console.log(e);
    } finally {
      setPreloader(false);
    }
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
      {preloader ? (
        <Preloader />
      ) : (
        <PopupImage
          card={selectedCard}
          modalCard={modalCard}
          isOpen={isOpen}
          isClose={setModalClose}
          closeToOverlay={handleOverlayClose}
        />
      )}
    </div>
  );
}

export default App;
