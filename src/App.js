import { Fragment, useEffect, useState } from "react";
import "./App.css";
import queryString from "query-string";
import PostList from "./PostList/PostList";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import axios from "axios";
import Pagination from "./Pagination/Pagination";
import Filter from "./Search/Filter";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: " Đây là tiêu đề 1" },
    { id: 2, title: " Đây là tiêu đề 2" },
    { id: 3, title: " Đây là tiêu đề 3" },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    totalRows: 10,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

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

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  function handlePagination(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }
  useEffect(() => {
    async function getApi() {
      try {
        const paramsString = queryString.stringify(filter);
        const response = await axios.get(
          `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        );
        // console.log(response.data);
        const { data, pagination } = response.data;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }

    getApi();
  }, [filter]);
  function handleSubmit(newSearch) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: newSearch.searchItem,
    });
  }
  return (
    <Fragment>
      <h1 style={{ textAlign: "center", color: "green" }}>
        Chào mừng đến với React Hook
      </h1>

      {/* <BoxColor></BoxColor> */}
      {/* <TodoForm onSubmit={handleOnSubmit}></TodoForm>
      <TodoList todos={todoList} todoClick={handleTodoClick}></TodoList> */}
      <Filter onSubmit={handleSubmit}></Filter>
      <PostList posts={postList}></PostList>
      <Pagination
        pagination={pagination}
        onChangePage={handlePagination}
      ></Pagination>
    </Fragment>
  );
}

export default App;
