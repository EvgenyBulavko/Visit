import React, { Component } from 'react';
import './Vis.css';
import { randomWord } from './Words.js';

import Player from './audio';
import Person from './Person/person';
import Lv from './lv/lv';

import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";
import step7 from "./images/7.png";
import step8 from "./images/8.png";
import step9 from "./images/9.png";
import step10 from "./images/10.png";
import step11 from "./images/11.png";
import step12 from "./images/12.png";
import step13 from "./images/13.png";
import step14 from "./images/14.png";
import step15 from "./images/15.png";
import step16 from "./images/16.png";
import step17 from "./images/17.png";
import step18 from "./images/18.png";
import step19 from "./images/19.png";
import step20 from "./images/20.png";



class Vis extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6,step7, step8, step9, step10, step11, step12, step13,step14, step15, step16, step17, step18, step19, step20]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
      Nam:0,
      lv:0
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
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-outline-primary m-1'
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

  updateNam = (value) => {
    this.setState({ Nam: value })
 }

 updateLv = (value) => {
  this.setState({ lv: value })
}

  render() {
    const onKeypress = e => {if(e.code == "Enter"){this.resetButton();}};

  document.addEventListener('keypress', onKeypress);
  
    const gameOver = this.state.mistake >= (this.props.maxWrong-this.state.lv);
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
        <div className="float-right">Score: {this.state.mistake} of {(this.props.maxWrong-this.state.lv)}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake+(this.state.Nam*7)]} alt=""/>
        </div>
        <div className="text-center">
          <p>Programming Language:</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <button className='btn btn-outline-info' onClick={this.resetButton}>Reset</button> 
        </div>
        <Person NamPers={this.updateNam}/>
        <Lv upLv={this.updateLv}/>
      </div>
    )
  }
}

export default Vis;