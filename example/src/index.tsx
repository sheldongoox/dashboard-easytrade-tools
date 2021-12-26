import React, { useCallback } from 'react';
import { render } from 'react-dom';
import Workflow from '../../src/Workflow/index';

const App: React.FC = () => {


  return (
    <div>
      <Workflow />
    </div>
  );

};

render(<App />, document.querySelector('#app'));
