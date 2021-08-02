import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { App2 } from './paginacion/App2';
import { StepContext } from './paginacion/Hooks/StepContext';


ReactDOM.render(
  <>
    <StepContext>
      <App2 />
    </StepContext>
  </>,
  document.getElementById('root')
);

