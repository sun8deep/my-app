import React, { Component } from 'react';


class Person extends Component {

    render() {
        const {name, age} = this.props;
        return (
            <div>
                <p>Hi i am {name}, {age} yeras old.</p>
            </div>
        );
    }
}

export default Person;