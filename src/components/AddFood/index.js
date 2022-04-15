import React,{useState} from "react"

export function AddFood(props) {

            const [open, setOpen] = useState(false);
            const [initialName, setInitialName] = useState('')
            const [initialCalories, setInitialCalories] = useState(0)
            const [initialImg, setInitialImg] = useState('')

            function handleClickOpen() {
              setOpen(true);
            };
          
            function handleClose() {
              props.addfunction(initialName,initialCalories,initialImg)
              setOpen(false);
            };

            function changeName(event){setInitialName(event.target.value)}
            function changeCalories(event){setInitialCalories(event.target.value)}
            function changeImg(event){setInitialImg(event.target.value)}
          
            return (
              <div>
                <button variant="outlined" onClick={handleClickOpen}>
                  Add New Food
                </button>
                <dialog open={open} onClose={handleClose}>
                  <h1>Add New Food</h1>
                  <div className="content">
                    <p>
                      Insert the food's name, number of calories and an image.
                    </p>
                    <input type="text" placeholder="Food's Name" onChange={changeName}></input><br />
                    <input type="number" placeholder="Calories" onChange={changeCalories}></input><br />
                    <input type="text" placeholder="Image Source" onChange={changeImg}></input>
                  </div>

                  <div className="actions">
                    <button onClick={handleClose}>Submit</button>
                  </div>
                </dialog>
              </div>
            );
          }