import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import ModalLogin from '../../components/ModalLogin/ModalLogin';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

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
        <button className="home-button" onClick={() => setShowModal(true)}>
            <img src="./images/Mesero.png" alt="mesero" />
        </button>
      </div>
      <ModalLogin showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Home;
