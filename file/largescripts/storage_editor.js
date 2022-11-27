// edit cookies, localStorage, or sessionStorage

var exit = false;

function main() {
  var cmd = window.prompt(
    "Storage editor. Enter Command: (Type 'help' for help)"
  );
  if (cmd === 'exit') {
    exitApp();
  } else if (cmd === 'help') {
    /* go to help */
  } else {
    var subcmd = window.prompt(
      "Storage editor. What do you want to change/get: (Type 'help' for help)"
    );
  }

  if (cmd === 'edit') {
    edit(subcmd);
  } else if (cmd === 'get') {
    get(subcmd);
  } else if (cmd === 'del') {
    del(subcmd);
  } else if (cmd === 'create') {
    create(subcmd);
  } else if (cmd === 'help') {
    alert(
      'To get help visit: https://reddstone35.com/redirect?token=DOC_tS-qqycWZgdJM2xtpfwWUNdPxF2QnrPeX'
    );
  } else if (cmd === 'exit') {
    exitApp();
  } else {
    alert(`'${cmd}' is not a valid command. For help type the 'help' command`);
  }
  if (exit === false) {
    main();
  }
}

function get(obj) {
  if (obj === 'cookie') {
    var objname = window.prompt(
      "Enter name of cookie you want to get ('all' for all): "
    );
    if (objname === 'all') {
      alert(document.cookie);
    } else if (CookieExists(objname)) {
      const objvalue = document.cookie
        .split('; ')
        .find((row) => row.startsWith(objname))
        ?.split('=')[1];

      alert(`name: ${objname}\nvalue: ${objvalue}`);
    } else {
      alert('invalid cookie name');
    }
  } else if (obj === 'local') {
    var objname = window.prompt(
      "Enter name of localStorage item you want to get ('all' for all): "
    );
    if (objname === 'all') {
      alert(JSON.stringify(localStorage));
    } else if (localStorage.getItem(objname) !== null) {
      alert(`key: ${objname}\nvalue: ${localStorage.getItem(objname)}`);
    } else {
      alert('invalid localStorage object');
    }
  } else if (obj === 'session') {
    var objname = window.prompt(
      "Enter name of sessionStorage item you want to get ('all' for all): "
    );
    if (objname === 'all') {
      alert(JSON.stringify(sessionStorage));
    } else if (sessionStorage.getItem(objname) !== null) {
      alert(`key: ${objname}\nvalue: ${sessionStorage.getItem(objname)}`);
    } else {
      alert('invalid sessionStorage object');
    }
  }
}

function edit(obj) {
  if (obj === 'cookie') {
    var objname = window.prompt('Enter name of cookie you want to edit: ');
    if (CookieExists(objname)) {
      var objvalue = window.prompt(
        `What do you want the value of ${objname} to be?`
      );
      document.cookie = `${objname}=${objvalue};`;

      alert(`${objname}=${objvalue}`);
    } else {
      alert('invalid cookie name');
    }
  } else if (obj === 'local') {
    var objname = window.prompt(
      'Enter name of localStorage item you want to edit: '
    );
    if (localStorage.getItem(objname) !== null) {
      var objvalue = window.prompt(
        `What do you want the value of ${objname} to be?`
      );
      localStorage.setItem(objname, objvalue);
    } else {
      alert('invalid localStorage object');
    }
  } else if (obj === 'session') {
    var objname = window.prompt(
      'Enter name of sessionStorage item you want to edit: '
    );
    if (sessionStorage.getItem(objname) !== null) {
      var objvalue = window.prompt(
        `What do you want the value of ${objname} to be?`
      );
      sessionStorage.setItem(objname, objvalue);
    } else {
      alert('invalid sessionStorage object');
    }
  }
}

function create(obj) {
  if (obj === 'cookie') {
    var objname = window.prompt('Enter name of cookie you want to create: ');
    var objvalue = window.prompt(
      `What do you want the value of ${objname} to be?`
    );
    document.cookie = `${objname}=${objvalue};`;
  } else if (obj === 'local') {
    var objname = window.prompt(
      'Enter name of localStorage item you want to create: '
    );
    var objvalue = window.prompt(
      `What do you want the value of ${objname} to be?`
    );
    localStorage.setItem(objname, objvalue);
  } else if (obj === 'session') {
    var objname = window.prompt(
      'Enter name of sessionStorage item you want to create: '
    );
    var objvalue = window.prompt(
      `What do you want the value of ${objname} to be?`
    );
    sessionStorage.setItem(objname, objvalue);
  }
}

function del(obj) {
  if (obj === 'cookie') {
    var objname = window.prompt('Enter name of cookie you want to delete: ');
    if (CookieExists(objname)) {
      document.cookie = `${objname}=0; expires=Thu, 01 Jan 1970 00:00:01 GMT"`;
    } else {
      alert('invalid cookie name');
    }
  } else if (obj === 'local') {
    var objname = window.prompt(
      "Enter name of localStorage item you want to delete ('all' for all): "
    );
    if (objname === 'all') {
      localStorage.clear();
    } else if (localStorage.getItem(objname) !== null) {
      localStorage.removeItem(objname);
    } else {
      alert('invalid localStorage object');
    }
  } else if (obj === 'session') {
    var objname = window.prompt(
      "Enter name of sessionStorage item you want to delete ('all' for all): "
    );
    if (objname === 'all') {
      sessionStorage.clear();
    } else if (sessionStorage.getItem(objname) !== null) {
      sessionStorage.removeItem(objname);
    } else {
      alert('invalid sessionStorage object');
    }
  }
}

function CookieExists(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(name))
    ?.split('=')[1];
  if (cookieValue !== undefined) {
    return true;
  } else {
    return false;
  }
}

function exitApp() {
  exit = true;
  void 0;
}

main();
void 0;