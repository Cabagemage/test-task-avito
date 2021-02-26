import React from "react";
import PopupWithForm from "./PopupWithForm";
import "./styles/imagepopup.css";

const ImagePopup = ({ modalCard, isOpen, isClose, closeToOverlay }) => {
  return (
    <PopupWithForm
      isOpen={isOpen}
      isClose={isClose}
      closeToOverlay={closeToOverlay}
      children={
        <>
          <div className="imagePopup">
            <div className="imagePopup__imageArea">
              <img className="imagePopup__image" src={modalCard.url}></img>
              <div className="popup__inputs">
                <input
                  type="text"
                  name="text"
                  className="popup__input popup__input_type_link"
                  placeholder="Ваше имя"
                />
                <input
                  type="text"
                  className="popup__input popup__input_type_link"
                  placeholder="Ваш комментарий"
                />
                <button disabled className="button">
                  Оставить комментарий
                </button>
              </div>
            </div>

            <div className="comments">
              {modalCard.comments
                ? modalCard.comments.map((el, i) => (
                    <div className="comment">
                      <h4 className="comment__title">
                        {el.date
                          ? new Date(el.date).toLocaleDateString()
                          : null}
                      </h4>
                      <p className="comment__subtitle">{el.text}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </>
      }
    />
  );
};

export default ImagePopup;
