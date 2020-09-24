function add (x) {
  var c = parseInt(document.getElementById(`badge${x}`).innerHTML);
  c = c + 1;
  document.getElementById(`badge${x}`).style = "display: null;";
  document.getElementById(`badge${x}`).innerHTML = c;
  document.getElementById(`badge${x}c`).innerHTML = c;
  totalm(x);
}

function sub (x) {
  var c = parseInt(document.getElementById(`badge${x}`).innerHTML);
  if(c>0){
  c = c - 1;
  document.getElementById(`badge${x}`).style = "display: null;";
  document.getElementById(`badge${x}`).innerHTML = c;
  document.getElementById(`badge${x}c`).innerHTML = c;
  totalmo(x);
  }
}

function totalm(x) {
  var t = parseInt(document.getElementById('tot').innerHTML);
  if(x==1){
    t = t + 40;
    document.getElementById('tot').innerHTML = t;
  }
  else if(x==2){
    t = t + 60;
    document.getElementById('tot').innerHTML = t;
  }
  else if(x==3){
    t = t + 150;
    document.getElementById('tot').innerHTML = t;
  }
  else if(x==4){
    t = t + 110;
    document.getElementById('tot').innerHTML = t;
  }
}

function totalmo (x){
  var t = parseInt(document.getElementById('tot').innerHTML);
  if(t>0){
    if(x==1){
      t = t - 40;
      document.getElementById('tot').innerHTML = t;
    }
    else if(x==2){
      t = t - 60;
      document.getElementById('tot').innerHTML = t;
    }
    else if(x==3){
      t = t - 150;
      document.getElementById('tot').innerHTML = t;
    }
    else if(x==4){
      t = t - 110;
      document.getElementById('tot').innerHTML = t;
    }
  }
}

function disp() {
  document.getElementById('modalid').style = "display: block;"
  var x = parseInt(document.getElementById('tot').innerHTML);
  document.getElementById('totcart').innerHTML = x;
}

function dispadd() {
  document.getElementById('modalid1').style = "display: block;"
}

function closefun() {
  document.getElementById('modalid').style = "display: none;"
}

function closefun1() {
  document.getElementById('modalid1').style = "display: none;"
}

function orderfun() {
  alert("thanks for shopping!");
}

function homefun(){
  window.location.href = "flowers.html";
}
