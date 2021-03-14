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

  getAllBooks = async () => {
    const books = await this.getResource(`/books/`);
    return books.map((book) => this._transformBook(book));
  };

  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}/`);
    return this._transformBook(book);
  };

  getAllCharacters = async () => {
    const randPage = Math.floor(Math.random() * 65);
    const characters = await this.getResource(
      `/characters?page=${randPage}&pageSize=10`
    );
    return characters.map((char) => this._transformChar(char));
  };

  getCharacter = async (id) => {
    const char = await this.getResource(`/characters/${id}`);
    return this._transformChar(char);
  };

  getAllHouses = async () => {
    const houses = await this.getResource(`/houses/`);
    return houses.map((house) => this._transformHouse(house));
  };

  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}/`);
    return this._transformHouse(house);
  };

  _getId = (item) => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  };

  _transformChar = (char) => {
    // const charId = char.url.slice(char.url.indexOf("characters/") + 11);
    return {
      id: this._getId(char),
      name: char.name || "no information",
      gender: char.gender || "no information",
      born: char.born || "no information",
      died: char.died || "no information",
      culture: char.culture || "no information",
    };
  };

  _transformHouse = (house) => {
    return {
      id: this._getId(house),
      name: house.name || "no information",
      region: house.region || "no information",
      words: house.words || "no information",
      titles: house.titles || "no information",
      overlord: house.overlord || "no information",
      ancestralWeapons: house.ancestralWeapons || "no information",
    };
  };

  _transformBook = (book) => {
    return {
      id: this._getId(book),
      name: book.name || "no information",
      numberOfPages: book.numberOfPages || "no information",
      publiser: book.publiser || "no information",
      released: book.released || "no information",
    };
  };
}
