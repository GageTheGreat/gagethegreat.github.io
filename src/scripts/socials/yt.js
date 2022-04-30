const key = "AIzaSyBvq4st9BGVbJn3tFG03Ioy1G9K6yqfFzo";
let selectedChannel = sessionStorage.getItem("selectedChannel")
const subButton = document.getElementById("social-yt-subscribe-btn")
const viewButton = document.getElementById("social-yt-viewchannel-btn")
const videoMiniplayer = document.getElementById("youtube-video-mostrecent-miniplayer")

let getSubscribers = (user) => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${user}&key=${key}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(user)
        //console.log(data);
        document.getElementById("socials-yt-subCount").innerHTML = data["items"][0].statistics.subscriberCount;
    })

}

function loadChannel(channelName) {
    if (channelName === "reddstone35") {
        getSubscribers("UC0ouJNIXzJEvtOCW7K7WoOw")
        subButton.setAttribute("href", "https://www.youtube.com/channel/UC0ouJNIXzJEvtOCW7K7WoOw?sub_confirmation=1")
        viewButton.setAttribute("href", "https://www.youtube.com/channel/UC0ouJNIXzJEvtOCW7K7WoOw")
        videoMiniplayer.setAttribute("src", "https://www.youtube.com/embed/eEWzhKc81X4")
        document.getElementById("reddstone35coding-channel-viewstats").style.backgroundColor = "rgba(214, 214, 214, 0.425)"
        document.getElementById("reddstone35-channel-viewstats").style.backgroundColor = "rgba(0, 0, 0, 0.225)"
    } else if (channelName === "reddstone35coding") {
        getSubscribers("UCVmxCH9EAokXX5b9YiNHOwQ")
        subButton.setAttribute("href", "https://www.youtube.com/channel/UCVmxCH9EAokXX5b9YiNHOwQ?sub_confirmation=1")
        viewButton.setAttribute("href", "https://www.youtube.com/channel/UCVmxCH9EAokXX5b9YiNHOwQ")
        videoMiniplayer.setAttribute("src", "https://www.youtube.com/embed/none")
        document.getElementById("reddstone35-channel-viewstats").style.backgroundColor = "rgba(214, 214, 214, 0.425)"
        document.getElementById("reddstone35coding-channel-viewstats").style.backgroundColor = "rgba(0, 0, 0, 0.225)"
    }
}

window.onload = function() {
    if (selectedChannel === null) {
        sessionStorage.setItem("selectedChannel", "reddstone35")
        loadChannel("reddstone35")
    } else {
        loadChannel(selectedChannel)
    }
}

getSubscribers("UC0ouJNIXzJEvtOCW7K7WoOw", "socials-yt-subCount-reddstone35");


document.getElementById("reddstone35-channel-viewstats").addEventListener("click", () => {
    loadChannel("reddstone35")
    sessionStorage.setItem("selectedChannel", "reddstone35")
});
document.getElementById("reddstone35coding-channel-viewstats").addEventListener("click", () =>{
    loadChannel("reddstone35coding")
    sessionStorage.setItem("selectedChannel", "reddstone35coding")
});