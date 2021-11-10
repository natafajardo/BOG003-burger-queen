import React from 'react';
import product from '../../api/data.json';
import './CustomOrder.css';
import BtnAdd from '../Button/BtnAdd';

const CustomOrder = ({ setToogleOrder, firstTitle, data }) => {

    return (
        <div className="styleDivGradient">
            <div className= "closeCustomeOrder">
                {<button className="closeOrder" onClick={() => {
                    setToogleOrder(false)
                }}>X</button>}
                <h3 className="titleOrder">{firstTitle.toUpperCase()}</h3>
            </div>
            <div>
                <img src={data[0].img} alt={data[0].title} />
            </div>
            <div className="style-space"></div>
            <h3>INGREDIENTES</h3>
            <div className= "orderRow">
                {data[0].remove.map(item => {
                    return (<p>{item.toUpperCase()}</p>)
                })}
            </div>
            <div className="style-space" ></div>
            <h3>ADICIONALES</h3>
            <div className= "orderRow" >
                {data[0].add.map(item => {
                    return (<p>{item.toUpperCase()}</p>)
                })}
            </div>
            <div className="style-space" ></div>
            <div className="additions">
                <BtnAdd content={"+"} />
                <span> 1 </span>
                <BtnAdd content={"-"} />
            </div>
            <div className="style-space"></div>
            <div>
                <button onClick={() => {
                    setToogleOrder(false)
                }}>OK <img src="./images/ok.png" alt="confirmar" /> </button>
            </div>
        </div>
    )
}

export default CustomOrder
