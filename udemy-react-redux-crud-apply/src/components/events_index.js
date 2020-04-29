import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../Actions";
import _ from "lodash";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContendAdd from "material-ui/svg-icons/content/add";
class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents = () => {
    return _.map(this.props.events, (event) => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableHeaderColumn>{event.body}</TableHeaderColumn>
      </TableRow>
    ));
  };

  render() {
    const style={
      position:"fixed",
      right: 12,
      bottom: 32
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style}
          containerElement={<Link to="events/new">New Event</Link>}
        >
          <ContendAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>title</TableHeaderColumn>
              <TableHeaderColumn>body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchProps = { readEvents };

export default connect(mapStateToProps, mapDispatchProps)(EventsIndex);
