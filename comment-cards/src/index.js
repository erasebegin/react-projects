//Import the React and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

//Create a react component
const App = () => {


    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Roger" 
                    comment="Roger roger" 
                    postTime="Yesterday at 4:30"
                    authorImage={Faker.image.avatar()}
                />
            </ApprovalCard>  

            <ApprovalCard>
                <CommentDetail 
                    author="Dick" 
                    comment="pull out, pull out!" 
                    postTime="Yesterday at 4:40"
                    authorImage={Faker.image.avatar()}
                />
            </ApprovalCard> 

            <ApprovalCard>
                <CommentDetail 
                    author="Fanny" 
                    comment="The rain in Spain falls gently on the plane" 
                    postTime="Yesterday at 4:50"
                    authorImage={Faker.image.avatar()}
                />
            </ApprovalCard>        
        </div>
    )
}


//Show the react component on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
