import React, {useReducer} from "react";

const initialState = {count: 0};

//const initialState = {page : 0}
function logic(state, action) {
    switch (action.type) {
        case "START":

    }
}

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
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
        default:
            throw new Error("Unsupported action type:", action.type);
    }
}

function Counter({step = 2, min = 0, max = 11}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>
                단계: {step}, 최대: {max},최소: {min}
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
        </>
    );
}

export default Counter;
