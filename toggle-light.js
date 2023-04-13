var toggleLight = () => {
  document.getElementsByTagName('html')[0].style.filter = '';
  document.head.removeChild(document.getElementById('dark-mode-style'));
}

!!document.getElementById("dark-mode-style") && toggleLight();