const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code');
const password = urlParams.get('pass');

validCodes = ['XTRQFPXAAUH68GU', '36XMNRCR4WMDB9P', 'N5ZFYUSD9NFGXEJ'];

console.log(validCodes);

for (let i = 0; i < validCodes.length; i++) {
  console.log(validCodes[i]);
}
if (
  window.location.pathname === '/juice/' ||
  window.location.pathname === '/juice/index.html'
) {
  if (
    code === 'XTRQFPXAAUH68GU' ||
    code === '36XMNRCR4WMDB9P' ||
    code === 'N5ZFYUSD9NFGXEJ'
  ) {
    document.write(
      `<p>You've found a juice box code! Go ask Zavier (7-2) or Gage (7-2) to claim a free juice box in room 174 at lunch. Code: ${code}</p>`
    );
  } else {
    document.write(
      '<p>You can buy a juice box from Gage or Zavier at lunch time in room 174</p>'
    );
  }
}

const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36);
};

if (window.location.pathname === '/juice/settings-real.html') {
  if (
    simpleHash(password) !== 'wypgiz' &&
    sessionStorage.getItem('pass') === null
  ) {
    history.back();
    window.close();
    throw new Error('Incorrect Password');
  }
}

function disableCode(buttonID, OBJ) {
  if (buttonID === 1) {
    if (localStorage.getItem('code_1') === 'disabled') {
      localStorage.setItem('code_1', 'enabled');
      document.getElementById('code-1-disabled').textContent = '';
      document.getElementById('code-1').innerHTML = validCodes[0];
      OBJ.value = 'Disable';
    } else {
      localStorage.setItem('code_1', 'disabled');
      document.getElementById('code-1-disabled').textContent = ' Disabled';
      document.getElementById(
        'code-1'
      ).innerHTML = `<strike>${validCodes[0]}</strike>`;
      OBJ.value = 'Enable';
    }
  } else if (buttonID === 2) {
    if (localStorage.getItem('code_2') === 'disabled') {
      localStorage.setItem('code_2', 'enabled');
      document.getElementById('code-2-disabled').textContent = '';
      document.getElementById('code-2').innerHTML = validCodes[1];
      OBJ.value = 'Disable';
    } else {
      localStorage.setItem('code_2', 'disabled');
      document.getElementById('code-2-disabled').textContent = ' Disabled';
      document.getElementById(
        'code-2'
      ).innerHTML = `<strike>${validCodes[1]}</strike>`;
      OBJ.value = 'Enable';
    }
  } else if (buttonID === 3) {
    if (localStorage.getItem('code_3') === 'disabled') {
      localStorage.setItem('code_3', 'enabled');
      document.getElementById('code-3-disabled').textContent = '';
      document.getElementById('code-3').innerHTML = validCodes[2];
      OBJ.value = 'Disable';
    } else {
      localStorage.setItem('code_3', 'disabled');
      document.getElementById('code-3-disabled').textContent = ' Disabled';
      document.getElementById(
        'code-3'
      ).innerHTML = `<strike>${validCodes[2]}</strike>`;
      OBJ.value = 'Enable';
    }
  }
}

window.onload = function () {
  if (window.location.pathname === '/juice/settings-real.html') {
    if (localStorage.getItem('code_1') === 'disabled') {
      document.getElementById('code-1-disabled').textContent = ' Disabled';
      document.getElementById(
        'code-1'
      ).innerHTML = `<strike>${validCodes[0]}</strike>`;
      document.getElementById('j-code-button-1').value = 'Enable';
    } else {
      document.getElementById('code-1-disabled').textContent = '';
      document.getElementById('code-1').innerHTML = validCodes[0];
      document.getElementById('j-code-button-1').value = 'Disable';
    }
    if (localStorage.getItem('code_2') === 'disabled') {
      document.getElementById('code-2-disabled').textContent = ' Disabled';
      document.getElementById(
        'code-2'
      ).innerHTML = `<strike>${validCodes[1]}</strike>`;
      document.getElementById('j-code-button-2').value = 'Enable';
    } else {
      document.getElementById('code-2-disabled').textContent = '';
      document.getElementById('code-2').innerHTML = validCodes[1];
      document.getElementById('j-code-button-2').value = 'Disable';
    }
    if (localStorage.getItem('code_3') === 'disabled') {
      document.getElementById('code-3-disabled').textContent = ' Disabled';
      document.getElementById(
        'code-3'
      ).innerHTML = `<strike>${validCodes[2]}</strike>`;
      document.getElementById('j-code-button-3').value = 'Enable';
    } else {
      document.getElementById('code-3-disabled').textContent = '';
      document.getElementById('code-3').innerHTML = validCodes[2];
      document.getElementById('j-code-button-3').value = 'Disable';
    }
  }
};
