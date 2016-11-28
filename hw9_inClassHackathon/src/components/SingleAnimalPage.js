import React, { Component, PropTypes } from 'react';

import 'babel-polyfill';

import fetch from 'isomorphic-fetch';

class SingleAnimalPage extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      avator: '',
      name: '',
      age: 0
    };
  }

  componentDidMount() {
  // fetch `/api/users/${id}` to get user and then set state...
    fetch(`/api/animals/${this.props.id}`)
    .then(res => res.json())
    .then(json => this.setState({ avator: json.avatar, name: json.name, age: json.age }));
  }

  render() {
    return (
      <div>
        <p>User: {this.props.id}</p>
        <p>Avator: {this.state.avator}</p>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

export default SingleAnimalPage;
