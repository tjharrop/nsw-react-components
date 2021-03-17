import './App.css';
import React from "react";
import Accordion from './components/accordion';
import NSWbutton from './components/button';
import NSWnotification from './components/notification';
import TagList, {Tag} from './components/tags';
import Callout from './components/callout';
import InpageNavLinks from './components/in-page-navigation';
import Breadcrumbs from './components/breadcrumbs';
import LinkList from './components/link-list';
import Card, { CardContent, CardHeader, CardCopy, CardTag, CardDate } from './components/card';
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

        <h2 class="section-title">Callout</h2>
        <Callout title="Title of callout">
            <p>Description of callout</p>
        </Callout>

        <h2 class="section-title">Cards</h2>
        <div class='nsw-grid'>
          <div class='nsw-col nsw-col-md-4'>
            <Card
              date='2021-03-17'
              tag='Environment'
              link='#'
              headline='Card Title'
              image='https://picsum.photos/id/292/400/200'
              imageAlt='alt text'>
                <CardCopy>Some text</CardCopy>
            </Card>
          </div>
        </div>
        <div class='nsw-grid'>
          <div class='nsw-col nsw-col-md-4'>
            <Card content
              date='2021-03-17'
              tag='Environment'
              link='#'
              headline='Card Title'
              image='https://picsum.photos/id/292/400/200'
              imageAlt='alt text'>
                <CardCopy>Some text</CardCopy>
            </Card>
          </div>
        </div>
        <div class='nsw-grid'>
          <div class='nsw-col nsw-col-md-4'>
            <Card content
              link='#'
              headline='Card Title'>
                <CardCopy>Some text</CardCopy>
            </Card>
          </div>
        </div>
        <div class='nsw-grid'>
          <div class='nsw-col nsw-col-md-4'>
            <Card
              link='#'
              headline='Card Title'>
                <CardCopy>Some text</CardCopy>
            </Card>
          </div>
        </div>

        <h2 class="section-title">In-page nav</h2>
        <InpageNavLinks sections={[
          {
            link: 'section1',
            title: 'Section 1',
          },
          {
            link: 'section2',
            title: 'Section 2',
          },
        ]} />

        <h2 class="section-title">Breadcrumbs</h2>
        <Breadcrumbs label="Breadcrumb for this page"
          items={[
            {
              link: '#',
              text: 'Home',
            },
            {
              link: '#',
              text: 'Parent',
            },
            {
              text: 'Current page',
            },
          ]}
        />


        <h2 class="section-title">Link list</h2>
        <LinkList
          items={[
            {
              link: '#',
              text: 'Home',
            },
            {
              link: '#',
              text: 'Parent',
            },
          ]}
        />


      </div>
    </div>
  );
}

export default App;
