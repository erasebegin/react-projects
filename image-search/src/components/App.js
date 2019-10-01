import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images:[]};

    onSearchSubmit = async (term) => {      //converted to arrow function in order to fix 'this'
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });
        this.setState({images: response.data.results});
        
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;

// access key
// 08f0cd9d28aa27dc37b7622c62c652613fb50f200014296bd96a73fa303eb4bc

// secret key
// b003b05d00bae257c632acbf1cc1a4cc19881da66eddc8e0d40c065a4396834e