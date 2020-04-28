import React, { Component } from "react";
import { connect } from "react-redux";
// import { postEvent } from "../Actions";
import { Link } from "react-router-dom";

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <p>foo</p>
        </div>
        <Link to="/">Home</Link>
      </React.Fragment>
    );
  }
}
// const mapDispatchProps = { postEvents };

export default connect(null, null)(EventsNew);
