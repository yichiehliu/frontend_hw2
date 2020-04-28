
var lockpage = document.querySelector(".lock-page")
var homebutton = document.querySelector(".homebutton")

// var renderTime = 

function showHomePage() {
    lockpage.style.visibility = "hidden";
}

function showLockPage() {
    lockpage.style.visibility = "visible";
}

var time = document.querySelector('.renderTime')
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    // 顯示變數一定要用innerHTML?
    document.querySelector('.renderTime').innerText = h + ":" + m;

}
// time.addEventListener(, function () {

// })
var myVar = setInterval(function () { startTime() }, 1000);
console.log(myVar)

function startDate() {
    var today = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var y = today.getFullYear();
    var m = months[today.getMonth()];
    var date = today.getDate()
    var d = days[today.getDay()];

    // 顯示變數一定要用innerHTML?
    document.querySelector('.renderDate').innerText = d + ", " + m + " " + date;

}
var myDate = setInterval(function () { startDate() }, 1000);
console.log(myDate)

// var foldericon = document.querySelector(".folder-icon")
// foldericon.addEventListener("click", function (event) {

// })

// console.log(foldericon)



homebutton.addEventListener("onclick", function showHomePage() {
    // document.getElementsByClassName(".content").style.visibility = "visible";
})

console.log(homebutton)

lockpage.addEventListener("onclick", function showHomePage() {
    // document.getElementsByClassName(".content").style.visibility = "visible";
})

console.log(lockpage)