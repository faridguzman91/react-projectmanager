import React from 'react';
import styled from 'styled-components'
import Lane from '../component/lane/lane'
import withDataFetching from '../withDataFetching';

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
    constructor() {
        super();
        this.state = {
            tickets: [],
        };
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({tickets: this.props.data});
        }
    }

    onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);
    };
    onDragOver = e => {
        e.preventDefault();
    };
    onDrop = (e, laneId) => {
        const id = e.dataTransfer.getData('id');
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
        const tickets = this.state.tickets.filter( ticket => {
            if (ticket.id === parseInt(id)) {
            ticket.lane = laneId;
        }
        return ticket;
            });

            this.setState({
                ...this.state,
                tickets,
            });
            };
            
            
    render() {
        const lanes = { lanes, loading, error } = this.props;

        return (
            <boardWrapper>
                {lanes.map(lane => (
                    <Lane key={ lane.id } 
                          title={ lane.title }
                          loading={loading}
                          error={error}
                          onDragStar={this.onDragStart}
                          onDragOver={this.onDragOver}
                          onDrop={this.onDrop}
                          tickets={this.state.tickets.filter(
                              ticket => ticket.lane === lane.id,
                          )}
                          />
                ))}
            </boardWrapper>

        );
    }
}

export default Board;