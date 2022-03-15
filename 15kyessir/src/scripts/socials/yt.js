const youtubeKey = '{api_key}';
const youtubeUser = '{channel_id}';
const subCount = document.getElementById('socials-yt-subCount');

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //console.log(data);
        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
    })

}

getSubscribers();