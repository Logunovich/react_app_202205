import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Component } from 'react';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John', salary: 8000, increase: false, like: false, id: 1},
        {name: 'Ivan', salary: 4000, increase: false, like: false, id: 2},
        {name: 'Denis', salary: 1000, increase: false, like: false, id: 3}
      ],
      searchText: '',
      filter: 'all'
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const newData = data.filter((item, i) => i !== index);

      return {
        data: newData
      }
    })
  }

  addItem = ({name, salary}) => {
    this.setState(({data}) => {
      const newItem = {
        name,
        salary,
        increase: false,
        like: false,
        id: this.maxId++
      }

      return ({
        data: [...data, newItem]
      })
    })
  }

  onToggle = (id, type) => {
    this.setState(({data}) => {
      const newArr = data.map(item => {
        if (item.id === id) {
          return {...item, [type]: !item[type]}
        } else {
          return item
        }
      })
      return {
        data: newArr
      }
    })
  }

  onSearchItems = (text) => {
    this.setState({
      searchText: text
    })
      // return this.state.data.filter(elem => elem.name.indexOf(text) >= 0)
  }

  showSearchItems = (items) => {
    if (!this.state.searchText.length) {
      return items
    } else {
      return items.filter(elem => elem.name.indexOf(this.state.searchText) >= 0)
    }
  }

  onChangeFilter = (filter) => {
    this.setState({filter})
  }

  visibleItems = (items) => {
    switch (this.state.filter) {
      case 'like':
        return items.filter(elem => elem.like)
      case 'salary': 
        return items.filter(elem => elem.salary > 1000);
      default: 
        return items
    }
  }

  render() {
    const {data} = this.state;
    const countEmp = data.length;
    const countLikedEmp = data.filter(elem => elem.increase).length;
    const searchedItems = this.showSearchItems(data);
    const visible = this.visibleItems(searchedItems);

    return (
      <div className="app">
        <AppInfo
          countEmp={countEmp}
          countLikedEmp={countLikedEmp}/>
  
        <div className="search-panel">
          <SearchPanel
            searchItems={this.onSearchItems}/>
          <AppFilter
            onChangeFilter={this.onChangeFilter}/>
        </div>
        <EmployeesList
          onToggle={this.onToggle}
          data={visible}
          onDelete={this.deleteItem}/>
        <EmployeesAddForm
          addItem={this.addItem}/>
      </div>
    )
  }
}


export default App;