var d = new Date();
var aarti = true;

if(d.getHours() == 20 && d.getMinutes() == 00) {
    aarti = false;
    aarti();
}

function aarti() {
    var options = {
        type: "basic",
        title: "7:00 PM! Aarti Time!",
        message: "https://www.youtube.com/watch?v=gYL7ccKkNz0&t=11s",
        iconUrl: "icon_128.png"
    };
    chrome.notifications.create(options, blank);
}

var chesta = true;

if(d.getHours() == 22 && d.getMinutes() == 00) {
    chesta = false;
    chesta();
}

function chesta() {
    var options = {
        type: "basic",
        title: "9:00 PM! Cheshta Time!",
        message: "https://www.youtube.com/watch?v=Np8fDQksQCU",
        iconUrl: "icon_128.png"
    };
    chrome.notifications.create(options, blank);
}

document.getElementById("balLink").addEventListener("mouseover", balHover);
document.getElementById("balLink").addEventListener("mouseout", original);
document.getElementById("vichLink").addEventListener("mouseover", vichHover);
document.getElementById("vichLink").addEventListener("mouseout", original);
document.getElementById("instrLink").addEventListener("mouseover", instrHover);
document.getElementById("instrLink").addEventListener("mouseout", original);
document.getElementById("hypeLink").addEventListener("mouseover", hypeHover);
document.getElementById("hypeLink").addEventListener("mouseout", original);
document.getElementById("shantLink").addEventListener("mouseover", shantHover);
document.getElementById("shantLink").addEventListener("mouseout", original);
document.getElementById("everydayLink").addEventListener("mouseover", everydayHover);
document.getElementById("everydayLink").addEventListener("mouseout", original);

function balHover() {
    var numBalPics = 8;
    var rand =Math.floor((Math.random() * 100 % numBalPics) +1);
    document.getElementById("body").style.backgroundImage = "url(background_images/bal" + rand + ".jpg)";
    hide();
    document.getElementById("bal").style.visibility = "visible";
}

function vichHover() {
    var numVicharanPics = 5;
    var rand =Math.floor((Math.random() * 100 % numVicharanPics) +1);
    document.getElementById("body").style.backgroundImage = "url(background_images/vicharan" + rand + ".jpg)";
    hide();
    document.getElementById("vicharan").style.visibility = "visible";
}

function instrHover() {
    var numInstrPics = 4;
    var rand =Math.floor(Math.random() * numInstrPics) +1;
    document.getElementById("body").style.backgroundImage = "url(background_images/instrumental" + rand + ".jpg)";
    hide();
    document.getElementById("instrumental").style.visibility = "visible";
}

function hypeHover() {
    var numHypePics = 8;
    var rand =Math.floor(Math.random() * numHypePics) +1;
    document.getElementById("body").style.backgroundImage = "url(background_images/hype" + rand + ".jpg)";
    hide();
    document.getElementById("hype").style.visibility = "visible";
}

function shantHover() {
    var numShantPics = 5;
    var rand =Math.floor(Math.random() * numShantPics) +1;
    document.getElementById("body").style.backgroundImage = "url(background_images/shant" + rand + ".jpg)";
    hide();
    document.getElementById("shant").style.visibility = "visible";
}

function everydayHover() {
    var numEverydayPics = 2;
    var rand =Math.floor(Math.random() * numEverydayPics) +1;
    document.getElementById("body").style.backgroundImage = "url(background_images/everyday" + rand + ".jpg)";
    hide();
    document.getElementById("everyday").style.visibility = "visible";
    createFirework(16,165,5,3,null,null,null,null,false,true);
}

function hide() {
    document.getElementById("bal").style.visibility = "hidden";
    document.getElementById("vicharan").style.visibility = "hidden";
    document.getElementById("hype").style.visibility = "hidden";
    document.getElementById("instrumental").style.visibility = "hidden";
    document.getElementById("shant").style.visibility = "hidden";
    document.getElementById("everyday").style.visibility = "hidden";
    document.getElementById("contact").style.visibility = "hidden";
}

function original() {
    document.getElementById("body").style.backgroundImage = null;
    document.getElementById("body").style.backgroundColor = "steel blue";

    document.getElementById("bal").style.visibility = "visible";
    document.getElementById("vicharan").style.visibility = "visible";
    document.getElementById("instrumental").style.visibility = "visible";
    document.getElementById("hype").style.visibility = "visible";
    document.getElementById("shant").style.visibility = "visible";
    document.getElementById("everyday").style.visibility = "visible";
    document.getElementById("contact").style.visibility = "visible";
}

document.getElementById("balLink").addEventListener("click", balLink);
document.getElementById("vichLink").addEventListener("click", vichLink);
document.getElementById("instrLink").addEventListener("click", instrLink);
document.getElementById("hypeLink").addEventListener("click", hypeLink);
document.getElementById("shantLink").addEventListener("click", shantLink);
document.getElementById("everydayLink").addEventListener("click", everydayLink);

function balLink() {
    console.log('Bal Bhajan');
    chrome.tabs.create({url:'https://www.youtube.com/watch?v=kI_9cfcKMlI&list=PL3iEypQKDOG30x09YgKRzEs5OKbiJpDWL'}, blank);
}

function vichLink() {
    console.log('Vicharan Bhajan');
    chrome.tabs.create({url:'https://www.youtube.com/watch?v=w5EBZI0oOW8&list=PL3iEypQKDOG0htyG7GAqQu3YG7u65oOjE'}, blank);
}

function instrLink() {
    console.log('Instrumental Bhajan');
    chrome.tabs.create({url:'https://www.youtube.com/watch?v=3psGp5SFd0M&list=PL3iEypQKDOG20LVS1jETBa6XHmhX_GwqF'}, blank);
}

function shantLink() {
    console.log('Shant Bhajan');
    chrome.tabs.create({url:'https://www.youtube.com/watch?v=apAdDRsxHlY&list=PL3iEypQKDOG3_HxqTOwU5nOi2YZbfhTWS'}, blank);
}

function hypeLink() {
    console.log('Hype Bhajan');
    chrome.tabs.create({url:'https://www.youtube.com/watch?v=w6uvWIsyBqg&list=PL3iEypQKDOG1CZuX444OORlE7Ji7vgcIX'}, blank);
}

function everydayLink() {
    console.log('Everyday Bhajan');
    chrome.tabs.create({url:'https://www.youtube.com/watch?v=kOjwvWd2c68&list=PL3iEypQKDOG2-anUoNdrJFSvUuQjNjt-X'}, blank);
}

function blank() {
    console.log("blank");
}
