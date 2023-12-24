let countDown = new Date("Dec 25, 2023 00:00:00").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDown - now;
  
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.querySelector(".hours-minutes-and-seconds").innerHTML = hours + "h: "
    + minutes + "m: " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
        window.location.replace("https://youtu.be/dQw4w9WgXcQ?feature=shared");
    }
  }, 1000);