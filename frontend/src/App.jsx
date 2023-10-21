import React, {useState} from 'react';
import './App.css';
import {Up} from "./components/Up"
import {Down} from "./components/Down";

function App() {
    const [isVisible, setIsVisible] = useState(true);

    let content;

    const handleClick = () => {
      setIsVisible(!isVisible);
    }
    if (isVisible) {
        content = <Up onClick={handleClick}/>;
    } else {
        content = <Down onClick={handleClick}/>;
    }
  return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;
