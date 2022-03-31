// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
let counter = 0;
let go=false;



document.querySelector("#metro").checked = true;
const metro = document.querySelector("#metro")
const kick = document.querySelector("#kick")
const snare = document.querySelector("#snare")
const hi = document.querySelector("#hi")
const input_metro = document.getElementById("metro_input" )
const input_kick  = document.getElementById("kick_input")
const input_snare = document.getElementById("snare_input")
const input_hiHat = document.getElementById("hiHat_input")
const button= document.querySelector("#go")

// This function is called every 600ms
function update() {
    if((metro.checked &&  input_metro.value == counter)){
    tick.play();
    console.log('metro');
    }
    else if((kick.checked && input_kick.value == counter )){
    kickDrum.play();
    console.log('kick');
    }
    else if((snare.checked && input_snare.value == counter )){
    snareDrum.play();
    console.log('snare');
    }
    else if((hi.checked) && input_hiHat.value == counter ){    
    hiHat.play();
    console.log('hi')
    }
}   
function tockie() {
    tock.play();
    console.log('tock')
}

// This function sets up update() to be called every 600ms
function setupUpdate() {

        setInterval(update, 600);
        setInterval(tockie, 2400);
        setInterval(displayCount,600);
        displayCount();
    

    
}

// Call setupUpdate() once after 300ms


button.addEventListener('click', function(){
    go=true;
    console.log('go');
    setTimeout(setupUpdate, 300);
})
function displayCount() {
    document.querySelector(".box").innerHTML=counter;
    (counter < 4)?counter++:(counter = 1);
    console.log('count')
}