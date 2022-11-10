// ####################################
// #  Premium Chromebook JS scripts   #
// #   Made by Super Secret Person    #
// ####################################

// Premium Edit Text
if (document.designMode === "on") {
  document.designMode = "off";
  document.body.contentEditable = false;
  void 0;
} else {
  document.designMode = "on";
  document.body.contentEditable = true;
  void 0;
}