import React, { useState, useEffect } from "react";
import classnames from "classnames";
import FlipMove from "react-flip-move";

// Our components
import TodoItem from "./components/TodoItem";
import TextInput from "./components/TextInput";
import AddButton from "./components/AddButton";
import SortButton from "./components/SortButton";
import FilterButton from "./components/FilterButton";



const App = () => {
  // sets the value that the user input into the input text field
  const [inputValue, setInputValue] = useState("");

  // use to update the list and its components 
  const [todoItems, setTodoItems] = useState([]);

// used to update the edit button state
  const[editState, setEditstate] = useState(false);

   //function to set the input value
  const setUpEditstate = (inputTofill) => {
    setEditstate(inputTofill);
  };

  const handleAddTodo = () => {
    // Check if input is empty; if it is, skip the rest of the function
    if (inputValue === "") {
      return;
    }

    // This is the temporary todo item using the `inputValue`
    const temporaryTodoItem = {
      text: inputValue,
      done: false,
      createDate: new Date(),
    };

    // Add the temporary todo item to the existing list of todos
    setTodoItems([...todoItems, temporaryTodoItem]);

    // Clear the input
    setUpInputValue("");
     
    if(!editState){
      const indextoreturn = indextoEdit();
      const indextoEdit = todoItems.length;
      const temporaryList =[...todoItems]
      let tempItemNew ={...temporaryList[indextoEdit]}
      let tempItemOld ={...temporaryList[indextoreturn]}
      tempItemNew.text = tempItemOld.text;
      tempItemNew.done = tempItemOld.done;
      tempItemNew.createDate = tempItemOld.createDate;
      temporaryList[indextoEdit] =tempItemNew;
      setUpTodoItems(temporaryList);
    }
  }
  const indextoEdit = (indextoreturn) =>{
    return indextoreturn;
  }
 
  
  // use it to retrieve that entire list from local storage 
  useEffect(() => {
    const data = localStorage.getItem("todo");

    if (data) {
      setTodoItems(JSON.parse(data));
    }
  }, []);


    // use it to store that entire list from local storage 
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoItems));
  });

  
  /**
   * checks to see if at any point if the user has completed all todo
   * it reveals a hidden message once the user is done with all todos
   */
  const areYouDone = () => {
    const tempList = todoItems.filter((items) => items.done === true);

    if (tempList.length === todoItems.length || !todoItems.length) {
      return true;
    }
    return false;
  };

  /**
   * checks the the date that the todo item was created
   * if the time created is pastr 3 mins it ramps up 
   * the priority of the item and turns the component red
   */

  const getItemPriority = (indexToCheck) => {
    const today = new Date();
    const event = today.setMinutes(today.getMinutes() - 3);

    const itemDate = todoItems[indexToCheck].createDate;

    const itemDates = new Date(itemDate).getTime();

    if (itemDates < event) {
      return false;
    }
    return true;
  };

  // adds the property to a class based oon booleans
  const classFeatures=classnames({
    hidden: !areYouDone(),
    "visible p-3 text-lg text-gray-500 font-bold": areYouDone(),
  });

  //function to set the input value
  const setUpInputValue = (inputTofill) => {
    setInputValue(inputTofill);
  };
  //function to set the list value
  const setUpTodoItems = (temporaryList) =>{
    setTodoItems(temporaryList);
  }
 
  return (
    <div className="contatiner py-20 mx-auto max-w-md">
      <div className="bg-white rounded-lg p-10 text-black shadow">
        <div class="bg-local p-6 rounded text-black" style={{backgroundImage: `url(/images/background.jpeg)`, position:"sticky" }}>
          <legend  class="bg-local py-4 rounded text-white text-2xl font-bold">To-do List</legend>
          <div className="my-4 flex">
          <TextInput
            onSubmit={handleAddTodo}
            onChange={setUpInputValue}
            value={inputValue}
          />
          <AddButton onClick={handleAddTodo} />
        </div>
        </div>
        <div>
          <FilterButton 
          setUpTodoItems= {setUpTodoItems}
          listOfItems={todoItems}/>

          <SortButton
          setUpTodoItems= {setUpTodoItems}
          listOfItems={todoItems}/> 
          
          
          <div className={classFeatures}>You are all done!!</div>
        </div>
        <FlipMove className="flip-wrapper my-1 ">
          {todoItems.map((item, index) => (
            <div key={item.createDate}>
              <TodoItem
                id={index}
                value={index}
                label={item.text}
                createDate={item.createDate}
                defaultCompleted={item.done}
                createPriority={() => getItemPriority(index)}
                setUpInputValue={ setUpInputValue}
                setUpTodoItems ={setUpTodoItems}
                listOfItems={todoItems}
                setUpEditstate={setUpEditstate}
                editState={editState}
                indextoEdit={indextoEdit}
              />
            </div>
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default App;
