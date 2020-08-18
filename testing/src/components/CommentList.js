import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {

    renderCommentList = () => {
        return this.props.comments.map ( (comment) => {
            return <li key={comment}> {comment} </li>
        })
    }

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                {this.renderCommentList()}
            </div>
        );
    }
}

function mapStateToProps ({comments}, ownProps) {
    return {
        comments
    };
}

export default connect(mapStateToProps, {})(CommentList);