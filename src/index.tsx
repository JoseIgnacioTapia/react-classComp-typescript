import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  render() {
    return <div>Hi there!</div>;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
