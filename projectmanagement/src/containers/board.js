import React from 'react';
import styled from 'styled-components'
import Lane from '../components/lane/lane'
//import HOC vanuit datafetching
import withDataFetching from '../withDataFetching';

const BoardWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 5%;

@media (max-width: 768px) {
    flex-direction: column;
}
`;

class Board extends React.Component {

    //fetch data vanuit data bestand, mounten en fetchen try..catch
    //constructor() {
    //this.state = {
        // data: [],
        // loading: true,
        // error: ''
//     }  
// }

// async componentDidMount() {
//     try {
//         const tickets = await fetch('../../assets/data.json');
//         const ticketsJSON = await tickets.json();

//  if (ticketsJSON) {
//      this.setState({
//      data: ticketsJSON,
//     loading: false,
//      });
//      }
//      } catch(error) {
//      this.setState({
//     loading: false,
//      error: error.message,
//      });
//      }
//      }
//     }
// }
    //}


    constructor() {
        super();
        this.state = {
            tickets: [],
        };
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    //check als props zijn veranderd, zo ja, toevoegen naar state
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({tickets: this.props.data});
        }
    }

    //event handlers draggen, droppen, drag over
    //https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

    //data transfer naar  ( datatransfer object ) component met id en event als arg.
    onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);
    };

    //prevent default, drop element in ander element 
    onDragOver = e => {
        e.preventDefault();
    };

    onDrop = (e, laneId) => {
        const id = e.dataTransfer.getData('id');
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
        const tickets = this.state.tickets.filter( ticket => {
            if (ticket.id === parseInt(id)) {
            ticket.lane = laneId;

            // if (ticket.id === id) {
            //     ticket.board = boardId;
            
        }
        return ticket;
            });

            this.setState({
                ...this.state,
                tickets,
            });
            };
            
            
    render() {
        const { lanes, loading, error } = this.props;

        //tickets uitdelen over lanen, destructure

        return (
            <BoardWrapper>
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
            </BoardWrapper>

        );
    }
}

export default withDataFetching(Board);