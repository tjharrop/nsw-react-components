import './App.css';
import React from "react";
import Accordion from './components/accordion';
import NSWbutton from './components/button';
import NSWnotification from './components/notification';
import TagList, {Tag} from './components/tags';
import 'nsw-design-system/src/main.scss'

function App() {
  return (
    <div className="App">
      <div class="nsw-container">
        <h2 class="section-title">Buttons</h2>
        <NSWbutton>Primary button</NSWbutton>
        <NSWbutton as='secondary'>Secondary button</NSWbutton>
        <NSWbutton as='danger'>Danger button</NSWbutton>

        <h2 class="section-title">In-page notifications</h2>
        <NSWnotification as='info' title='Info alert'>
          <p>Content of alert</p>
        </NSWnotification>
        <br />
        <NSWnotification as='error' title='Error alert'>
          <p>Content of alert</p>
        </NSWnotification>
        <br />
        <NSWnotification as='warning' title='Warning alert'>
          <p>Content of alert</p>
        </NSWnotification>
        <br />
        <NSWnotification as='success' title='Success alert'>
          <p>Content of alert</p>
        </NSWnotification>

        <h2 class="section-title">Tags</h2>
        <TagList tags={[
          {
            text: 'foo',
          },
          {
            text: 'bar',
          },
          {
            text: 'baz',
          },
        ]} />
      </div>
    </div>
  );
}

export default App;
