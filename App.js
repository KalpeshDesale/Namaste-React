import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1', {}, 'Heading');
const subHeading = React.createElement('h2', {}, 'Sub Heading');
const child1 = React.createElement('div', { id: 'child1' }, [
  heading,
  subHeading,
]);
const child2 = React.createElement('div', { id: 'child2' }, [
  heading,
  subHeading,
]);
const parent = React.createElement('div', { id: 'parent' }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
