import React, { Component } from 'react';
import './Vis.css';
import { randomWord } from './Words.js';

import Player from './audio';

import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";

class Vis extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-outline-danger m-1'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!"
    }

    if (gameOver) {
      gameStat = "You Lost!!!"
    }

    return (
      <div className="Hangman container">
         <Player/>
        <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt=""/>
        </div>
        <div className="text-center">
          <p>Programming Language:</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <button className='btn btn-outline-info' onClick={this.resetButton}>Reset</button>
          
        </div>
      </div>
    )
  }
}

export default Vis;