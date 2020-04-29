import React, { Component } from "react";
import { connect } from "react-redux";
import { postEvent } from "../Actions";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
 renderField(field) {
     const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit , pristine, submitting ,invalid } = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
          <div>
            <input type="submit" value="submit" disabled={pristine || submitting || invalid} />
            <Link to="/">Home</Link>
          </div>
        </div>
      </form>
    );
  }
}
const mapDispatchProps = { postEvent };
const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Enter Title";
  if (!values.body) errors.body = "Enter body";
  return errors;

};
export default connect(
  null,
  mapDispatchProps
)(reduxForm({ validate: validate, form: "eventNewform" })(EventsNew));
