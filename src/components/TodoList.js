import React, { Component } from 'react';


class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            userInput: ''
        }
    }

    changeInput(input) {
        this.setState({
            userInput: input
        }, console.log(input));

    }

    addToList(input) {
        let listArray = this.state.list;

        listArray.push(input);

        this.setState({
            list: listArray,
            userinput: ''
        })

    }



    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={(e) => this.changeInput(e.target.value)}>
                </input>
                <button onClick={() => this.addToList(this.state.userInput)}>
                    Add
                </button>
                <div>
                    <ul>
                        {this.state.list.map((val) => <li>{val}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo;
