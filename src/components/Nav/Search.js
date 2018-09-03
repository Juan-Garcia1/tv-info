import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRedirection = this.handleRedirection.bind(this)
  }
  handleChange(e) {
    const searchQuery = e.target.value
    this.setState({ searchQuery })
    if (!searchQuery) {
      return ""
    }
    fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
      .then(resp => resp.json())
      .then(results => {
        this.setState({ results })
      })
  }
  handleRedirection(id) {
    this.setState({
      searchQuery: "",
      results: []
    })
    this.props.history.push(`/show-info/${id}`)
  }
  render() {
    const { searchQuery, results } = this.state
    return (
      <div id="search-container">
        <i className="fa fa-search" id="search-icon" />
        <input
          type="text"
          placeholder="Find Shows"
          onChange={this.handleChange}
          value={searchQuery}
        />

        {!searchQuery ? (
          ""
        ) : (
          <div id="search-results">
            {results.length === 0 &&
              searchQuery.trim() !== "" && <small>No results found</small>}
            {results.map(result => (
              <p
                key={result.show.id}
                onClick={() => this.handleRedirection(result.show.id)}
                style={{ padding: "5px 10px" }}
              >
                <small>{result.show.name}</small>
              </p>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(Search)
