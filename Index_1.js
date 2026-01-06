function page()
{
var checkbox = document.getElementById('agreeCheck');
var playBtn = document.getElementById('playBtn');

// Enable the Play button when checkbox is checked
checkbox.addEventListener('change', function () 
 {                                              
  playBtn.disabled = !this.checked; 
});
}

function startGame() 
{
  window.location.href = "Index_2.html"; 
}

function quitGame()
{
  alert("Thank you for visiting!");
  window.close(); 
}













































//addEventListener का काम है किसी HTML element पर नज़र रखना और जैसे ही कोई action (event) होता है, तुरंत एक function चला देना।