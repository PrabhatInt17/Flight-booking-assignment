import React, { Component } from 'react';
import './App.css';
import SearchSection from './sections/Search-section';
import { Provider } from './context';
import ResultSection from './sections/Result-section';

export default class App extends Component<AppCompProp> {
  state = { searchValue: null, TabIndex: 0 };
  searchData = (data) => {
    this.setState({ searchValue: data });
  };
  toggleIndex = (index) => {
    this.setState({ TabIndex: index });
  };
  render() {
    return (
      <>
        <header>
          <h2>{this.props.title}</h2>
        </header>
        <Provider value={{ searchData: this.searchData }}>
          <section>
            <div className="leftPane">
              <SearchSection tabIndex={this.state.TabIndex} toggleIndex={this.toggleIndex} />
            </div>
            <div className="rightPane">
              <ResultSection searchData={this.state} />
            </div>
          </section>
        </Provider>
      </>
    );
  }
}

interface AppCompProp {
  title: string;
}
