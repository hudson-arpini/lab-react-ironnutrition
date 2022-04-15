import React, { useState } from "react"

export function FoodBox(props) {

  const[amount, setAmount] = useState(0)

  function changeAmount(event){
    setAmount(event.target.value)
  }

  function todayFunction() {
    props.todayFoods[props.todayFoods.indexOf(props.food)].quantity += Number(amount)
    props.setAmount([...props.amount])
  }


    return(
        <div className="box">

          <article className="media">

            <div className="media-left">
              <figure className="image is-64x64">
                <img src={props.img} alt="foodimg" />
              </figure>
            </div>

            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{props.name}</strong> <br />
                  <small>{props.calories} cal</small>
                </p>
              </div>
            </div>

            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={amount} onChange={changeAmount} />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={todayFunction}>
                    +
                  </button>
                </div>
              </div>
            </div>

          </article>
        </div>
    )
}