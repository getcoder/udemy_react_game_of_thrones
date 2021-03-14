export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllBooks() {
    return this.getResource(`/books/`);
  }

  getBook(id) {
    return this.getResource(`/books/${id}/`);
  }

  async getAllCharacters() {
    const randPage = Math.floor(Math.random() * 65);
    const characters = await this.getResource(
      `/characters?page=${randPage}&pageSize=10`
    );
    return characters.map((char) => this._transformChar(char));
  }

  async getCharacter(id) {
    const char = await this.getResource(`/characters/${id}`);
    return this._transformChar(char);
  }

  getAllHouses() {
    return this.getResource(`/houses/`);
  }

  getHouse(id) {
    return this.getResource(`/houses/${id}/`);
  }

  _transformChar(char) {
    const charId = char.url.slice(char.url.indexOf("characters/") + 11);
    return {
      id: charId,
      name: char.name || "no information",
      gender: char.gender || "no information",
      born: char.born || "no information",
      died: char.died || "no information",
      culture: char.culture || "no information",
    };
  }

  _transformHouse(house) {
    return {
      name: house.name || "no information",
      region: house.region || "no information",
      words: house.words || "no information",
      titles: house.titles || "no information",
      overlord: house.overlord || "no information",
      ancestralWeapons: house.ancestralWeapons || "no information",
    };
  }

  _transformBook(book) {
    return {
      name: book.name || "no information",
      numberOfPages: book.numberOfPages || "no information",
      publiser: book.publiser || "no information",
      released: book.released || "no information",
    };
  }
}
