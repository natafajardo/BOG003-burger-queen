import React from 'react'

const Categories = ({ categories, filterSubcategories, activeCategory }) => {
    return (
        <div>
            {categories.map((category, index) => {
                return (
                    <button 
                    type="button"
                    className={`${activeCategory === category ? "filter-btn active" : "filter-btn"}`}
                    key={index}
                    onClick={() => filterSubcategories(category)}
                    >{category}</button>
                )
            })}
        </div>
    )
}

export default Categories
