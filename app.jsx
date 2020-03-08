import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator';

class App extends React.Component {
    render() {
        return (
            <div>
                <Calculator />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));