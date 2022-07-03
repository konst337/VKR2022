
  function act(par) {
    par.classList.toggle('active');
    tech = par.closest('.accordion-item')
    butt = tech.querySelector('.accordion-button')
    child = tech.querySelector('.active')
    if (child == null) {
      butt.classList.add('bg-success');
      butt.classList.remove('bg-danger');
    }
    else {
      butt.classList.add('bg-danger');
      butt.classList.remove('bg-success');
    }

  }

  function sendTechs() {
    var par = document.getElementById('accordionMain');
    var elems = par.getElementsByClassName("active")
    var arr = [];
    for (let i = 0; i < elems.length; i++) {
      arr.push(elems[i].id);
    }
    var inp = document.getElementById('techs');
    inp.value = arr;

  }
