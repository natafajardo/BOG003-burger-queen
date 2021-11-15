import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Categories.css';

const Categories = ({ dPlaceholder, filterItems, items }) => {
    return (
        <Dropdown className='dropdown' arrowClassName='arrowDropdown' onChange={($event) => {
            filterItems($event.value)
        }} options={items} placeholder={dPlaceholder} />
    )
}

export default Categories;
