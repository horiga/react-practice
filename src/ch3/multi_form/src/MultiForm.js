import React, {Component} from 'react'

export default class MultiForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Hiroyuki Horigami',
      age: 39,
      hobby: 'Driving'
    }
  }

  doChange(e) {
    console.log('>>> doChange');
    console.log(e.target);
    const userValue = e.target.value
    const key = e.target.name
    console.log('userValue:' + userValue + ', key:' + key);
    this.setState({[key]: userValue})
    console.log('<<< doChange');
  }

  doSubmit(e) {
    console.log('>>> doSubmit');
    e.preventDefault()
    window.alert(JSON.stringify(this.state))
    console.log('<<< doSubmit');
  }

  render() {
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return (<form onSubmit={doSubmit}>
      <div><label>
        name: <br/>
        <input name='name' type='text' value={this.state.name} onChange={doChange} />
      </label></div>
      <div><label>
        age: <br/>
        <input name='age' type='number' value={this.state.age} onChange={doChange} />
      </label></div>
      <div><label>
        hobby: <br/>
        <input name='hobby' type='text' value={this.state.hobby} onChange={doChange} />
      </label></div>
      <input type='submit' value='submit' />
    </form>)
  }
}
