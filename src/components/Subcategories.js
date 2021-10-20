import React from 'react'

const Subcategories = ({ subcategories, activeSubcategory, filterItems }) => {
    return (
        <div>
            {subcategories.map((subcategory, index) => {
                return (
                    <button
                    type="button"
                    className={`${activeSubcategory === subcategory ? "filter-btn active" : "filter-btn"}`}
                    key={index}
                    onClick={() => filterItems(subcategory)}
                    >{subcategory}</button>
                )
            })}
        </div>
    )
}

export default Subcategories
