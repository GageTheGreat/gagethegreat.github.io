// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const redirToken = urlParams.get('token');

var redirToken = window.location.search.slice(1)

console.log(redirToken)

function redirect(_href) {
  window.location = _href;
}

function download(fileUrl) {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", "");
  a.click();
  history.back()
}

function getFile(_token) {
  switch(_token) {
    case "PlumTOS-YLi3M8Q4TXbe":
      redirect("https://docs.google.com/document/d/1c0XF0HsGfmcMwNNdo5M1dJYgLZIft-yWYYiAA6RMPZo/view")
      break;

    case "DOC_tS-UMKsPfiftRcjYTEFpP5tyF34FhAwiv":
      redirect("/docs/scripts/usage#chromebook-scripts_fake-error")
      break;

    case "img_d_pfp-red":
      download("/file/images/red_pfp.png")
      break;

    case "img_d_pfp-orange":
      download("/file/images/orange_pfp.png")
      break;

    case "img_d_pfp-yellow":
      download("/file/images/yellow_pfp.png")
      break;

    case "img_d_pfp-green":
      download("/file/images/green_pfp.png")
      break;

    case "img_d_pfp-blue":
      download("/file/images/blue_pfp.png")
      break;

    case "img_d_pfp-purple":
      download("/file/images/purple_pfp.png")
      break;

    case "osu-reddstone35-skin":
      download("/file/osu!/Reddstone35's Default V2 (Whitecat + Eliminate336).osk")
      break;

    case "DOC_tS-qqycWZgdJM2xtpfwWUNdPxF2QnrPeX":
      redirect("/docs/scripts/usage#chromebook-scripts_storage-editor")
      break;

    case "youtube":
      redirect("https://youtube.com/@GageTheGreatYT")
      break;

    case "twitch":
      redirect("https://twitch.tv/reddstone35")
      break;

    case "62cf23384f2dba154e02fe02aa8a116b50fa471eb68ac383021ca6d89cf3cb8f":
      redirect("/school/cheats/blooket-25302-noadyn-real-hex8F8F8F")
      break;

    default:
      redirect("/")
      break;

  }
}

document.write("Redirecting...")

getFile(redirToken)