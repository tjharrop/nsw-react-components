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
import * as Form from  './components/forms';
import 'nsw-design-system/src/main.scss'
import nextId from "react-id-generator";

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


        <h2 class="section-title">Text form groups</h2>
        <Form.FormGroupText
          label="Your name"
          helper="as it is written on your drivers' licence"
          errorText="Please enter your name"
          htmlId={nextId()}
        />
        <Form.FormGroupText
          label="Enter some long text"
          errorText="the error"
          as="textarea"
          htmlId={nextId()}
        />

        <h2 class="section-title">Select form group</h2>
        <Form.FormGroupSelect
          label="Select a thing"
          helper="But only one thing"
          errorText="Please select a thing"
          htmlId={nextId()}
          options={[
            {
              value: '',
              text: 'Please select',
            },
            {
              value: '1',
              text: 'Option 1',
            },
            {
              value: '2',
              text: 'Option 2',
              selected: 'selected'
            },
            {
              value: '3',
              text: 'Option 3',
            },
          ]}        />

        <h2 class="section-title">Error form group</h2>
        <Form.FormGroupText
          label="Your name"
          helper="as it is written on your drivers' licence"
          errorText="Please enter your name"
          htmlId={nextId()}
          status="invalid"
        />
        <Form.FormGroupText
          label="Enter some long text"
          errorText="the error"
          as="textarea"
          htmlId={nextId()}
          status="invalid"
        />
        <Form.FormGroupSelect
          label="Select a thing"
          helper="But only one thing"
          errorText="Please select a thing"
          htmlId={nextId()}
          status="invalid"
          options={[
            {
              value: '',
              text: 'Please select',
            },
            {
              value: '1',
              text: 'Option 1',
            },
            {
              value: '2',
              text: 'Option 2',
              selected: 'selected'
            },
            {
              value: '3',
              text: 'Option 3',
            },
          ]}        />


      </div>
    </div>
  );
}

export default App;
