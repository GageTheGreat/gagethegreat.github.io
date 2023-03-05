const key = 'AIzaSyBvq4st9BGVbJn3tFG03Ioy1G9K6yqfFzo';
let selectedChannelYT = sessionStorage.getItem('selectedChannel');
const subButtonYT = document.getElementById('social-yt-subscribe-btn');
const viewButtonYT = document.getElementById('social-yt-viewchannel-btn');
const viewSubCountBTN = document.getElementById('social-yt-viewsubs-btn');
const subCountLarge = document.getElementById('socials-youtube-subcount-iframe')
const videoMiniplayerYT = document.getElementById(
  'youtube-video-mostrecent-miniplayer'
);

let getSubscribers = (user) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${user}&key=${key}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(user);
      //console.log(data);
      document.getElementById('socials-yt-subCount').innerHTML =
        data['items'][0].statistics.subscriberCount;
    });
};

function loadChannel(channelName) {
  if (channelName === 'GageTheGreat') {
    getSubscribers('UC0ouJNIXzJEvtOCW7K7WoOw');
    subButtonYT.setAttribute(
      'href',
      'https://www.youtube.com/@GageTheGreatYT?sub_confirmation=1'
    );
    viewButtonYT.setAttribute(
      'href',
      'https://www.youtube.com/@GageTheGreatYT'
    );
    videoMiniplayerYT.setAttribute(
      'src',
      'https://www.youtube.com/embed/2a4scTLNoQs'
    );
    document.getElementById(
      'reddstone35coding-channel-viewstats'
    ).style.backgroundColor = 'rgba(214, 214, 214, 0.425)';
    document.getElementById(
      'reddstone35-channel-viewstats'
    ).style.backgroundColor = 'rgba(0, 0, 0, 0.225)';
  } else if (channelName === 'reddstone35coding_old_6ab180d3c092d8a316d7709eb02281fd4b1f241d90b45fe6435dda9d7f7dbf3f8cfc22343cd5b43b5091ae4f11000c5af97f') {
    getSubscribers('UCVmxCH9EAokXX5b9YiNHOwQ');
    subButtonYT.setAttribute(
      'href',
      'https://www.youtube.com/channel/UCVmxCH9EAokXX5b9YiNHOwQ?sub_confirmation=1'
    );
    viewButtonYT.setAttribute(
      'href',
      'https://www.youtube.com/channel/UCVmxCH9EAokXX5b9YiNHOwQ'
    );
    videoMiniplayerYT.setAttribute('src', 'https://www.youtube.com/embed/none');
    document.getElementById(
      'reddstone35-channel-viewstats'
    ).style.backgroundColor = 'rgba(214, 214, 214, 0.425)';
    document.getElementById(
      'reddstone35coding-channel-viewstats'
    ).style.backgroundColor = 'rgba(0, 0, 0, 0.225)';
  } else {
    void 0;
  }
}

window.onload = function () {
  if (selectedChannelYT === null) {
    sessionStorage.setItem('selectedChannel', 'GageTheGreat');
    loadChannel('GageTheGreat');
  } else {
    loadChannel(selectedChannelYT);
  }
};

getSubscribers('UC0ouJNIXzJEvtOCW7K7WoOw', 'socials-yt-subCount-reddstone35');

document
  .getElementById('reddstone35-channel-viewstats')
  .addEventListener('click', () => {
    loadChannel('GageTheGreat');
    sessionStorage.setItem('selectedChannel', 'GageTheGreat');
  });
document
  .getElementById('reddstone35coding-channel-viewstats')
  .addEventListener('click', () => {
    loadChannel('GageTheGreat');
    sessionStorage.setItem('selectedChannel', 'GageTheGreat');
  });



viewSubCountBTN.addEventListener("click", (e) => {
  subCountLarge.style.display = "inline-block";
});
