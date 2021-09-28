import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from '../containers/board';
import Tickets from '../containers/tickets';
import Header from '../components/header/header'

const GlobalStyle = createGlobalStyle `
 body {
     margin: 0;
     padding: 0;
     font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
 }
`;

const appWrapper = styled.div`
text-align: center;
`;

class App extends Component {
    render() {
        const lanes = [
            { id: 1, title: 'to do'},
            { id: 2, title: 'in progress'},
            { id: 3, title: 'review'},
            { id: 4, title: 'done'},

        ];

        return (
            <>
            <GlobalStyle />
            <appWrapper>
                <Header />
                {/* data source aanhaken aan wrappers */}
                <Board lanes={lanes} dataSource={'../../assets/data.json'} />
                <Tickets dataSource={'../../assets/data.json'} />
            </appWrapper>
            </>

        );
    }
}

export default App;