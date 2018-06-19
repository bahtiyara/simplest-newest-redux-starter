import React, {Component} from 'react';
import {connect} from 'react-redux';

class Page extends Component {
    render() {
        return <div>{this.props.greetings}</div>;
    }
}

function mapStateToProps({greetings}) {
    return {greetings};
}

export default connect(mapStateToProps)(Page);