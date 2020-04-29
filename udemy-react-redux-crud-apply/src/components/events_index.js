import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../Actions";
import _ from "lodash";
import { Link } from "react-router-dom";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents = () => {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>

        <Link to="events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchProps = { readEvents };

export default connect(mapStateToProps, mapDispatchProps)(EventsIndex);
