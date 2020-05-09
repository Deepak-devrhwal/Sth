import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <main className='homePage'>
          <h1>HOME PAGE</h1>
          <h2 className='secondFont'>WELCOME TO ONE PIECE PLANET</h2>
          <div className='homePhotos'>
            <div className='bigPhoto'>
              CHARACTERS
              <Link to='/Characters'>
                <div className='css-slideshow'>
                  <figure>
                    <img
                      src='https://65.media.tumblr.com/f04675400f59bae8a0a1beb2b4a513bf/tumblr_o5ets7OX0v1t45pbyo1_500.jpg'
                      alt='class-header-semantics'
                      height='475'
                      width='555'
                    />
                    <figcaption>THE WORSE GENERATION</figcaption>
                  </figure>
                  <figure>
                    <img
                      src='../images/1.jpg'
                      height='475'
                      width='555'
                      alt='law'
                    />
                    <figcaption>THE HEART PIRATES</figcaption>
                  </figure>
                  <figure>
                    <img
                      src='../images/2.jpg'
                      height='475'
                      width='555'
                      alt='sabo'
                    />
                    <figcaption>THE REVOLUTIONARY ARMY</figcaption>
                  </figure>
                  <figure>
                    <img
                      src='../images/3.jpg'
                      alt='class-header-multimedia'
                      height='475'
                      width='555'
                    />
                    <figcaption>RED HAIR PIRATES</figcaption>
                  </figure>
                  <figure>
                    <img
                      src='../images/4.jpg'
                      alt='class-header-3d'
                      height='475'
                      width='555'
                    />
                    <figcaption>WHITEBEARD PIRATES</figcaption>
                  </figure>
                  <figure>
                    <img
                      src='../images/5.jpg'
                      height='475'
                      width='555'
                      alt='akainu'
                    />
                    <figcaption> THE WORLD GOVERNMENT</figcaption>
                  </figure>
                  <figure>
                    <img
                      src='../images/6.jpg'
                      height='475'
                      width='555'
                      alt='red hair'
                    />
                    <figcaption>ROGERS PIRATES </figcaption>
                  </figure>
                  <figure>
                    <img
                      src='../images/7.jpg'
                      alt='class-header-performance'
                      height='475'
                      width='555'
                    />
                    <figcaption>STRAW HAT PIRATES</figcaption>
                  </figure>
                </div>
              </Link>
              <p className='homeFont'>Learn about characters</p>
              <img className='decor1' src='../images/divider.png' alt='png' />
            </div>
            <div className='sideLinks'>
              <div className='sideImage1'>
                ANIME
                <Link to='/Anime'>
                  <iframe
                    className='animeHome'
                    src='https://ww22.watchop.io/view/one-piece-episode-929'
                    frameBorder='0'
                    allowFullScreen
                    title='latest'
                  ></iframe>
                  <p className='homeFont'>View past episodes!</p>
                </Link>
              </div>
              <img className='decor2' src='../images/divider.png' alt='div' />
              <div className='sideImage2'>
                MANGA
                <Link to='/Manga'>
                  <img className='mangaHome' alt='idk' />
                  <p className='homeFont'>Read previous manga</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='homeIntro'>
            <p>
              This is my Ultimate Fan Site of my favorite Anime One Piece that
              was created by{" "}
              <a
                className='author'
                href='https://en.wikipedia.org/wiki/Eiichiro_Oda'
              >
                <u>Eiichiro Oda</u>
              </a>
              . With over 345 million copies in circulation worldwide, One Piece
              is the best-selling manga series of all time. The series'
              popularity resulted in him being named one of the manga artists
              that changed the history of manga.
            </p>
            <p>
              The One Piece Saga has been serialized in Shueisha's Weekly Shonen
              Jump magazine since July 19, 1997, with the chapters collected
              into eighty-two tankōbon volumes to date. One Piece follows the
              adventures of Monkey D. Luffy, a young man whose body gained the
              properties of rubber after unintentionally eating a Devil Fruit.
              With his diverse crew of pirates, named the Straw Hat Pirates,
              Luffy explores the Grand Line in search of the world's ultimate
              treasure known as "One Piece" in order to become the next King of
              the Pirates..
            </p>
            <p>
              In this website, you'll be able to explore characters, read manga,
              watch up-to-date One Piece episodes and play games made by me.
              Enjoy Your One Piece Planet Experience!
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
