import React from 'react'
import './Menu.css';

const Menu = ({ items, prueba }) => {
    const handlePrueba = (id) => {
        prueba(id)
    }
    return (
        <div className="menu-list" >
             {items.map(item => {
                 const { id, title } = item;
                 console.log(id)
                 return (
                     <article key={id} className="menu-item">
                     <button onClick={() => {handlePrueba(id)}}>{title}</button>
                     </article>
                 )
             })}
        </div>
    )
}

export default Menu;
