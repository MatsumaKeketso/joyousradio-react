const audio = new Audio("http://mediaserv38.live-streams.nl:8027/live");
export const RadioService = {
  play: () => {
    audio.play();
  },
  pause: () => {
    audio.pause();
    window.location.reload();
  },
};
