import React from 'react';

const Searchbox = ({ filterText, onFilter, onClear, placeholder = "Search..." }) => (
    <div className='search-wrapper'>
        <input
            id="search"
            type="text"
            placeholder={placeholder}
            value={filterText}
            onChange={onFilter}
            className="form-control component-search" 
            style={{ width: '100%', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        />
        <button 
            type="button" 
            onClick={onClear} 
            className="btn btn-primary" 
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        >
            Clear
        </button>
    </div>
);

export default Searchbox;