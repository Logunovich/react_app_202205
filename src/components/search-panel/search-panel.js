import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ''
    }
  }

  onChangeText = (e) => {
    this.setState({
      textValue: e.target.value
    })
    this.props.searchItems(e.target.value)
  }

  render() {
    return (
      <input 
        type="text"
        className="form-control search-input" 
        placeholder="Найти сотрудника"
        value={this.state.textValue}
        onChange={this.onChangeText}/>
    )
  }
}

export default SearchPanel;