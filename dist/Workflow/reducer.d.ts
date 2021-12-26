interface StateInterface {
    info?: {
        containerId: string;
        processInstanceId: string;
    };
}
interface Action {
    type: string;
    [key: string]: any;
}
export declare function reducer(state: StateInterface, action: Action): StateInterface | {
    info: any;
};
export declare const initState: {
    info: any;
};
export {};
