import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom'

import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

ReactDOM.render(<BrowserRouter>
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>
</BrowserRouter>,document.getElementById('root'))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       {/* <React.StrictMode> */}
//         <App />
//       {/* </React.StrictMode> */}
//     </Provider>
//   </BrowserRouter>
// );

