
import React from 'react'
import './Menu.css';

const Menu = ({ items }) => {
    return (
        <div className="menu-list" >
             {items.map(item => {
                 const { id, title } = item;
                 return (
                     <article key={id} className="menu-item">
                     <button>{title}</button>
                     </article>
                 )
             })} 
        </div>
    )
}

export default Menu;
