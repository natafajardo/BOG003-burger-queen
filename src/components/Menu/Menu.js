import React,{useState} from 'react';
import './Menu.css';

const Menu = ({ items, setToogleOrder, buttonsVisible, setItemTitle}) => {
    return (
        <div className={buttonsVisible ? "menu-list-visible" : "menu-list-no-visible"} >
             {items.map(item => {
                 const { id, title } = item;
                 console.log("menu", id)
                 return (
                     <article key={id}>
                       <button onClick={() => {
                        setItemTitle(title)
                        setToogleOrder(true)
                       }}>
                         {title}
                       </button>
                     </article>
                 )
             })}
        </div>
    )
}

export default Menu;
