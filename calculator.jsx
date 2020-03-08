import React from 'react';
import ReactDOM from 'react-dom';
import './Calculator.css';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            result: 0
        }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.handleMult = this.handleMult.bind(this);
        this.handleDiv = this.handleDiv.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    setNum1(e) {
        this.setState({ num1: Number(event.target.value) })
    }
    setNum2(e) {
        this.setState({ num2: Number(event.target.value) })
    }

    handleAdd(e) {
        this.setState({
            result: Number(this.state.num1) + Number(this.state.num2)
        })
        e.preventDefault();
    }

    handleSub(e) {
        this.setState({
            result: Number(this.state.num1) - Number(this.state.num2)
        })
        e.preventDefault();
    }
    handleMult(e) {
        this.setState({
            result: Number(this.state.num1) * Number(this.state.num2)
        })
    }
    handleDiv(e) {
        this.setState({
            result: Number(this.state.num1) / Number(this.state.num2)
        })
        e.preventDefault();
    }
    handleClear(e) {
        this.setState({
            result: 0,
            num1: '',
            num2: ''
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="box">
                <h1 className="header">React Calculator</h1>
                <h2>{this.state.result}</h2>
                <div className="inputBox">
                    <input className="input"
                        value={this.state.num1}
                        onChange={this.setNum1}
                    />
                    <input className="input"
                        value={this.state.num2}
                        onChange={this.setNum2}
                    />
                    <button onClick={this.handleClear} className="clear">Clear me!</button>
                </div>
                <br />
                <div className="operators">
                    <button onClick={this.handleAdd} className="symbols">+</button>
                    <button onClick={this.handleSub} className="symbols">-</button>
                    <button onClick={this.handleMult} className="symbols">*</button>
                    <button onClick={this.handleDiv} className="symbols">/</button>

                </div>

            </div>
        )
    }
}
export default Calculator;