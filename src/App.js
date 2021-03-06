import React, { Component } from "react";
import ButtonLetters from "./ButtonLetters";
import WordToFind from "./WordToFind";
import PrintHanged from "./PrintHanged";
import "./App.css";
const wordOf = [
  "VOITURE",
  "CHAMPIGNON",
  "TRACTEUR",
  "POMME",
  "POMPE",
  "ORANGE",
  "ANANAS",
  "ARBRE",
  "POTEAU",
  "HERBE",
  "JARDIN",
  "MAISON",
  "THOMAS",
  "PORTABLE",
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
      nbTry: 0,
    };
  }
  chooseWord() {
    let length = wordOf.length;
    let random = Math.floor(Math.random() * length);
    let result = wordOf[random];
    return result;
  }
  win() {
    const { nbTry, lettersFind, finalWord } = this.state;
    const splitFinalWord = finalWord.split("");
    let a = new Set(splitFinalWord).size - 1;
    console.log(lettersFind.length + "et " + a);
    if (nbTry <= 7 && lettersFind.length === a) {
      return true;
    }
    return false;
  }
  loose() {
    const { nbTry } = this.state;
    if (nbTry >= 7) {
      return false;
    }
    return true;
  }
  shouldShowLetter(letter, index) {
    const { lettersFind, finalWord } = this.state;
    if (letter === finalWord[0] || lettersFind.indexOf(letter) !== -1) {
      return letter;
    } else {
      return "_";
    }
  }
  restart() {
    // const { nbTry, lettersFind, finalWord }
    this.setState({
      nbTry: 0,
      finalWord: this.chooseWord(),
      lettersFind: [],
    });
  }
  updateLettersFind(letter) {
    const { lettersFind, finalWord } = this.state;
    const splitFinalWord = finalWord.split("");
    let result = [...lettersFind];
    if (
      splitFinalWord.indexOf(letter) !== -1 &&
      lettersFind.indexOf(letter) === -1
    ) {
      result.push(letter);
      this.setState({ lettersFind: result });
    } else {
      this.setState((prev) => ({ nbTry: prev.nbTry + 1 }));
    }
  }
  render() {
    const { finalWord, nbTry } = this.state;
    const splitFinalWord = finalWord.split("");
    console.log("ok");
    const loose = this.loose();
    const win = this.win();
    return (
      <div>
        {win ? (
          <ButtonLetters
            letter="restart"
            onClick={() => this.restart()}
            className="test"
          />
        ) : loose ? (
          letters.map((letter, index) => {
            return (
              <ButtonLetters
                letter={letter}
                onClick={() => this.updateLettersFind(letter)}
                className="ae"
                key={index}
              />
            );
          })
        ) : (
          <ButtonLetters
            letter="restart"
            onClick={() => this.restart()}
            className="test"
          />
        )}

        {splitFinalWord.map((elem, index) => {
          return (
            <WordToFind
              letter={this.shouldShowLetter(elem, index)}
              key={index}
            />
          );
        })}
        <p>{nbTry}</p>
        <p>
          {loose
            ? win
              ? "Gagné !"
              : "Partie en cours"
            : `Perdu , le mot était ${finalWord}
        `}
        </p>
        <PrintHanged number={nbTry} />
      </div>
    );
  }
}

export default App;
