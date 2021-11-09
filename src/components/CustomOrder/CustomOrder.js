import React from 'react'
import product from '../../api/data.json'

const CustomOrder = ({id, setToogleOrder, firstTitle, data }) => {
    const style = {
        height: '2px',
        width: '100%',
        background: '#000000'
    };
    const styleDivGradient ={
        background: 'linear-gradient(170.74deg, #84EADD 14.03%, #55A6D9 38.37%, #4D7DAF 54.97%, #5B5488 73.23%, #534367 90.74%)',
        width: '100%',
        padding: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Ropa Sans',
        borderRadius: '10px'
    }
    const showId = (id) => {
        console.log("showid", id);
    }
    const direction = {
        flexDirection: 'row'
    }
    console.log(data);
    return (
        <div style={styleDivGradient} onClick={() => {showId(id)}}>
            <div>
            <h3>{firstTitle}</h3>
            <img src={data[0].img} alt={data[0].title}/>
            </div>
            <div style={style}></div>
            <h3>INGREDIENTES</h3>
            <div style={direction} >
            {data[0].remove.map(item =>{
                return (<p>{item.toUpperCase()}</p>)
            })}
            </div>
            <div style={style}></div>
            <h3>ADICIONALES</h3>
            <div style={direction}>
            {data[0].add.map(item =>{
                return (<p>{item.toUpperCase()}</p>)
            })}
            </div>
            <div style={style}></div>
            <div>MAS Y MENOS</div>
            <div style={style}></div>
            <div>
            <button onClick={() => {
                setToogleOrder(false) 
            }}>OK <img src="./images/ok.png" alt="confirmar" /> </button>
            </div>
        </div>
    )
}

export default CustomOrder
