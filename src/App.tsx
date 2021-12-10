import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import './App.scss';

function App() {
  return (
    <div className="Tdl">
      <video autoPlay muted loop className="Tdl-video">
        <source src="/videos/sea-1.mp4" type="video/mp4" />
      </video>
      <div className="Tdl-content">
        <Todolist />
      </div>
    </div>
  );
}

export default App;
