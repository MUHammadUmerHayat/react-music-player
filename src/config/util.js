const Util = {
  playMusic: (musicItem) => {
    $('#player').jPlayer('setMedia', {
      mp3: musicItem.file
    }).jPlayer('play');
  }
}

export default Util;