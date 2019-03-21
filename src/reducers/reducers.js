
import { combineReducers } from 'redux';
import { DELETE_MUSIC, PLAY, CHANGE_MUSIC_STATUS, SWITCH_SONG } from './actions';
import MUSIC_LIST from '../config/config';

const initialMusicStatus = {
  currentMusicItem: null,
  currentIndex: -1,
  progress: 0,
  volume: 0,
  isPlay: false,
  leftTime: 0
      };
const musicStatus = (state = initialMusicStatus, action) => {
  switch (action.type) {
    case PLAY:
      return Object.assign({}, state, action.playStatus);//deep copy
    case CHANGE_MUSIC_STATUS:
      return Object.assign({}, state, action.obj);
    case SWITCH_SONG:
      return Object.assign({}, state, action.currentMusic);
    default:
      return state;
  }
}

const musicList = (state = MUSIC_LIST, action) => {
  switch (action.type) {
    case DELETE_MUSIC:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state
  }
}

const rootReducer = combineReducers({
  musicList,
  musicStatus,
})

export default rootReducer
