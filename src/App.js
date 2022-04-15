import React,{useState} from 'react';
import foods from "./foods.json"
import { FoodBox } from './components/FoodBox';
import { AddFood } from './components/AddFood';
import { SearchBar } from './components/SearchBar';
import { Todayfoods } from './components/TodaysFoods';

function App() {

  const[foodArr,setFoodArr] = useState(foods)
  const[todayFoods,setTodayFoods] = useState([])
  const[amount, setAmount] = useState(0)

  function addFood(nomeComida,Calorias,Imagem){
    setFoodArr([...foodArr, {name:nomeComida, calories:Calorias , image:Imagem , quantity:amount}])
  }

  function filterFoods(param) {
    if (param === "") {
      setFoodArr(foods);
      return;
    }

    const filteredFood = foodArr.filter((current) => {
      return current.name
        .toLowerCase()
        .includes(param.toLowerCase());
    });

    setFoodArr(filteredFood);
  }

  function todayFunction(food){
    setTodayFoods([...todayFoods, food])
  }

  function changeAmount(event){
    setAmount(event.target.value)
    foodArr.map((food)=>food.quantity=amount)
  }

  return (
    <div className="App">

      <SearchBar filterFoods={filterFoods} />

      <AddFood addfunction={addFood}/>

      {foodArr.map((foodObj)=>{return(
        <FoodBox
        name={foodObj.name}
        calories={foodObj.calories}
        img={foodObj.image}
        food={foodObj}
        todayFunction = {() =>{todayFunction(foodObj)}}
        todayFoods={todayFoods}
        setTodayFoods={setTodayFoods}
        />
      )})}

      <Todayfoods todayFoods={todayFoods} setTodayFoods={setTodayFoods} />
    </div>
  );
}

export default App;
