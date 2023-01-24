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
  if (channelName === 'reddstone35') {
    getSubscribers('UC0ouJNIXzJEvtOCW7K7WoOw');
    subButtonYT.setAttribute(
      'href',
      'https://www.youtube.com/channel/UC0ouJNIXzJEvtOCW7K7WoOw?sub_confirmation=1'
    );
    viewButtonYT.setAttribute(
      'href',
      'https://www.youtube.com/channel/UC0ouJNIXzJEvtOCW7K7WoOw'
    );
    videoMiniplayerYT.setAttribute(
      'src',
      'https://www.youtube.com/embed/_K4EdOAA_aE'
    );
    document.getElementById(
      'reddstone35coding-channel-viewstats'
    ).style.backgroundColor = 'rgba(214, 214, 214, 0.425)';
    document.getElementById(
      'reddstone35-channel-viewstats'
    ).style.backgroundColor = 'rgba(0, 0, 0, 0.225)';
  } else if (channelName === 'reddstone35coding') {
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
  }
}

window.onload = function () {
  if (selectedChannelYT === null) {
    sessionStorage.setItem('selectedChannel', 'reddstone35');
    loadChannel('reddstone35');
  } else {
    loadChannel(selectedChannelYT);
  }
};

getSubscribers('UC0ouJNIXzJEvtOCW7K7WoOw', 'socials-yt-subCount-reddstone35');

document
  .getElementById('reddstone35-channel-viewstats')
  .addEventListener('click', () => {
    loadChannel('reddstone35');
    sessionStorage.setItem('selectedChannel', 'reddstone35');
  });
document
  .getElementById('reddstone35coding-channel-viewstats')
  .addEventListener('click', () => {
    loadChannel('reddstone35coding');
    sessionStorage.setItem('selectedChannel', 'reddstone35coding');
  });



viewSubCountBTN.addEventListener("click", (e) => {
  subCountLarge.style.display = "inline-block";
});
