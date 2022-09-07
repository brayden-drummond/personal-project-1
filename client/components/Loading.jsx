import React from 'react'
import { connect } from 'react-redux'

function Loading(props) {
  const style = {
    margin: '0 5px 0 5px',
    width: '40px',
    height: '40px',
  }

  return props.loading ? (
    <img style={style} src="./images/animated-circle.gif" />
  ) : null
}

// Old way of connecting react and redux
function mapStateToProps(state) {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(Loading)
