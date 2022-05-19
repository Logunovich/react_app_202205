import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all'
    }
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.getAttribute('data-filter')
    });

    this.props.onChangeFilter(e.currentTarget.getAttribute('data-filter'))
  }

  render() {
    const {filter} = this.state;
    return (
      <div className="btn-group">
        <button 
          onClick={this.changeFilter}
          className={`btn ${filter === 'all' ? 'btn-light' : 'btn-outline-light'}`}
          type="button"
          data-filter="all"
          >
            Все сотрудники
        </button>
        <button 
          onClick={this.changeFilter}
          className={`btn ${filter === 'like' ? 'btn-light' : 'btn-outline-light'}`}
          type="button"
          data-filter="like"
          >
            На повышение
        </button>
        <button 
          onClick={this.changeFilter}
          className={`btn ${filter === 'salary' ? 'btn-light' : 'btn-outline-light'}`}
          type="button"
          data-filter="salary"
          >
            З/П больше 1000$
        </button>
      </div>
    )
  }
}

export default AppFilter;