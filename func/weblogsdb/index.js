const msg = new URLSearchParams(window.location.search).get("msg")

var userIP = fetch('https://api.ipify.org/').then(function(response) {
  return response.text();
}).then((content) => { 
  userIP = content
  sendMSG()
});

function sendMSG() {
  var doSend = true
  if (msg === null || msg === undefined || msg === "" || msg === " " || msg === " ".repeat(msg.length)) {
    alert("Message cannot be blank")
    var doSend = false
    window.history.back();
    window.close();
  }
  var sentMSG = `Sent from \`${userIP}\`. Message: ${msg}`
  console.log(doSend)
  if (doSend === true) {
    console.log("can send")
    fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA1NjgzMDE5MDM3NTk0NDIyMi9qMldzX1g5X2Q5MldnSVNtZmJuV1lCTkdsNHRMWjRZVEJJejNXZEVMYUFSNHdmMmM2VnRJMjVqajY3YnFDdG5VQ1BUUA=="), {
        method: 'POST',
        headers: {
            'Host': 'discord.com',
            'Content-Length': '31',
            'Sec-Ch-Ua': '"Not?A_Brand";v="8", "Chromium";v="108"',
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Sec-Ch-Ua-Mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.125 Safari/537.36',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Origin': 'https://reddstone35.com',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://reddstone35.com/',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.9'
        },
        body: new URLSearchParams({
            'content': sentMSG,
            'username': '',
            'avatar_url': ''
        })
    }).then(function() {
      window.history.back();
      window.close();
    });
  }
}
