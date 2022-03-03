import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is a simple application for fetching photos using unsplash API. To
      start please enter any seach string in the input field and press Search
      button.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
