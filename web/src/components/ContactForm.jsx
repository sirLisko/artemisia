import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby-link';

import { StyledButton } from 'src/theme';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    const { select } = this.props;
    return (
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        {...this.props}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Name:
            <br />
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Email:
            <br />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Mobile:
            <br />
            <input type="tel" name="mobile" onChange={this.handleChange} />
          </label>
        </p>
        {select && (
          <p>
            <label>
              {select.label}
              <br />
              <select name={select.name} onChange={this.handleChange}>
                <option value="">{select.placeholder}</option>
                {select.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {select.description && (
                <div>
                  <em>{select.description}</em>
                </div>
              )}
            </label>
          </p>
        )}
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <StyledButton type="submit">Send</StyledButton>
        </p>
      </form>
    );
  }
}

Contact.propTypes = {
  select: PropTypes.shape({
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
  }),
};
