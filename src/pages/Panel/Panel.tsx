import React from 'react';
import './Panel.css';

import { Counter } from './components/counter';

const Panel: React.FC = () => {
  return (
    <div className="container">
      <h1>Dev Tools Panel</h1>
      <Counter />
    </div>
  );
};

export default Panel;
