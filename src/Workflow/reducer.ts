interface StateInterface {
  info?: {
    containerId: string;
    processInstanceId: string;
  }
}
interface Action {
  type: string;
  [key: string]: any;
}

export function reducer(state: StateInterface, action: Action) {
  switch (action.type) {
    case 'SET_INFO':
      console.log('info 1 =', state, action)
      return { info: action.info };
    default:
      return state;
  }
}
export const initState = {
  info: undefined
};
// export default { reducer, initState }