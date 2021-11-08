import React from 'react'
import product from '../../api/data.json'

const CustomOrder = ({id}) => {
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
    return (
        <div style={styleDivGradient} onClick={() => {showId(id)}}>
            <div>
            <h3>SANDWICH JAMÓN Y QUESO</h3>
            <img src="./images/sandwichJamonQueso.png" alt="logo" />
            </div>
            <div style={style}></div>
            <h3>INGREDIENTES</h3>
            <div style={direction} >
            <p>PAN FRANCÉS</p>
            <p>JAMÓN DE PAVO</p>
            <p>QUESO AMERICANO</p>
            <p>SALSA DE AJO</p>
            </div>
            <div style={style}></div>
            <h3>ADICIONALES</h3>
            <div style={direction}>
            <p>QUESO</p>
            <p>HUEVO</p>
            </div>
            <div style={style}></div>
            <div>MAS Y MENOS</div>
            <div style={style}></div>
            <div>
            <button>OK <img src="./images/ok.png" alt="confirmar" /> </button>
            </div>
        </div>
    )
}

export default CustomOrder
