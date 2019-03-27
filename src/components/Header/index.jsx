import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";
import Util from '../../config/util';
import './index.less';
import Logo from '../../assets/static/images/logo.png';
class Header extends Component {
  componentDidMount() {
    // const { currentMusicItem } = this.props.musicStatus;
    $('#player').jPlayer({
      supplied: 'mp3',
      wmode: 'window'
    });
    // Util.playMusic(currentMusicItem);
  }

  render() {
    let path = this.props.location.pathname === '/'&& this.props.musicStatus.currentMusicItem ? '/player' : '/';
    return (
        <div className="music-header row">
          <img src={Logo} width={40} className="music-icon" alt=""/>
          <h1 className="header-text -col-auto">React Music Player</h1>
          <Link to={path}> <p className='playing'>{path !=='/'?'Playing >':'<My Music List '}</p> </Link>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    musicStatus: state.musicStatus
  }
}

export default withRouter(connect(mapStateToProps)(Header));