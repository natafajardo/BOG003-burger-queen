import React from 'react'

const Menu = ({ items }) => {
    return (
        <div>
             {items.map(item => {
                 const { id, title, price, img } = item;
                 return (
                     <article key={id} className="menu-item">
                         <img src={img} className="photo" width="150" alt={title}/>
                     <h4>{title}</h4>
                     <h4>{price}</h4>
                     </article>
                 )
             })} 
        </div>
    )
}

export default Menu;
