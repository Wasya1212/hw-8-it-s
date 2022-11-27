import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const UPDATE_TIME_DELAY = 1000; // 1 sec
const PLAYER_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const currentTime = parseInt(localStorage.getItem(PLAYER_STORAGE_KEY)) || 0;

player.on('timeupdate', throttle(({ seconds }) => {
  localStorage.setItem(PLAYER_STORAGE_KEY, seconds);
}, UPDATE_TIME_DELAY));

player
  .setCurrentTime(currentTime)
  .catch((error) => {
    console.error(error.name);
  });