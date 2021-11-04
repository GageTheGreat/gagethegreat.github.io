const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redir = urlParams.get('r');
if (!redir.includes("https://")) {
window.location.href = "https://" + redir
} else {
    window.location.href = redir
}

function change();
{
    document.getElementById("button-files-secret-1").value="Nothing here";
}
