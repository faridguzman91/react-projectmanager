import React from 'react';
import styled from 'styled-components'
import ticket from '../ticket/ticket'

const laneWrapper = styled.div `
list-styled: none;
text-align: left;
padding: 0;
background: lightGray;
border-radius: 20px;
min-height: 50vh;
width: 20vw;

@media (max-width: 768px) {
    margin-bottom: 5%;
}
`;

const Title = styled.h2 `
width: 100%;
padding-bottom: 10px;
text-align: center;
border-bottom: 1px solid darkGray;
`;

const ticketWrapper = styled.div `
padding: 5%;
`;

const Alert = styled.div`
text-align: center;
`;

//interactive drag n drop
//ondrag, Ondrop op laan
//foutmelding laden 
//geef aan tickets
//event arraylist

const Lane = ({
    laneId,
    tickets,
    loading,
    error,
    onDragStart,
    onDragOver,
    onDrop,
    title,
}) => (
    <laneWrapper onDragOver={e => onDragOver(e)} onDrop={e => onDrop(e, laneId)}>
        <Title>{title}</Title>
        {(loading || error) && <Alert>{loading ? 'Loading...' : error }</Alert>}
        <ticketWrapper>
            {tickets.map(ticket = (
                <ticket key={ticket.id} onDragStart={onDragStart} ticket={ticket} />
            ))}
            </ticketWrapper>        
    </laneWrapper>
);

export default Lane;