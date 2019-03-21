
export const PLAY = 'PLAY';
export const DELETE_MUSIC = 'DELETE_MUSIC';

export const  CHANGE_MUSIC_STATUS = 'CHANGE_MUSIC_STATUS';
export const  SWITCH_SONG = 'SWITCH_SONG';

/*
 * action creator
 */

export const deleteMusic = (index) => {
  return {
    type: DELETE_MUSIC,
    index
  }
}
export const changeMusicStatus = (obj) => {
  return {
    type: CHANGE_MUSIC_STATUS,
    obj
  }
}
export const playMusic = (playStatus) => {
  return {
    type: PLAY,
    playStatus
  }
}

export const switchSong = (currentMusic) => {
  return {
    type: SWITCH_SONG,
    currentMusic
  }
}