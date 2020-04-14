function quote(event) {
    console.log(event.target.value)
    document.getElementById('quote').innerHTML=`<em>${event.target.value}</em>`
}

function bgImage(ev) {
    document.body.style.backgroundImage=`url(${ev.target.value})`
    
}


function overlay(ev) {
    console.log(ev)
    document.getElementById('overlay').style.backgroundColor=ev
}


function transp(ev) {
    console.log(ev)
    document.getElementById('overlay').style.opacity=`${ev}%`
}

function textCol(ev) {
    document.getElementById('quote').style.color=ev;
}