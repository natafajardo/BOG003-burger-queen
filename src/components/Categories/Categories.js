import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Categories.css';

const Categories = ({ categories, filterSubcategories, activeCategory }) => {
    
    return (
        <Dropdown className='dropdown' arrowClassName='arrowDropdown' onChange={($event) => filterSubcategories($event.value)} options={categories} placeholder="Selecciona una opción" />
    )
}

export default Categories;
