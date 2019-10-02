import React from 'react';

class ImageCard extends React.Component {
    constructor() {
        super(props);

        this.imageRef=React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard