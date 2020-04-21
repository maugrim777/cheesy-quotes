let localStorage = window.localStorage

function refresh() {
    // localStorage.clear()
    document.body.style.backgroundImage= localStorage.getItem('bg')
    document.getElementById('overlay').style.backgroundColor=localStorage.getItem('overlay')
    document.getElementById('overlay').style.opacity=localStorage.getItem('transp')
    document.getElementById('quote').style.color=localStorage.getItem('text')



}

function quote(event) {
    document.getElementById('quote').innerHTML=`<em>${event.target.value}</em>`
    
}

function bgImage(ev) {
    let imageURL =  'https://cors-anywhere.herokuapp.com/' + ev.target.value;
    downloadedImg = new Image;
    downloadedImg.crossOrigin = "Anonymous";
    downloadedImg.src = imageURL;
    document.getElementById('bg').setAttribute('src', downloadedImg.src)
    



    localStorage.setItem('bg',`url(${downloadedImg.src})` )

}



function slide() {
    const settings = document.getElementById('settings')
    const hideButton = document.getElementById('hide')
    const buttons = document.getElementById('buttons')
    if (settings.style.visibility==='hidden') {
        settings.style.visibility='visible'

        buttons.style.transform=null
        hideButton.innerHTML='Hide Editor'


    } else {
        settings.style.visibility='hidden'
        buttons.style.transform='translateY(20vh)'
        hideButton.innerHTML='Show Editor'
    }
}

function overlay(ev) {
    document.getElementById('overlay').style.backgroundColor=ev
    localStorage.setItem('overlay',ev )

}


function transp(ev) {
    document.getElementById('overlay').style.opacity=`${ev}%`
    localStorage.setItem('transp',`${ev}%` )

}

function textCol(ev) {
    document.getElementById('quote').style.color=ev;
    localStorage.setItem('text',ev )
}

function screenshot() {
    
    

    html2canvas(document.body, {allowTaint: false, useCORS: true}).then(function(canvas) {


        var img = document.createElement('a');
        img.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      img.download = `file.jpg`;
      img.click();
        

    })
        


}