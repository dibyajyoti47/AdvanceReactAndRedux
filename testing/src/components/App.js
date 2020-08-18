import React, {Component} from "react";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import  * as actions from "actions";

class App extends Component {

    renderHeader () {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post A Comment</Link>
                </li>
                <li>
                    <Link to="/post">{this.renderButton()}</Link>
                </li>
            </ul>
        )
    }

    renderButton () {
        if (this.props.auth){
            return (
                <button onClick={() => {this.props.changeAuth(false)}}>
                    Sign out
                </button>
            );
        } else {
            return (
                <button onClick={() => {this.props.changeAuth(true)}}>
                    Sign In
                </button>
            );
        }
            
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/" exact component={CommentList} />
                <Route path="/post" component={CommentBox} />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps, actions )(App);
