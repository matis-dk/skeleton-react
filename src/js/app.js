import React from 'react';
import ComponentTodo from './components/component_todo'
import ComponentControl from './components/component_control'

import mapDispatchToProps from './actions/actions_dispatcher'

import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1> Matis - React & Redux starterpack </h1>
                <ComponentTodo setName={this.props.actions.profile.setName} />
                <ComponentControl />
            </div>
        );
    }
}

function mapStateToProps(store) {
    return { store }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
