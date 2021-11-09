import React from 'react';
import product from '../../api/data.json';
import './CustomOrder.css';
const CustomOrder = ({ id, setToogleOrder, firstTitle, data }) => {
    const showId = (id) => {
        console.log("showid", id);
    }

    console.log(data);
    return (
        <div className="styleDivGradient" onClick={() => { showId(id) }}>
            <div>
                <h3>{firstTitle}</h3>
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
            <div>MAS Y MENOS</div>
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
