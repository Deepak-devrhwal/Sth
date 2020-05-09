import React, { Component } from "react";
import "./style.css";
class Anime extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>Anime</h1>
          <div className='videos'>
            <div className='video1'>
              EPISODE 929
              <iframe
                width='500'
                height='288'
                src='https://ww22.watchop.io/view/one-piece-episode-929/'
                scrolling='no'
                allowFullScreen
                title='ep1'
              ></iframe>
            </div>
            <div className='video2'>
              EPISODE 928
              <iframe
                width='500'
                height='288'
                src='https://ww22.watchop.io/view/one-piece-episode-928/'
                scrolling='no'
                allowFullScreen
                title='ep2'
              ></iframe>
            </div>
            <div className='video3'>
              EPISODE 927
              <iframe
                width='500'
                height='288'
                src='https://ww22.watchop.io/view/one-piece-episode-927/'
                scrolling='no'
                allowFullScreen
                title='ep3'
              ></iframe>
            </div>
            <div className='chapterList'>
              <a href='http://www2.watchop.io/'>
                <h5>Complete List of Episodes Here</h5>
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Anime;
