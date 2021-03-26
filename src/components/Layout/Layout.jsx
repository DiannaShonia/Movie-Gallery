import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";
import Carousel from "react-bootstrap/Carousel";

// import of images

import madMax from "../img/madmax2.jpg";
import wakanda from "../img/wakanda.jpg";
import drive from "../img/drive.jpg";
import fclub from "../img/fclub.jpg";
import dreamers from "../img/dreamers.jpg";
import her from "../img/her.jpg";
import element from "../img/element.jpg";
import godfather from "../img/godfather.jpg";
import lambs from "../img/hanibal.jpg";
import joker from "../img/joker.jpg";
import land from "../img/land.jpg";
import leon from "../img/leon.jpg";
import pulp from "../img/pulp.jpg";
import lili from "../img/lili.jpg";
import lost from "../img/lost.jpg";
import truman from "../img/truman.jpg";

// import of audios

import madMaxAudio from "../audio/madmax.mp3";
import wakandaAudio from '../audio/wakanda.mp3'
import driveAudio from '../audio/nightcall.mp3'
import fclubAudio from '../audio/fclub.mp3'
import dreamersAudio from '../audio/dreamers.mp3'
import herAudio from '../audio/her.mp3'
import elementAudio from '../audio/element.mp3'
import godfatherAudio from '../audio/godfather.mp3'
import lambsAudio from '../audio/lambs.mp3'
import jokerAudio from '../audio/joker.mp3'
import landAudio from '../audio/city.mp3'
import leonAudio from '../audio/leon.mp3'
import pulpAudio from '../audio/pulp.mp3'
import liliAudio from '../audio/lili.mp3'
import lostAudio from '../audio/lost.mp3'
import trumanAudio from '../audio/truman.mp3'



const Layout = () => {
  return (
    <div className="my-container">
      <div className="gallery">
        <Carousel interval={null} nextLabel={null} prevLabel={null}>
          <Carousel.Item>
            <img src={madMax} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Mad Max: Fury Road</h3>
              <p>Dir. George Miller (2015)</p>
              <audio src={madMaxAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={wakanda} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Black Panther</h3>
              <p>Dir. Ryan Coogler (2018)</p>
              <audio src={wakandaAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={drive} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Drive</h3>
              <p>Dir. Nicolas Winding Refn (2011)</p>
              <audio src={driveAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={fclub} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Fight Club</h3>
              <p>Dir. David Fincher (1999)</p>
              <audio src={fclubAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={dreamers} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>The Dreamers</h3>
              <p>Dir. Bernardo Bertolucci (2003)</p>
              <audio src={dreamersAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={her} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Her</h3>
              <p>Dir. Spike Jonze (2013)</p>
              <audio src={herAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={element} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>The Fifth Element</h3>
              <p>Dir. Luc Besson (1997)</p>
              <audio src={elementAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={godfather} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>The Godfather</h3>
              <p>Dir. Francis Ford Coppola (1972)</p>
              <audio src={godfatherAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={lambs} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>The Silence of the Lambs</h3>
              <p>Dir. Jonathan Demme (1991)</p>
              <audio src={lambsAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={joker} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Joker</h3>
              <p>Dir. Todd Philips (2019)</p>
              <audio src={jokerAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={land} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>La La Land</h3>
              <p>Dir. Damien Chazelle (2016)</p>
              <audio src={landAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={leon} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Léon: The Professional</h3>
              <p>Dir. Luc Besson (1994)</p>
              <audio src={leonAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pulp} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Pulp Fiction</h3>
              <p>Dir. Quentin Tarantino (1994)</p>
              <audio src={pulpAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={lili} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Harry Potter and the Deathly Hallows</h3>
              <p>Dir. David Yates (2011)</p>
              <audio src={liliAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={lost} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>Lost in Translation</h3>
              <p>Dir. Sofia Coppola (2003)</p>
              <audio src={lostAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={truman} className="d-block w-100 img" alt="" />
            <Carousel.Caption>
              <h3>The Truman Show</h3>
              <p>Dir. Peter Weir (1998)</p>
              <audio src={trumanAudio} controls></audio>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Layout;
