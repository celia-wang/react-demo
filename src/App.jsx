// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';

function fn() {
  getLoginQrCKey()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world!</h1>
        <Button type="primary" onClick={fn}>
          按钮
        </Button>
      </header>
    </div>
  );
}

export default App;
