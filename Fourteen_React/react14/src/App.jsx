//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import sw from './data';

function App() {
  return (
    <div className='container row'>
      {
        sw.map(({ best_character, episode, poster, title, year }) => {
          const { affiliation, bio, image, name } = best_character;
          const [hover, setHover] = useState(false);

          return <div key={title} className="card" style={{ width: "33.33%" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{episode} {title} - {year}</h5>
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${year}`} aria-expanded="false" aria-controls={`collapse-${year}`}>
                      More...
                    </button>
                  </h2>
                  <div id={`collapse-${year}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <h3>{name}</h3>
                      <p><span className="badge bg-secondary">Bio</span>{bio}</p>
                      <img src={image} className="card-img-top" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={affiliation} className={`${hover ? "" : "hidden"} card-img-top`} alt="..." />
          </div>
        })
      }
    </div>
  );
}

export default App;
