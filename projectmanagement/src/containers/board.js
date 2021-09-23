import React from 'react';
import styled from 'styled-components'
import Lane from '../component/lane/lane'

const boardWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 5%;

@media (max-width: 768px) {
    flex-direction: column;
}
`;

class Board extends Component {
    render() {
        const lanes = [
            { id: 1, title: 'to do' },
            { id: 2, title: 'in progress'},
            { id: 3, title: 'review'},
            { id: 4, title: 'done'},
        ];

        return (
            <boardWrapper>
                {lanes.map(lane => (
                    <Lane key={ lane.id } title={ lane.title }/>
                ))}
            </boardWrapper>

        );
    }
}

export default Board;