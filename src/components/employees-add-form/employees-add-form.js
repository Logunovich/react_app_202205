import {Component} from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      classForm: 'app-add-form'
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onAddItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      salary: this.state.salary
    }

    if (this.state.name && this.state.salary) {
      this.props.addItem(newItem);
      this.setState({
        name: '',
        salary: ''
      })  
    } else {
      this.setState(({classForm}) => ({
        classForm: `${classForm += ' wrong-data'}`
      }))

      setTimeout(() => {
        this.setState({
          classForm: 'app-add-form'
        })
      }, 500)
    }
  }

  render() {
    const {name, salary, classForm} = this.state;
    

    return (
      <div className={classForm}>
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onAddItem}>
          <input type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?" 
            name="name"
            value={name}
            onChange={this.onValueChange}/>
           <input type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?" 
            name="salary"
            value={salary}
            onChange={this.onValueChange}/>

          <button type="submit"
            className="btn btn-outline-light">Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;