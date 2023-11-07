import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "1번",
      contents: "하나",
      isDone: false,
    },
    {
      id: 2,
      title: "2번",
      contents: "둘",
      isDone: false,
    },
    {
      id: 3,
      title: "3번",
      contents: "셋",
      isDone: true,
    },
    {
      id: 4,
      title: "4번",
      contents: "넷",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const Deletehandler = function (id) {
    console.log(id);
    const ByebyeTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(ByebyeTodo);
  };
  const DoneHandler = (id) => {
    const changeTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(changeTodo);
  };

  return (
    <div>
      <header> 투두리스트</header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newTodo = {
              id: Date.now(),
              title: title,
              contents: contents,
              isDone: false,
            };
            setTodos([...todos, newTodo]);
          }}
        >
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
          <button>제출</button>
        </form>
        <div>
          <div>
            <h2>Todo</h2>
            {todos
              .filter((todo) => {
                return todo.isDone === false;
              })
              .map((todo) => {
                return (
                  <div key={todo.id}>
                    <h3>제목 : {todo.title}</h3>
                    <p>할일 : {todo.contents}</p>
                    <p>{todo.isDone.toString()}</p>
                    <button onClick={() => Deletehandler(todo.id)}>삭제</button>
                    <button onClick={() => DoneHandler(todo.id)}>완료</button>
                  </div>
                );
              })}
          </div>
          <div>
            <h2>DoneTodo</h2>
            {todos
              .filter((todo) => {
                return todo.isDone === true;
              })
              .map((todo) => {
                return (
                  <div key={todo.id}>
                    <h3>제목 : {todo.title}</h3>
                    <p>할일 : {todo.contents}</p>
                    <p>{todo.isDone.toString()}</p>
                    <button onClick={() => Deletehandler(todo.id)}>삭제</button>
                    <button onClick={() => DoneHandler(todo.id)}>완료</button>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
