import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { increment, decrement, incrementByValue } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  const store = useStore();

  console.log({ store });
  console.log({ counter });
  console.log({ isLogged });

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
        className='btn btn-primary'
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
    </div>
  );
}

export default App;
