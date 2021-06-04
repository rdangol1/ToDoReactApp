import React, { useState } from "react";
import classnames from "classnames";

const TodoItem = ({ onToggle, label, defaultCompleted }) => {
  const [isChecked, setIsChecked] = useState(defaultCompleted);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  const classname = classnames({
    "text-gray-600": !isChecked,
    "line-through": isChecked,
    "text-gray-300": isChecked,
  });

  return (
    <div className="border-b-2 p-2 ">
      <input
        onClick={handleClick}
        className="mr-5"
        type="checkbox"
        id="first"
        checked={isChecked}
      />
      <label className={classname} id="first">
        {label}
      </label>

    </div>
  );
};

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      text: "Foo bar",
      defaultCompleted: true,
    },
    {
      text: "Finish todo list",
      defaultCompleted: false,
    },
  ]);

  const checkboxToggled = () => {
    console.log("Checkbox was toggled");
  };

  const [isClicked, setIsClicked] = useState(false);
  const visibility = classnames({
    "visible": !isClicked,
    "hidden":isClicked
  })

  const handleAdd=() =>{
    setIsClicked(!isClicked);
    
  }

  return (
    <div className="contatiner py-20 mx-auto max-w-md">
      <div className="bg-white rounded-lg p-10 text-black shadow">
        <legend> Todo List</legend>
        <button  onClick ={handleAdd} type="submit" className="p-2">Add New Item</button>
        <input type = "text" className={visibility} />
        {todoItems.map((item) => (
          <TodoItem
            label={item.text}
            defaultCompleted={item.defaultCompleted}
            onToggle={checkboxToggled}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
