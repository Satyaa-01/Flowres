
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.body.addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.play().catch(function(error) {
    console.log('Audio playback failed:', error);
   });
       
});