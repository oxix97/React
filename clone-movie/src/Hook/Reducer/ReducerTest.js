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
            console.log(action.number)
            return {
                mainFrameClick: true,
            }
        case "CONSOLE":
            console.log(initialState)
            return initialState
        default:
            throw new Error("Unsupported action type:", action.type);
    }
}

function Counter({step = 2, min = 0, max = 11, str = 'dispatch'}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const number = 10
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
            <button onClick={() => dispatch({type: "mainFrameClick", number})}>Click</button>
            <button onClick={() => dispatch({type: "CONSOLE"})}>console</button>
            {
                state.count === 3 ? <h3>{state.count}</h3> : <h3>not 3</h3>
            }
        </>
    );
}

export default Counter;
