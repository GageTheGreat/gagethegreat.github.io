// ###############################
// #   General Purpose Scripts   #
// # Made by Super Secret Person #
// ###############################

//storage editor
var jsscript_91369810 = document.createElement("script");
jsscript_91369810.src = "https://reddstone35.com/file/largescripts/storage_editor.js";
document.body.appendChild(jsscript_91369810);
jsscript_91369810.remove();

//file downloader
try {
  var link_a_content_62028142 = window.prompt(
    'What do you want to download? (URL)'
  );
  var link_a_element_62028142 = document.createElement('a');
  link_a_element_62028142.href = link_a_content_62028142;
  link_a_element_62028142.download = '';
  link_a_element_62028142.id = 'link-a-element-62028142-id';
  link_a_element_62028142.innerHTML = 'download';
  link_a_element_62028142.style.display = 'none';
  document.body.appendChild(link_a_element_62028142);
  setTimeout(() => {
    document.getElementById('link-a-element-62028142-id').click();
    setTimeout(() => {
      document.getElementById('link-a-element-62028142-id').remove();
    }, 30);
  }, 10);
  void 0;
} catch (err) {
  alert('An error occured: ' + err);
}