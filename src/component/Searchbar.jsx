import React, { Component } from "react";

export default class Searchbar extends Component {
  state = { search: "" };
  formSubmitted = (event) => {
    event.preventDefault();
    this.props.onSubmitted(this.state.search);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitted}>
          <input
            type="text"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
