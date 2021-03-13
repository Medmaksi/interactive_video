const boxToShow = document.createElement('div');
boxToShow.style.width = '50px';
boxToShow.style.height= '150px';
boxToShow.style.backgroundColor= 'blue';
boxToShow.className= 'boxToShow';

const textToAdd = document.createElement('p');
textToAdd.innerText = 'Hello! Now you see me!';

const closeButton = document.createElement('div');
closeButton.className='closeButton';
closeButton.style.width= '25px';
closeButton.style.height = '35px';
closeButton.style.background= 'url("close.png")';
closeButton.style.backgroundSize= 'cover';

const video = document.getElementById('video');

closeButton.addEventListener('click', function(){
    document.getElementsByClassName('boxToShow')[0].style.display= 'none';
    video.play();
});


boxToShow.appendChild(textToAdd);
boxToShow.appendChild(closeButton);
document.getElementsByClassName('container')[0].appendChild(boxToShow);

function showBox () {
    document.getElementsByClassName('boxToShow')[0].style.display = 'block';
    video.pause();
}

video.addEventListener('timeupdate', function() {
    if(this.currentTime >= 3 && this.currentTime<8) {
        document.getElementsByClassName('showBox')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('showBox')[0].style.display = 'none';
    }

});
