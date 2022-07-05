import React, {useEffect, useState} from 'react';
import cl from "./Paginator.module.css";
import cn from "classnames";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(()=>setPortionNumber(Math.ceil(props.currentPage/portionSize)), [props.currentPage]);

    return <div className={cl.paginator}>
        {portionNumber > 1 && <button onClick={ () => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return <span className={`${props.currentPage === p ? cl.selectedPage : cl.unselectedPage }`}
                                 key={p}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
        {portionCount > portionNumber && <button onClick={ () => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            </div>
};

export default Paginator;