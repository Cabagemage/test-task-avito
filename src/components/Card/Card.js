import "./styles/card.css";

function Card({ card, cardUrl, setModalOpen, handleCardClick }) {
  // openModal={setModalOpen} closeModal={setModalClose}
  function handleClick() {
    handleCardClick(card);
  }
  return (
    <>
      <img onClick={handleClick} className="card" src={cardUrl}></img>
    </>
  );
}

export default Card;
