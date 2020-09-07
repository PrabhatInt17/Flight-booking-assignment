import React from 'react';
import flightData from '../../data/flight-data.json';
import './Result-section.css';

const getFilteredData = (one, two, props, returnSearch) => {
  one = flightData.filter(
    (obj) =>
      obj.origin.includes(props.searchData.searchValue.origin) &&
      obj.destination.includes(props.searchData.searchValue.destination) &&
      obj.Date === props.searchData.searchValue.depDate
  );
  if (returnSearch) {
    two = flightData.filter(
      (obj) =>
        obj.origin.includes(props.searchData.searchValue.destination) &&
        obj.destination.includes(props.searchData.searchValue.origin) &&
        obj.Date === props.searchData.searchValue.retDate
    );
  }
};

export default class ResultSection extends React.Component<any> {
  filteredOneWay = null;
  filteredTwoWay = null;
  sign = '>';
  returnSearch = false;
  componentDidUpdate() {
    this.filteredOneWay = null;
    this.filteredTwoWay = null;
    this.returnSearch = this.props.searchData.TabIndex === 1;
    if (this.props.searchData.searchValue) {
      getFilteredData(this.filteredOneWay, this.filteredTwoWay, this.props, this.returnSearch);
    }
  }
  render() {
    return (
      <>
        {this.props.searchData.searchValue ? (
          <>
            <div className="top-container">
              <div style={{ float: 'left' }}>
                <h3>
                  {this.props.searchData.searchValue.origin} {this.sign} {this.props.searchData.searchValue.destination}{' '}
                  {this.returnSearch ? (
                    <span>
                      {this.sign} {this.props.searchData.searchValue.origin}
                    </span>
                  ) : (
                    ''
                  )}
                </h3>
              </div>
              <div></div>
            </div>
            <div className="bottom-container"></div>
          </>
        ) : (
          'Please search the flight details'
        )}
      </>
    );
  }
}
