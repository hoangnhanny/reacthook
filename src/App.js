import { Fragment, useEffect, useState } from "react";
import "./App.css";
import PostList from "./PostList/PostList";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import axios from "axios";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: " Đây là tiêu đề 1" },
    { id: 2, title: " Đây là tiêu đề 2" },
    { id: 3, title: " Đây là tiêu đề 3" },
  ]);
  const [postList, setPostList] = useState([]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => {
      return x.id === todo.id;
    });
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleOnSubmit(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    console.log(newTodo);
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"
        );
        // console.log(response.data);
        const { data } = response.data;
        console.log(data);
        setPostList(data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log("Effect [] chay");
    getApi();
  }, []);
  useEffect(() => {
    console.log("Effect chay ");
  });

  return (
    <Fragment>
      <h1 style={{ textAlign: "center", color: "green" }}>
        Chào mừng đến với React Hook
      </h1>

      {/* <BoxColor></BoxColor> */}
      {/* <TodoForm onSubmit={handleOnSubmit}></TodoForm>
      <TodoList todos={todoList} todoClick={handleTodoClick}></TodoList> */}
      <PostList posts={postList}></PostList>
    </Fragment>
  );
}

export default App;
