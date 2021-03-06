import React from "react";
import s from "./paginate.module.css";

export default function Paginate({ recipesPerPage, allRecipes, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className={`${s.paginate}`}>
        {pageNumbers?.map((number) => {
          return (
            <div key={number} className={`${s.number}`}  onClick={() => paginate(number)}>
              <span className={s.span}>{number}</span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
