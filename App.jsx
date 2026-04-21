import React, { useState } from 'react';
import './App.css';
import { data } from './data.jsx';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(data[0]);

  return (
    <div className="anonime-container">
      <nav className="navbar">
        <div className="logo">Anonime</div>
        <div className="nav-links">
          <span>Home</span>
          <span>List anime</span>
        </div>
        <input type="text" placeholder="Search chapter..." className="search-bar" />
      </nav>

      <div className="explore-header">Explore</div>
      <div className="hero-content">
        <p>What are you gonna watch today ?</p>
      </div>
      <section className="hero">
        <div className="hero-content">
          <br />
          <h1>{selectedMovie.movieName}</h1>
          <br />
          <p>{selectedMovie.description}</p>
        </div>
        <div className="hero-overlay"></div>
        <img src={selectedMovie?.image} alt="test"/>
      </section>

      <div className="explore-header">New Release</div>
      <section className="explore">
        <div className="chapter-grid">
          {data.map((item) => (
            <div key={item.id} className="chapter-card" onClick={() => setSelectedMovie(item)} style={{ cursor: 'pointer' }}>
              <div className="card-image">
                <img src={item.image} alt={item.movieName} />
                <div className="ep-tag">Episode {item.episode}</div>
              </div>
              <h3>{item.movieName}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;