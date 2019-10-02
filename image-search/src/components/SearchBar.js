import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange = event => {
        this.setState({ term: event.target.value });
      };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return ( 
        <div className="ui segment">
            <form onSubmit = {this.onFormSubmit} className="ui form">
                <div className="field">
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;