import React from 'react';
import { Consumer } from '../../context';

const _onFocus = (e) => {
  e.currentTarget.type = 'date';
};
const _onBlur = (e) => {
  e.currentTarget.type = 'text';
  e.currentTarget.placeholder = e.target.dataset.placeholder;
};

class SearchBlock extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 'oneWay',
      origin: '',
      destination: '',
      depDate: '',
      retDate: '',
    };
  }

  componentDidMount() {
    this.setState({ searchType: this.props.value });
    var returnDateEle = document.getElementById('retDate');
    if (this.props.value === 'oneWay') {
      returnDateEle.parentNode.removeChild(returnDateEle);
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSearch = (context) => (event) => {
    event.preventDefault();
    if (
      !this.state.origin ||
      !this.state.destination ||
      !this.state.depDate ||
      (!this.state.retDate && this.state.searchType === 'return')
    ) {
      alert('Please select all fields');
      return;
    }
    context.searchData(this.state);
  };
  render() {
    return (
      <Consumer>
        {(context) => (
          <div style={{ backgroundColor: 'white', padding: '10px' }}>
            <form>
              <input
                type="text"
                id="origin"
                placeholder="Enter Origin City"
                value={this.state.origin}
                onChange={this.handleChange}
              />
              <input
                id="destination"
                type="text"
                placeholder="Enter Destination City"
                value={this.state.destination}
                onChange={this.handleChange}
              />
              <input
                id="depDate"
                type="text"
                placeholder="Departure Date"
                onFocus={_onFocus}
                onBlur={_onBlur}
                data-placeholder="Departure Date"
                value={this.state.depDate}
                onChange={this.handleChange}
              />
              <input
                id="retDate"
                type="text"
                placeholder="Return Date"
                onFocus={_onFocus}
                onBlur={_onBlur}
                data-placeholder="Return Date"
                value={this.state.retDate}
                onChange={this.handleChange}
              />
              <button onClick={this.handleSearch(context)}>Search</button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBlock;
