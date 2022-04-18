import React from 'react';

const Categories = ({filterItems,categories }) => {
  return <>
  <div className="btn-container">
    {categories.map((e , index)=>{
      return(
      <button key={index} className="filter-btn" onClick={()=>filterItems(e)}>{e}</button>
      )
    })}
  </div>

  </>;
};

export default Categories;