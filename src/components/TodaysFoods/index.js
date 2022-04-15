import React from "react";


export function Todayfoods(props) {
    return(
        <>
            <h1>Today's Foods</h1>
            <ul>
                {props.todayFoods.map((current) => {
                  return (
                      <li>
                        <span>{`${Number(current.quantity)+1} ${current.name} ${current.calories * current.quantity} Cal`}</span>
                      </li>
                    
                  );
                })}
            </ul>   

            <strong>
                      Total:{' '}{props.todayFoods.reduce((acc, el) => acc + el.calories * el.quantity,0)}{' '}cal                     
            </strong>
        </>
    )
}