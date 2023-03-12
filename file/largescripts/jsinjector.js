var jsInjectorAcive_08039707890820649443200666552125 = undefined;
function createBaseGUI() {
  var jsInjectContainerWrapper_57865339127734920168055788445180 =
    document.createElement('div');
  jsInjectContainerWrapper_57865339127734920168055788445180.innerHTML =
    '<div id="17c40bbff3ccfd961bfb36c373780e7809f3e80fed9e8426a9" class="js-inject-container-17c40bbff3ccfd961bfb36c373780e7809f3e80fed9e8426a9"><span id="0b441dd654791030037b99da455574e88adf347bb398571f2c" class="js-inject-title-0b441dd654791030037b99da455574e88adf347bb398571f2c">Js Injector <button id="88c407d576161b00b56274ecc91203c1d30c047459b53501d3" class="js-inject-close-btn-88c407d576161b00b56274ecc91203c1d30c047459b53501d3">&times;</button></span><hr><input type="text" id="b8360f0481e091b876e0f5c56fdaaede537ca961e0101ef514" class="js-inject-input-b8360f0481e091b876e0f5c56fdaaede537ca961e0101ef514"></input><div id="5e99459b21f94e900fb00f5b391544fe7c4bd62b0ff97e3733" class="js-inject-output-5e99459b21f94e900fb00f5b391544fe7c4bd62b0ff97e3733"></div></div>';
  var jsInjectContainer_75356435359544638236638425369034 =
    jsInjectContainerWrapper_57865339127734920168055788445180.firstChild;
  document.body.appendChild(jsInjectContainer_75356435359544638236638425369034);
}

function createStyles() {
  var jsInjectorStyles_54702599950036465880294306090018 =
    document.createElement('style');
  jsInjectorStyles_54702599950036465880294306090018.innerText = `.js-inject-container-17c40bbff3ccfd961bfb36c373780e7809f3e80fed9e8426a9 {
  position: fixed;
  background-color: #212121;
  width: 400px;
  height: 500px;
  z-index: 99999999;
  font-size: 18px;
  top: 50px;
  left: 50px;
  border-radius: 10px;
}
  
.js-inject-input-b8360f0481e091b876e0f5c56fdaaede537ca961e0101ef514 {
  width: calc(100% - 10px);
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: #313131;
  color: white;
  text-indent: 5px
}
  
.js-inject-output-5e99459b21f94e900fb00f5b391544fe7c4bd62b0ff97e3733 {
  color: white;
  font-size: 17px;
  overflow-y: scroll;
  height: 400px;
  max-height: 400px;
}

.js-inject-title-0b441dd654791030037b99da455574e88adf347bb398571f2c {
  display: inline-block;
  user-select: none;
  color: white;
  width: 100% !important;
}

.js-inject-close-btn-88c407d576161b00b56274ecc91203c1d30c047459b53501d3 {
  position: relative;
  float: right;
  margin-right: 5px;
  color: white;
  background: none;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 20px;
}

hr {
  margin-bottom: 10.5px;
  margin-top: 0px
}`;
  document.body.appendChild(jsInjectorStyles_54702599950036465880294306090018);
}

function makeDraggable() {
  // credit w3schools.com
  dragElement(
    document.getElementById(
      '17c40bbff3ccfd961bfb36c373780e7809f3e80fed9e8426a9'
    )
  );

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (
      document.getElementById(
        '0b441dd654791030037b99da455574e88adf347bb398571f2c'
      )
    ) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(
        '0b441dd654791030037b99da455574e88adf347bb398571f2c'
      ).onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

if (jsInjectorAcive_08039707890820649443200666552125 !== true) {
  createBaseGUI();
  createStyles();
  makeDraggable();
  var jsInjectorOutput_68704770033699734932136330504246 =
    document.getElementById(
      '5e99459b21f94e900fb00f5b391544fe7c4bd62b0ff97e3733'
    );
  var jsInjectorCloseBTN_73675650722929924094268686146668 =
    document.getElementById(
      '88c407d576161b00b56274ecc91203c1d30c047459b53501d3'
    );
  var jsInjectorContainer_64786484469046696970675278094207 =
    document.getElementById(
      '17c40bbff3ccfd961bfb36c373780e7809f3e80fed9e8426a9'
    );
  var jsInjectorEvalOutput_72560528591680096720150206666922 = '';
  var jsInjectorInput_03756783560045408806544475020075 =
    document.getElementById(
      'b8360f0481e091b876e0f5c56fdaaede537ca961e0101ef514'
    );
} else {
  alert('There is already an injector open');
}

jsInjectorCloseBTN_73675650722929924094268686146668.addEventListener(
  'click',
  () => {
    jsInjectorAcive_08039707890820649443200666552125 = false;
    jsInjectorContainer_64786484469046696970675278094207.remove();
  }
);

jsInjectorContainer_64786484469046696970675278094207.addEventListener(
  'keypress',
  (e) => {
    void 0;
    if (
      jsInjectorInput_03756783560045408806544475020075.value !== '' &&
      e.key === 'Enter'
    ) {
      try {
        jsInjectorEvalOutput_72560528591680096720150206666922 = eval(
          `try { ${jsInjectorInput_03756783560045408806544475020075.value} } catch (err) { jsInjectorEvalOutput_72560528591680096720150206666922 = err }`
        );
      } catch (err) {
        jsInjectorEvalOutput_72560528591680096720150206666922 = err;
      }
      jsInjectorOutput_68704770033699734932136330504246.innerText +=
        '\n' + jsInjectorEvalOutput_72560528591680096720150206666922;
    }
  }
);

jsInjectorAcive_08039707890820649443200666552125 = true;

void 0;