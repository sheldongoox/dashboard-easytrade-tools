import React, { useReducer, useEffect, createContext } from 'react';
import { Tabs } from 'antd';
import InstanceDetails from './InstanceDetails';
import ProcessVariables from './ProcessVariables';
import Log from './Log';
import Diagram from './Diagram';
import { reducer, initState } from './reducer';
import './index.less';

const tabs = {
  'Instance Details': <InstanceDetails />,
  'Process Variables': <ProcessVariables />,
  'Log': <Log />,
  'Diagram': <Diagram />
}
export const Context: any = createContext({});

const Workflow: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    dispatch({
      type: 'SET_INFO',
      info: {
        containerId: 'test_1.0.0-SNAPSHOT',
        processInstanceId: 'test.easytrade'
      }
    });
  }, []);
  console.log('info', state)
  return <Context.Provider value={{ state, dispatch }}>
    {state.info ?
      <Tabs>
        {Object.keys(tabs).map(item => <Tabs.TabPane key={item} tab={item}>{tabs[item]}</Tabs.TabPane>)}
      </Tabs>
      :
      <span></span>
    }
  </Context.Provider>
}
export default Workflow;