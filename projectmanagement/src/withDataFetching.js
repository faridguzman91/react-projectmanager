import React from 'react';

export default function withDataFetching(WrappedComponent) {
    class withDataFetching extends React.Component {
        constructor() {
            super();
            this.state = {
                data: [],
                loading: true,
                error: '',
            }
        }
    }
}