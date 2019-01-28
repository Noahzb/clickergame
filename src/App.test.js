import React from 'react';
import ReactDOM from 'react-dom';
import Imagediv from './imagediv';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Imagediv />, div);
  ReactDOM.unmountComponentAtNode(div);
});
