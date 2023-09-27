var username = document.getElementById("username-box");
var imageBtn = document.getElementById("image");
var submitbtn = document.getElementById("submit-btn");
var image
const formData = new FormData();
var messageText = `Art by ||${username.value}||`
var data1


//aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE1NjM2MjU2MjQxODUwNzg1Ni9DU21uQTFTQU12eVNBMDl1cXVwU2c2Sm9GaERQbTgteFRKRTcyVFZGSHVkSXU3T1o2Wm5PbTVkNFd3Z3o1Zy1kVTNkOQ==

imageBtn.addEventListener("change", () => {
  
  formData.append('file', imageBtn.files[0])
});  

submitbtn.addEventListener("click", () => {
  const formData = new FormData();
  formData.append('file', imageBtn.files[0])



  if (!formData) {
    alert("No Image Selected")
    return 0;
  }
  // fetch('https://store1.gofile.io/uploadFile', {
  //   method: 'POST',
  //   body: formData,
  // })
  // .then(response => response.json())
  // .then(data => {
  //   if (data.status === 'ok') {
  //     console.log(data.data)
  //     data1 = data.data
  //   }
  // })
  
  // .catch(error => console.error(error))
  setTimeout(() => {
    fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE1NjM3NTc4MjUxMjQxNDc1MC9hcnFTSU9UMnVKVEJ0Q3Fydlh1a04tUTI3cDBvTFNCY2Y5WTN1VGVfSDJxY3gwREZXZmFVNGhWenJhSmF2dDlON29JTA=="), {
      method: 'POST',
      headers: {
          'Content-Type': 'multipart/form-data'
      },
      body: new URLSearchParams({
          'content': formData,
          'avatar_url': "https://a.ppy.sh/29033815?1649554022.jpeg",
          'username': "Test"
      })
    });
  }, 0);
  console.log("submit")

});




