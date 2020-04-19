var sit = 0;
// 0 = No runners on
// 1 = Runner on first
// 2 = Runner on second
// 3 = Runner on Third
// 4 = Runners on First and Second
// 5 = Runners on Second and Third
// 6 = Bases loaded
var runs = 0;
var outs = 0;

document.getElementById('swing').onclick = atBat;
  
function atBat() {
    var z = Math.random();
    if (z >=0 && z < .2){
        alert('You hit a single!');
        if (sit == 2 || sit == 3 || sit == 4 || sit == 7) { runs++; alert('One run scores!')}
        if (sit == 5 || sit == 6) { runs = runs + 2; alert('Two runs score!')}
        sit = single(sit);
        updateSit(sit);
    } else if (z >= .2 && z < .35){
        alert('You hit a double!');
        if (sit == 2 || sit == 3 || sit == 4 || sit == 7) { runs++; alert('One run scores!')}
        if (sit == 5 || sit == 6) { runs = runs + 2; alert('Two runs score!')}
        sit = double(sit);
        updateSit(sit);
    }  
    else if (z >= .35 && z < .4){
        alert('You hit a triple!');
        if (sit == 1 || sit == 2 || sit == 3) { runs++; alert('One run scores!')}
        if (sit == 4 || sit == 5 || sit == 7) { runs = runs + 2; alert('Two runs score!')}
        if (sit == 6) { runs = runs + 3; alert('Three runs score!')}
        sit = 3;
        updateSit(sit);
    }  
    else if (z >= .4 && z < .5){
        alert('You hit a HOME RUN!');
        if (sit == 0) { runs = runs + 2; alert('One run scores!')}
        if (sit == 1 || sit == 2 || sit == 3) { runs = runs + 2; alert('Two run scores!')}
        if (sit == 4 || sit == 5 || sit == 7) { runs = runs + 3; alert('Three runs score!')}
        if (sit == 6) { runs = runs + 4; alert('Four runs score!')}
        sit = 0;
        updateSit(sit);
    }  
    else if (z >= .5 && z < .7){
        alert('You drew a walk!');
        if (sit == 6) { runs++; alert('One run scores!')}
        sit = walk(sit);
        updateSit(sit);
    }
    else{
        outs++;
        if (outs == 1){ alert('1 out');}
        else if (outs == 2) { alert('2 outs');}
        else { if (runs == 1) {alert("3 outs! Inning over. You scored 1 run. Good game!")}
            else { alert("3 outs! Inning over. You scored " + runs + " runs. Good game!") }
        outs = 0; // reset game here
        sit = 0;
        runs = 0;
        offFirst();
        offSecond();
        offThird();
        }
    }
}
function single(s) {
    if (s==0) { return 1; }
    else if (s==1) { return 4; }
    else if (s==2) { return 1; }
    else if (s==3) { return 1; }
    else if (s==4) { return 4; }
    else if (s==5) { return 1; }
    else if (s==6) { return 4; }
    else if (s==7) { return 4; }
}
function double(s) {
    if (s==0) { return 2; }
    else if (s==1) { return 5; }
    else if (s==2) { return 2; }
    else if (s==3) { return 2; }
    else if (s==4) { return 5; }
    else if (s==5) { return 2; }
    else if (s==6) { return 5; }
    else if (s==7) { return 5; }
}

function walk(s) {
    if (s==0) { return 1; }
    else if (s==1) { return 4; }
    else if (s==2) { return 4; }
    else if (s==3) { return 7; }
    else if (s==4) { return 6; }
    else if (s==5) { return 6; }
    else if (s==6) { return 6; }
    else if (s==7) { return 6; }
}

function updateSit(s){
    if (s==0) {
        offFirst();
        offSecond();
        offThird();
        return;
    } else if (s==1) { onFirst(); offSecond(); offThird(); return; }
   else if (s==2) { offFirst(); onSecond(); offThird(); return; }
   else if (s==3) { offFirst(); offSecond(); onThird(); return; }
   else if (s==4) { onFirst(); onSecond(); offThird(); return; }
   else if (s==5) { offFirst(); onSecond(); onThird(); return ;}
    else if (s==6) { onFirst(); onSecond(); onThird(); }
    else if (s==7) { onFirst(); offSecond(); onThird(); }
}


function onFirst() {
    document.getElementById('first').style.backgroundColor = "black";
    runnerFirst = true;
  }

function offFirst() {
    document.getElementById('first').style.backgroundColor = "white";
    runnerFirst = false;
  }

function onSecond() {
    document.getElementById('second').style.backgroundColor = "black";
    runnerSecond = true;
  }

function offSecond() {
    document.getElementById('second').style.backgroundColor = "white";
    runnerSecond = false;
  }

function onThird() {
    document.getElementById('third').style.backgroundColor = "black";
    runnerThird = true;
  }

function offThird() {
    document.getElementById('third').style.backgroundColor = "white";
    runnerThird = false;
  }