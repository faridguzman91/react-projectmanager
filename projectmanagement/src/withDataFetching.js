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

        //HOC, waar data fetching gebeurt, dataSource prop als fetch source

        //  async componentDidMount() {
        //      try {
        //      const data = await fetch(this.props.dataSource);
        //      const dataJSON = await data.json();
            
        //      if (dataJSON) {
        //      this.setState({
        //      data: dataJSON,
        //      loading: false,
        //      });
        //      }
        //      } catch(error) {
        //      this.setState({
        //      loading: false,
        //      error: error.message,
        //      });
        //      }
        //      }



        async componentDidMount() {
            try {
                const data = await fetch(this.props.dataSource);
                const dataJSON = await data.json();

                if (dataJSON) {
                    this.setState({
                        data: dataJSON,
                        loading: false,
                    });
                }
            } catch (error) {
                this.setState({
                    loading: false,
                    error: error.message,
                });
            }
        }

        render() {
            const { data, loading, error } = this.state;

            return (
                <WrappedComponent 
                   data={data}
                   loading={loading}
                   error={error}
                   {...this.props}
                   />
            );
        }
    }

    // eslint-disable-next-line no-template-curly-in-string

    //react devtool = de HOC een naam geven. withDataFetching
    // eslint-disable-next-line no-template-curly-in-string
    withDataFetching.displayName = 'withDataFetching(${WrappedComponent.name})';

    return withDataFetching;
}