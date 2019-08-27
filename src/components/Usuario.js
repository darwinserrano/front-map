import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Usuario extends Component {
  static propTypes = {
    user: PropTypes.object
  }


  render() {
    const { user, isLogged } = this.props

    return (
      <div>
        {isLogged && <React.Fragment>Usuario logueado: {user.name}</React.Fragment>}
      </div>
    )
  }
}

const mapStateToProps = ({ login, points }) => ({
  user: login.user,
  isLogged: login.isLogged,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuario)
