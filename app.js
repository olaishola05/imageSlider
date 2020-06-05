img_arr = ["img/city.jpeg", "img/sky.jpeg", "img/road.jpeg", "img/simple.jpeg", "img/dontkno.jpeg", "img/mac.jpeg"];
let num = 0;

//next button
function nextButton() {
    let slider = document.getElementById("slide-image");
    num++;
    if (num >= img_arr.length) {
        num = 0;
    }

    slider.src = img_arr[num];
}

//previous button
function previousButton() {
    let slider = document.getElementById("slide-image");
    num--;
    if (num < 0) {
        num = img_arr.length - 1;
    }

    slider.src = img_arr[num];
}

// display on interval
function displayInterval() {
    let slider = document.getElementById("slide-image");
    num++;

    if (num >= img_arr.length) {
        num = 0;
    }
    slider.src = img_arr[num];
}
setInterval(displayInterval, 6000);

document.getElementById("next").addEventListener("click", nextButton);
document.getElementById("prev").addEventListener("click", previousButton);
