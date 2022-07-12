import React, {useEffect, useState} from 'react';
import cl from "./Paginator.module.css";
// import cn from "classnames";

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({
                                            totalItemsCount,
                                            pageSize,
                                            currentPage,
                                            onPageChanged,
                                            portionSize = 10
                                        }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);

    return <div className={cl.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={`${currentPage === p ? cl.selectedPage : cl.unselectedPage}`}
                             key={p}
                             onClick={() => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
};

export default Paginator;