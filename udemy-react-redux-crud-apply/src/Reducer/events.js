import _ from "lodash";
import {
  CREATE_EVENT,
  READ_EVENTS,
  DELETE_EVENT,
  GET_EVENT,
  PUT_EVENT,
} from "../Actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    case (GET_EVENT, PUT_EVENT, CREATE_EVENT):
      const data = action.response.data;
      return { ...events, [data.id]: data };
    default:
      return events;
  }
};
