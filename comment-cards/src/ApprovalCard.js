import React from 'react';
import { directive } from '@babel/types';

const ApprovalCard = (props) => {

    return(
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Deny</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;