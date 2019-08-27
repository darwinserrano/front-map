import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { singIn, singOut } from '../redux/login/actions';

export class StartSession extends Component {
  static propTypes = {
    singIn: PropTypes.func,
    singOut: PropTypes.func,
    isLogged: PropTypes.bool
  }

  render() {
    const { singIn, singOut, isLogged } = this.props

    return (
      <div>
        {!isLogged
          ? <button onClick={singIn}>Iniciar Session</button>
          : <React.Fragment>
            Está logueado <button onClick={singOut}>Cerrar Session</button>
          </React.Fragment>}
      </div>
    )
  }
}

const mapStateToProps = ({ login }) => ({
  isLogged: login.isLogged
})

const mapDispatchToProps = {
  singIn,
  singOut
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSession)
