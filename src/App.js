import React, { Component } from "react";
import ButtonLetters from "./ButtonLetters";
import WordToFind from "./WordToFind";
import "./App.css";
const wordOf = [
  "voiture",
  "champignon",
  "tracteur",
  "pomme",
  "pompe",
  "orange",
  "ananas",
  "arbre",
  "poteau",
  "herbe",
  "jardin",
  "maison",
];

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalWord: this.chooseWord(),
      lettersFind: [],
    };
  }
  chooseWord() {
    let length = wordOf.length;
    let random = Math.floor(Math.random() * length);
    return wordOf[random];
  }
  lettersStatus(index = "") {
    const { finalWord, lettersFind } = this.state;
    let result = [];
    let splitFinalWord = finalWord.split("");
    if (!splitFinalWord.includes(index)) {
      console.log("a");
      return;
    }
    splitFinalWord.map((elem) => {
      if (lettersFind.includes(elem)) {
        result.push(elem);
      } else if (elem === index) {
        result.push(index);
        this.setState({ lettersFind: lettersFind.push(index) });
      }
    });
    this.setState({ lettersFind: result });
  }
  render() {
    console.log(this.state.finalWord);
    console.log(this.state.lettersFind);
    return (
      <div>
        {letters.map((letter, index) => {
          return (
            <ButtonLetters
              letter={letter}
              onClick={() => this.lettersStatus(letter)}
              className="ae"
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
