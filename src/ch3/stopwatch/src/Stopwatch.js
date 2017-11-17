import React, {Component} from 'react'
import './Stopwatch.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    // initial settings
    this.state = {
      isLive: false,
      curTime: 0,
      startTime: 0
    }
    this.timerId = 0
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log(nextProps)
    console.log(nextState)
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // mounted
  componentWillMount() {
    this.timerId = setInterval(e => {
      this.tick()
    }, 1000)
    console.log('componentWillMount, timerId:' + this.timerId)
  }

  // unmounted
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId)
  }

  clickHandler() {
    if(this.state.isLive) {
      this.setState({isLive: false})
      return
    }
    const v = new Date().getTime()
    this.setState({
      curTime: v,
      startTime: v,
      isLive: true
    })
  }

  tick(e) {
    if (this.state.isLive) {
      const v = new Date().getTime()
      this.setState({curTime: v})
    }
  }

  getDisp() {
    const s = this.state
    const delta = s.curTime - s.startTime
    const t = Math.floor(delta/1000)
    const ss = t%60
    const m = Math.floor(t/60)
    const mm = m%60
    const hh = Math.floor(mm/60)
    const z = (num) => {
      const s = '00' + String(num)
      return s.substr(s.length - 2, 2)
    }
    return <span className='disp'>
      {z(hh)}:{z(mm)}:{z(ss)}
    </span>
  }

  render() {
    let label = 'start'
    if (this.state.isLive) {
      label = 'stop'
    }
    const disp = this.getDisp()
    const fclick = (e) => this.clickHandler(e)
    return (<div className='Stopwatch'>
      <div>{disp}</div>
      <button onClick={fclick}>{label}</button>
    </div>)
  }
}

export default Stopwatch
