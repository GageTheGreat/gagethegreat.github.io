var username = document.getElementById("username-box");
var imageBtn = document.getElementById("image");
var submitbtn = document.getElementById("submit-btn");
var image
// const formData = new FormData();
var messageText = `Art by ||${username.value}||`
var data1


//aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE1NjM2MjU2MjQxODUwNzg1Ni9DU21uQTFTQU12eVNBMDl1cXVwU2c2Sm9GaERQbTgteFRKRTcyVFZGSHVkSXU3T1o2Wm5PbTVkNFd3Z3o1Zy1kVTNkOQ==


submitbtn.addEventListener("click", () => {

  console.log(imageBtn.files[0])


  // if (!formData) {
  //   alert("No Image Selected")
  //   return 0;
  // }

  
  // .catch(error => console.error(error))
  // setTimeout(() => {
  //   fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE1NjM3NTc4MjUxMjQxNDc1MC9hcnFTSU9UMnVKVEJ0Q3Fydlh1a04tUTI3cDBvTFNCY2Y5WTN1VGVfSDJxY3gwREZXZmFVNGhWenJhSmF2dDlON29JTA=="), {
  //     method: 'POST',
  //     headers: {
  //       'Host': 'discord.com',
  //       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0',
  //       'Accept': 'application/json',
  //       'Accept-Language': 'en',
  //       'Accept-Encoding': 'gzip, deflate, br',
  //       'Referer': 'https://discohook.org/',
  //       'Content-Type': 'multipart/form-data; boundary=---------------------------242069881712545724724146539916',
  //       'Content-Length': '347606',
  //       'Origin': 'https://discohook.org',
  //       'Connection': 'keep-alive',
  //       'Sec-Fetch-Dest': 'empty',
  //       'Sec-Fetch-Mode': 'cors',
  //       'Sec-Fetch-Site': 'cross-site',
  //       'Sec-GPC': 1
  //     },
  //     body: new URLSearchParams({
  //         'content': formData,
  //         'avatar_url': "https://a.ppy.sh/29033815?1649554022.jpeg",
  //         'username': "Test"
  //     })
  //   });


  const data = new FormData();
  data.append("content", imageBtn.files[0]);
  data.append("content", "HI");
  data.append("avatar_url", "");
  data.append("username", "test");
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE1NjM3NTc4MjUxMjQxNDc1MC9hcnFTSU9UMnVKVEJ0Q3Fydlh1a04tUTI3cDBvTFNCY2Y5WTN1VGVfSDJxY3gwREZXZmFVNGhWenJhSmF2dDlON29JTA=="));
  xhr.setRequestHeader("cookie", "__dcfduid=15e75d5a5cdb11eea2a2f268196cc842; __sdcfduid=15e75d5a5cdb11eea2a2f268196cc84234adae2538a3039ef2b4bb6971e72b1e27956112e1639967934571a6cb106448; __cfruid=7238d3ff951eefb4f316a683eb8ecacb8f16ecd0-1695780653");
  xhr.setRequestHeader("User-Agent", "insomnia/2023.5.8");
  
  xhr.send(data);

});




