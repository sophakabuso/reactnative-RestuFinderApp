import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../state/actions';

const Counter = ({ count, increment, decrement }) => {
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
