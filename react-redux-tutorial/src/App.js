import React from 'react';
import CounterContainer from './containers/CounterContainer.js';
import TodosContainer from './containers/TodosContainer.js';


const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;