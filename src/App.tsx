import React from 'react';
import './App.css';
import {TasksType, ToDoList} from "./ToDoList";


function App() {


      const tasks_1:Array<TasksType> = [
        {id: 1, isDone: true, title:"Books"},
        {id: 2, isDone: true, title:"Songs"},
        {id: 3, isDone: false, title:"Films"},
        {id: 4, isDone: true, title:"Stars"},

    ]
      const tasks_2:Array<TasksType> = [
        {id: 5, isDone: true, title:"Reading"},
        {id: 6, isDone: false, title:"Traveling"},
        {id: 7, isDone: true, title:"Cooking"},
        {id: 8, isDone: false, title:"Watching TV"},

    ]


    return (
        <div className="App">
        <ToDoList title={"Favourite things"}
                  tasks={tasks_1} />
        <ToDoList title={"Hobby"}
                  tasks={tasks_2} />
        </div>
    );
}

export default App;
