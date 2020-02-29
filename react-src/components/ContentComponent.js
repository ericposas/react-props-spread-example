import React from 'react'

class ContentComponent extends React.Component {

  render(){
    const divProps = {
      style: {
        textAlign: 'center',
        minWidth: '400px',
        fontFamily: 'arial'
      }
    }
    return (
      <>
        <div {...this.props.divProps}>
          {this.props.imgDesc}
        </div>
        <img {...this.props.imgProps}/>
        <div {...divProps}>
          This is a good example of saving props as a js object and<br/>
          applying them to an element via the spread operator
        </div>
      </>
    )
  }

}

export default ContentComponent
