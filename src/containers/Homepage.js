import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledHomepage = styled.div`
    background-color: #eee;
`;

class Homepage extends Component {
    render() {
        return <StyledHomepage>{this.props.greetings}</StyledHomepage>;
    }
}

function mapStateToProps({ greetings }) {
    return { greetings };
}

export default connect(mapStateToProps)(Homepage);
