// No handler for these tags in dark mode
var NO_DARK_TAG = ['img', 'svg', 'video', 'g-emoji'];


var toggleDark = () => {
  const style = document.createElement('style');
  style.id = 'dark-mode-style';
  style.innerHTML = `${NO_DARK_TAG.join(', ')} {filter: invert(1) hue-rotate(180deg)}` ;

  document.getElementsByTagName('html')[0].style.filter = 'invert(1) hue-rotate(180deg)';
  document.head.appendChild(style);
}

!document.getElementById("dark-mode-style") && toggleDark();



