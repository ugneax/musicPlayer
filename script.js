
document.addEventListener('DOMContentLoaded', (event) => {
    const myFirstSong = document.getElementById('myFirstSong')
    const playButton = document.querySelector('.playButton')
    const pauseButton = document.querySelector('.pauseButton')
    const mySecondSong = document.getElementById('mySecondSong')
    const secondPlayButton = document.querySelector('.secondPlayButton')
    const secondPauseButton = document.querySelector('.secondPauseButton')
    const myThirdSong = document.getElementById('myThirdSong')
    const thirdPlayButton = document.querySelector('.thirdPlayButton')
    const thirdPauseButton = document.querySelector('.thirdPauseButton')

    let firstSong = false
    let secondSong = false
    let thirdSong = false

    playButton.onclick = () => {
        if(secondSong || thirdSong ){
            return
        }
        playButton.style.display = "none"
        pauseButton.style.display = "block"
        myFirstSong.play()
        firstSong = true
    }
    pauseButton.onclick = () =>{
        playButton.style.display = "block"
        pauseButton.style.display = "none"
        myFirstSong.pause()
        firstSong = false
    }
    secondPlayButton.onclick = () => {
        if(firstSong || thirdSong ){
            return
        }
        secondPlayButton.style.display = "none"
        secondPauseButton.style.display = "block"
        mySecondSong.play()
        secondSong = true
    }
    secondPauseButton.onclick = () =>{
        secondPlayButton.style.display = "block"
        secondPauseButton.style.display = "none"
        mySecondSong.pause()
        secondSong = false
    }
    thirdPlayButton.onclick = () => {
        if(firstSong || secondSong ){
            return
        }
        thirdPlayButton.style.display = "none"
        thirdPauseButton.style.display = "block"
        myThirdSong.play()
        thirdSong = true
    }
    thirdPauseButton.onclick = () =>{
        thirdPlayButton.style.display = "block"
        thirdPauseButton.style.display = "none"
        myThirdSong.pause()
        thirdSong = false
    }
})



