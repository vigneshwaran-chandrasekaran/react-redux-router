import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch, useStore } from 'react-redux';
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValueAsnc,
  decrementByValue,
  loadAPIData
} from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const isLoading = useSelector(state => state.isLoading);
  const data = useSelector(state => state.data);

  const dispatch = useDispatch();

  const store = useStore();

  let arr = data.arr;
  console.log(data);
  console.log({ isLoading });
  console.log({ counter });
  console.log({ isLogged });


  function Lists({ arrs }) {
    console.log({ arrs });
    const todoItems = arrs.map((todo) => <li key={todo.id}>{todo.title}</li>);

    return (
      <ul>{todoItems}</ul>
    );
  }



  function onClickHandle() {
    console.log('onClickHandle');
    dispatch(increment());
  }

  return (
    <div className="App">
      <h1 className='text-center'>React and redux {counter}</h1>

      <div>
        {/* {store.getState()} */}
      </div>
      <button
        className='btn btn-primary'
        onClick={onClickHandle}
      >
        increment {counter}
      </button>

      <button
        className='btn btn-danger'
        onClick={() => dispatch(decrement())}
      >
        decrement {counter}
      </button>

      <button
        className='btn btn-primary'
        onClick={() => dispatch(incrementByValue(5))}
      >
        increment by value {counter}
      </button>

      <button
        className='btn btn-info'
        onClick={() => dispatch(decrementByValueAsnc(5))}
      >
        decrement by value async {counter}
      </button>
      <button
        className='btn btn-warning'
        onClick={() => dispatch(decrementByValue(5))}
      >
        decrement by value {counter}
      </button>
      {isLoading && <p>Its loading</p>}

      <div>
        <button
          className='btn btn-info'
          onClick={() => dispatch(loadAPIData())}
        >
          Load api data
      </button>
      </div>
      <div>
        <p>one</p>
        <Lists arrs={arr} />
        <p>two</p>
      </div>
    </div>
  );
}

export default App;
