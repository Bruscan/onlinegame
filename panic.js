// Panic Button - Press + (plus) to open Google Classroom
window.addEventListener('keydown', function (e) {
  if(e.key === '+') {
    window.open('https://classroom.google.com/u/0/h', '_blank');
  }
}, false);
