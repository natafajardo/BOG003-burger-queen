import React from 'react'
import './Subcategories.css';

const Subcategories = ({ subcategories, activeSubcategory, filterItems }) => {
    return (
        <div className="subcategories">
          {subcategories.map((subcategory, index) => {
                return (
                    <button
                    type="button"
                    className={`${activeSubcategory === subcategory ? "filter-btn active" : "filter-btn"}`}
                    key={index}
                    onClick={() => filterItems(subcategory)}
                    ><img src={`./images/subcategories/${subcategory}.png`} alt={subcategory} width="80" height="80"/></button>
                )
            })}  
        </div>
    )
}

export default Subcategories
