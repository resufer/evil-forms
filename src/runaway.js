export let runaway = (setAngry) => {
  let btn = document.querySelector('.send').firstElementChild;
  window.btn = btn
  btn.addEventListener('click', () => {
    if (!btn.id) {
      btn.id = 'case1';
      btn.innerHTML = 'Are you sure?';
      setAngry(15);
    } else if (btn.id === 'case1') {
      btn.id = 'case2';
      btn.innerHTML = document.getElementById('name').value + ' ' +
      document.getElementById('surname').value + ', you definitely want it?!';
      setAngry(25);
    } else if (btn.id === 'case2') {
      btn.id = 'case3';
      btn.innerHTML = 'No';
      setAngry(50);
    } else if (btn.id === 'case3') {
      setAngry(10000);
    }
  })
}
