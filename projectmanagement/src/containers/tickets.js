import React from 'react'
import styled from 'styled-components'
import withDataFetching from '../withDataFetching';
import Ticket from '../components/ticket/ticket'

const ticketsWrapper = styled.div `
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 5%;

@media (max-width: 768px) {
    flex-direction: column;
}
`;

const Alert = styled.div `
text-align: center;
`;

const Tickets = ({ loading, error, data }) => {
     <ticketsWrapper > {
            (loading || error) && < Alert > { loading ? 'Loading...' : error } </Alert>} 
            </ticketsWrapper>
        }