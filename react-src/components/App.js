import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ContentComponent from './ContentComponent'
import axios from 'axios'

class App extends Component {

  state = {
  }

  imgRef = React.createRef()

  divRef = React.createRef()

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    setTimeout(() => this.handleResize(), 1500)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      iw: window.innerWidth,
      ih: window.innerHeight
    })
  }

  handleClick = () => window.alert('Smash bros!')

  render() {
    const imgDesc = 'Smash Bros Ultimate for Nintendo Switch'
    const imgProps = {
      ref: this.imgRef,
      className: 'border',
      style: {
        margin: 'auto',
        display: 'block',
        cursor: 'pointer'
      },
      width: '65%',
      onClick: this.handleClick,
      src: 'https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https:%2F%2Fi.insider.com%2F5bdb703ef556fc595e2b9634%3Fwidth%3D1100%26format%3Djpeg%26auto%3Dwebp&sp=85567d8a1d0abbb27969587102c3d321'
    }
    const divProps = {
      ref: this.divRef,
      style: {
        color: '#333',
        fontSize: '1.5rem',
        textAlign: 'center',
        fontFamily: 'arial',
        marginTop: (
          this.imgRef.current && this.divRef.current && this.state.ih && this.state.iw &&
          this.state.ih/2 - (this.imgRef.current.height/2) - (parseInt(window.getComputedStyle(this.divRef.current).getPropertyValue('height'))/2) + 'px'
        )
      }
    }
    return (
      <>
        <Router>
            <Switch>
              <Route exact path='/'>
                <ContentComponent divProps={divProps} imgProps={imgProps} imgDesc={imgDesc}/>
              </Route>
            </Switch>
        </Router>
      </>
    )
  }

}

export default App
