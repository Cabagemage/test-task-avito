import "./styles/cards.css";
import Card from "../Card/Card";
function Cards({ cards, setModalOpen, setModalClose, handleCardClick }) {
  return (
    <div className="cards">
      {cards.map((card, i) => (
        <Card
          card={card}
          cardUrl={card.url}
          handleCardClick={handleCardClick}
          id={card.id}
          setModalOpen={setModalOpen}
          setModalClose={setModalClose}
        />
      ))}
    </div>
  );
}

export default Cards;
