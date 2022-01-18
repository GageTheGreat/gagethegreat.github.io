var i = 0;

function trollispressed(obj) {
  i++
  console.log(i)
  if (i == 5) {
    alert('This button doesn\'t work')
  }
  if (i == 10) {
    alert('Stop!')
  }
  if (i == 15) {
    alert('FINE!')
  }
  if (i == 20) {
    obj.classList[0][1] = ""
    obj.style.opacity = 0;
    obj.style.width = "0px"
    obj.style.height = "0px"
    obj.style.position = "absolute"
    setTimeout(() => {
      alert('What are you going to do now?')
    }, 1000);
    setTimeout(() => {
      obj.style.opacity = 1;
      obj.style.width = ""
      obj.style.height = ""
      obj.style.position = ""
    }, 3000);
    setTimeout(() => {
      alert('What it came back')
      alert('Whatever then')
      alert('I\'m going to have to do it')
      document.body.style.animation = "fade-to-white-troll 3s ease-out forwards"
      document.getElementById('link1').style.animation = "fade-to-white-troll-2 3s ease-out forwards"
      document.getElementById('link2').style.animation = "fade-to-white-troll-2 3s ease-out forwards"
      document.getElementById('lazytext').style.animation = "fade-to-white-troll-2 3s ease-out forwards"
      setTimeout(() => {
        document.write('<p id="text1" style="font-size:30px;position:absolute;top:40%;left:50%;transform: translate(-50%,-50%);font-family:monospace;">This is it</p>')
        setTimeout(() => {
          document.getElementById('text1').remove()
          document.write('<p style="font-size:30px;position:absolute;top:40%;left:50%;transform: translate(-50%,-50%);font-family:monospace;">twitch.tv/reddstone35</p>')
          setTimeout(() => {
            window.location.href = ""
          }, 10);
        }, 4000);
      }, 6000);
    }, 5500);
  }
}