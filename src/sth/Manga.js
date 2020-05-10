import React, { Component } from "react";
import "./style.css";

class Manga extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>Manga</h1>
          <div className='mangaSection'>
            <div className='mangaRow1'>
              <a
                className='recent1'
                href='https://kissmanga.com/Manga/One-Piece/Chapter-977--The-Party-s-Off--?id=609993'
              >
                <img src='../images/ch977.jpg' />{" "}
              </a>
              <a
                className='recent2'
                href='https://kissmanga.com/Manga/One-Piece/Vol-096-Chapter-976--Allow-Me-To-Introduce-Myself?id=606682'
              >
                {" "}
                <img src='../images/ch976.jpg' />{" "}
              </a>
              <a
                className='recent3'
                href='https://kissmanga.com/Manga/One-Piece/Chapter-975?id=602190'
              >
                <img src='../images/ch975.jpg' />
              </a>
              <a
                className='recent4'
                href='https://kissmanga.com/Manga/One-Piece/Chapter-974--Onward-To-Onigashima--?id=600539'
              >
                {" "}
                <img src='../images/ch974.jpg' />{" "}
              </a>
              <a
                className='recent5'
                href='https://kissmanga.com/Manga/One-Piece/Chapter-973--The-Kozuki-Line?id=598974'
              >
                {" "}
                <img src='../images/ch973.jpg' />{" "}
              </a>
              <a
                className='recent6'
                href='https://kissmanga.com/Manga/One-Piece/Chapter-971--Condemned-To-Boil?id=593362'
              >
                {" "}
                <img src='../images/ch971.jpg' />
              </a>
            </div>
          </div>
          <div className='chapterList2'>
            <a href='https://kissmanga.com/Manga/One-Piece'>
              <h5> Complete List of Chapters Here </h5>
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default Manga;
