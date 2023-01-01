const msg = new URLSearchParams(window.location.search).get("q");
const shMode = new URLSearchParams(window.location.search).get("sh");

if (shMode === "1") {
  document.getElementById("main-container").style.display = "flex";
}

var userIP = fetch('https://api.ipify.org/').then(function(response) {
  return response.text();
}).then((content) => { 
  userIP = content;
  sendMSG();
});

function sendMSG() {
  document.getElementById("loading").innerText = `Sending request to https://discord.com/...`;
  var doSend = true;
  var noerr = true;
  setTimeout(() => {
    if (msg === null || msg === undefined|| msg === "" || msg === " " || msg === " ".repeat(msg.length)) {
      doSend = false;
      document.getElementById("img-container").style.display = "none";
      document.getElementById("loading").style.color = "red";
      document.getElementById("loading").innerHTML = "Message cannot be blank. <a href=\"javascript:window.history.back();window.close()\">Close</a>";
      if (shMode !== "1") {
        window.history.back();
        window.close();
      }
    }
  }, 300);
  var sentMSG = `Sent from \`${userIP}\`. Message: ${msg}`;
  setTimeout(() => {
    if (doSend === true) {
      try {
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
          document.getElementById("loading").innerText = "Finishing Up...";
          setTimeout(() => {
            window.history.back();
            window.close();
          }, 1000);
        });
      } catch (e) {
        noerr = false
        document.getElementById("img-container").style.display = "none";
        document.getElementById("loading").style.color = "red";
        document.getElementById("loading").innerHTML = "Something went wrong! Try again later. <a href='javascript:window.location.reload()'>Reload</a>";
      }
    }
  }, 1000);
  setTimeout(() => {
    if (noerr === true) {
      document.getElementById("img-container").style.display = "none";
      document.getElementById("loading").style.display = "unset";
      document.getElementById("loading").style.color = "red";
      document.getElementById("loading").innerHTML = "=Timed out! Try again later. <a href='javascript:window.location.reload()'>Reload</a>";
    }
  }, 60000);
}
