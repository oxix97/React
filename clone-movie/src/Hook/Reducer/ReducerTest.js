import React, {useReducer} from "react";

const initialState = {
    mainFrameClick: false,
    playCount: 0,
    voteCount: 0,
    voteResult: false,
    expedition: false,
    winner: '',
    // page: START,
    kill: '',
    count: 0,
    test: false
}
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//
//         case "playCount" :
//         case "voteCount":
//         case "voteResult":
//         case "expedition":
//         case "winner":
//         case "page":
//         case "kill":
//         default :
//             return state
//     }
// }
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            console.log(state.count)
            console.log(action.max)
            console.log(action.min)
            return state.count < action.max
                ? {count: state.count + action.step > action.max ? action.max : state.count + action.step}
                : state;
        case "DECREMENT":
            return state.count > action.min
                ? {count: state.count - action.step < action.min ? action.min : state.count - action.step}
                : state;
        case "RESET":
            return initialState;
        case "RANDOM":
            return {
                count:
                    Math.floor(Math.random() * (action.max - action.min)) + action.min
            };
        case "mainFrameClick":
            console.log(action.str)
            return {
                mainFrameClick: true,
            }
        default:
            throw new Error("Unsupported action type:", action.type);
    }
}

function Counter({step = 2, min = 0, max = 11,str='dispatch'}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>
                단계: {step}, 최대: {max}, 최소: {min},
            </p>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({type: "INCREMENT", step, max})}>
                증가
            </button>
            <button onClick={() => dispatch({type: "DECREMENT", step, min})}>
                감소
            </button>
            <button onClick={() => dispatch({type: "RANDOM", min, max})}>
                무작위
            </button>
            <button onClick={() => dispatch({type: "RESET"})}>초기화</button>
            <button onClick={() => dispatch({type: "mainFrameClick",str})}>Click</button>
        </>
    );
}

export default Counter;
