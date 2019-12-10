import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

//  bindActionCreators берет все экшен криэйторы под теми же именами
//  эти экшен криэйторы связываются с функцией диспатч и результирующие свойства
//  присваиваются нашему объекту
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

//  если в качестве второго аргумента в connect передать не функцию mapDispatchToProps
//  а объект actions то она выполнит действие как описано в коде выше
//  например connect(mapStateToProps, actions)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
