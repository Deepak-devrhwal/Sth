import React from "react";
import "./style.css";
import Card from "./Card";
import luffy from "../images/Luffy.mp3";

const SHOW_TIME = 1500;

class Memory extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        "../images/11.png",
        "../images/22.png",
        "../images/33.png",
        "../images/44.png",
        "../images/55.png",
        "../images/66.png",
        "../images/77.png",
        "../images/88.png",
      ],
      matched: [],
      turned: [],
      win: false,
    };
  }

  flipCard = (index) => {
    const { turned, cards } = this.state;
    if (turned.length < 2) {
      this.setState(
        {
          turned: turned.concat(index),
        },
        () => {
          if (this.state.turned.length === 2) {
            if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
              this.setState(
                {
                  matched: this.state.matched.concat(...this.state.turned),
                  turned: [],
                },
                () => {
                  if (this.state.matched.length === cards.length) {
                    setTimeout(() => {
                      this.setState({ win: true });
                    }, SHOW_TIME / 2);
                  }
                }
              );
            } else {
              setTimeout(() => {
                this.setState({ turned: [] });
              }, SHOW_TIME);
            }
          }
        }
      );
    }
  };

  reset = () => {
    window.location.reload();
  };

  setHalfVolume = (event) => {
    event.target.volume = 0.4;
  };

  render() {
    if (!this.state.win) {
      const cards = this.state.cards.map((card, index) => {
        let up = !this.state.turned.includes(index)
          ? this.state.matched.includes(index)
          : this.state.turned.includes(index);

        return (
          <Card
            flipCard={this.flipCard}
            value={card}
            up={up}
            index={index}
            key={index}
          />
        );
      });
      return (
        <div>
          <div className='memoryGame'>
            <h1>MEMORY</h1>
            <main className='memoryBoard'>{cards}</main>
            <button onClick={this.reset} className='resetButton'>
              PLAY AGAIN
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>MEMORY</h1>
          <div className='youWin'>
            <audio
              id='audio'
              src={luffy}
              onLoadedData={this.setHalfVolume}
              autoPlay
            />
            <h4 className='aniWin'> YOU WIN!!! </h4>
            <button onClick={this.reset} className='resetButton'>
              PLAY AGAIN
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Memory;
