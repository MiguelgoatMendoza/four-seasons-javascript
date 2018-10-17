// VIVALDI FOUR SEASONS

// Add Event Listeners
document.getElementById("spring").addEventListener("click", setSpring);
document.getElementById("summer").addEventListener("click", setSummer);
document.getElementById("autumn").addEventListener("click", setAutumn);
document.getElementById("winter").addEventListener("click", setWinter);


// Event Functions
function setSpring() {
    // Set content and style
    document.getElementById("season-title").innerHTML = "Spring";
    document.getElementById("season-title").style.color = "#1C9BD2";
    document.getElementById("season-img").src = "images/spring.jpg";
    document.getElementById("season-audio").src = "songs/vivaldi-spring.mp3";
    document.querySelector("audio").load();
    document.querySelector("html").style.backgroundColor = "#1C9BD2";
    document.getElementById("season-title").style.color = "#1C9BD2";

    // Add & Remove Classes
    document.getElementById("spring").classList.add("active");
    document.getElementById("summer").classList.remove("active");
    document.getElementById("autumn").classList.remove("active");
    document.getElementById("winter").classList.remove("active");
}

function setSummer() {
    // Set content and style
    document.getElementById("season-title").innerHTML = "Summer";
    document.getElementById("season-img").src = "images/summer.jpg";
    document.getElementById("season-title").style.color = "#30B157";
    document.getElementById("season-audio").src = "songs/vivaldi-summer.mp3";
    document.querySelector("audio").load();
    document.querySelector("html").style.backgroundColor = "#30B157";

    // Add & Remove Classes
    document.getElementById("spring").classList.remove("active");
    document.getElementById("summer").classList.add("active");
    document.getElementById("autumn").classList.remove("active");
    document.getElementById("winter").classList.remove("active");
}


function setAutumn() {
    // Set content and style
    document.getElementById("season-title").innerHTML = "Autumn";
    document.getElementById("season-img").src = "images/autumn.jpg";
    document.getElementById("season-title").style.color = "#F1B948";
    document.getElementById("season-audio").src = "songs/vivaldi-autumn.mp3";
    document.querySelector("audio").load();
    document.querySelector("html").style.backgroundColor = "#F1B948";

    // Add & Remove Classes
    document.getElementById("spring").classList.remove("active");
    document.getElementById("summer").classList.remove("active");
    document.getElementById("autumn").classList.add("active");
    document.getElementById("winter").classList.remove("active");

}

function setWinter() {
    // Set content and style
    document.getElementById("season-title").innerHTML = "Winter";
    document.getElementById("season-img").src = "images/winter.jpg";
    document.getElementById("season-title").style.color = "#3871C0";
    document.getElementById("season-audio").src = "songs/vivaldi-winter.mp3";
    document.querySelector("audio").load();
    document.querySelector("html").style.backgroundColor = "#3871C0";
    
    // Add & Remove Classes
    document.getElementById("spring").classList.remove("active");
    document.getElementById("summer").classList.remove("active");
    document.getElementById("autumn").classList.remove("active");
    document.getElementById("winter").classList.add("active");
}