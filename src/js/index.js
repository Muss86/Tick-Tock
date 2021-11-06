import '../scss/index.scss';

function tickClock() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = 'AM';

  if (hh === 0) {
    hh = 12;
  } else if (hh > 12) {
    hh = hh - 12;
    session = 'PM';
  }

  if (hh < 10) {
    hh = '0' + hh;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  if (ss < 10) {
    ss = '0' + ss;
  }

  return `${hh}:${mm}:${ss} ${session}`;
}

const paragraph = document.querySelector('#clock');
paragraph.innerText = tickClock();
document.body.append(paragraph);
setInterval(function () {
  paragraph.innerText = tickClock();
}, 1000 * 1);
