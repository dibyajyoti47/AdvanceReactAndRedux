import React, { Component } from "react";
import { connect } from "react-redux";

//scoffolding
// export default (ChildComponent, actions) => { //my approach
export default (ChildComponent) => { //stephen's approach approach    
  class ComposedComponent extends Component {
    // our component just got rendered
    componentDidMount() {
      this.shuildNavigateAway();
    }

    // our component just updated
    componentDidUpdate() {
      this.shuildNavigateAway();
    }

    shuildNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
