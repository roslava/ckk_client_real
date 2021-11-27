import React from 'react'
import {withRouter} from 'react-router-dom'



class ScrollToTop extends React.Component {
    
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location & window.innerWidth > 1000 ) {
      window.scrollTo(0, 260)
    }
    if (this.props.location !== prevProps.location & window.innerWidth < 1000 ) {
      window.scrollTo(0, 200)
    }
    if (this.props.location !== prevProps.location & window.innerWidth < 740 ) {
      window.scrollTo(0, 140)
    }
    if (this.props.location !== prevProps.location & window.innerWidth < 480 ) {
      window.scrollTo(0, 90)
    }
  }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)


