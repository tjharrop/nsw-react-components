import './App.css';
import 'nsw-design-system/dist/css/main.css'
import {Accordion, NSWTemplate} from "nsw-digital-lib";
import React from "react";

function App() {
  return (
    <div className="App">
        <NSWTemplate title={'Header'} toggleMenu={true} userName={'Ben'}>
        </NSWTemplate>

    </div>
  );
}

export default App;
