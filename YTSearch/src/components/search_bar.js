import React, { Component } from 'react';

// Functional component
//const SearchBar = () => {
//  return <input />; // React.createElement
//}

// Class based component
// If the component needs to keep track of state, use class based components.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
