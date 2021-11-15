import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <div className="brand">
        <img src="./images/logo2.png" alt="logo" />
      </div>
      <div className="buttons">
        <Link to="/kitchen">
        <button className="home-button">
            <img src="./images/Chef.png" alt="chef" />
          </button>
        </Link>
        <Link to="/tables">
        <button className="home-button">
            <img src="./images/Mesero.png" alt="mesero" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
