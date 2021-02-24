class imagesApi {
  constructor({ baseUrl, headers, key }) {
    this.baseUrl = baseUrl;
  }
  //  Проверка на статус ответа с сервера
  checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // Получение массива карточек с сервера
  async getCards() {
    return await fetch(this.baseUrl, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${this.key}`,
      },
    }).then(this.checkStatus);
  }
  async getCard(imageId) {
    return await fetch(`${this.baseUrl}/${imageId}`, {
      headers: {
        Accept: "application/json",
      },
    }).then(this.checkStatus);
  }
  async postComment(imageId, name, text) {
    return await fetch(`${this.baseUrl}/${imageId}/comments`, {
      headers: {
        Accept: "application/json",
        body: JSON.stringify({
          name: name,
          text: text,
        })
      },
    }).then(this.checkStatus);
  }
}
export const ImagesApp = new imagesApi({
  baseUrl: " https://boiling-refuge-66454.herokuapp.com/images",
});
