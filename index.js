const rulesBtn = document.getElementById('rules-btn');
const rulesSection1 = document.getElementsByClassName('rules-section1');
const mainSecContainer = document.getElementsByClassName('main-section-cont');
const playagainbtn = document.getElementById('playag-btn');
const container = document.getElementsByClassName('container')
// const img1 = document.getElementById('img1');
 onLoad1();
onLoad();
//     window.onunload = function () {
//             window.localStorage.isMySessionActive = "false";
// };

// window.onload = function () {
//             window.localStorage.isMySessionActive = "true";
// };
const imges = document.querySelectorAll('img');
function showRules() {
    rulesSection1[0].innerHTML =`<div class="rules-section">
    <div class="cross-btn">
        <button id="crsbtn" onclick="hiderules()">X</button>
    </div>
    <h2>Game Rules</h2>
    <div class="list-items">
    <ul>
        <li><span>Rock beats scissors, scissors beat paper, and paper beats rock.</span></li>
        <li><span>Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”</span></li>
        <li><span>Use rock, paper, scissors to settle minor decisions or simply play to pass the time</span></li>
        <li><span>If both players lay down the same hand, each player lays down another hand</span></li>
    </ul>
</div>
</div>`
};
function hiderules() {
    rulesSection1[0].innerHTML = "";
};

function selImgFunc(e) {
    let array = [];
    for (let i = 0; i < imges.length; i++) {
        array.push(imges[i]);
    }
    let num = Math.floor(Math.random() * 3);
    //console.log(array[num].getAttribute('src'));
    mainSecContainer[0].innerHTML = `<div class="game-section">
    <div class="img-section-game">
    <div class="bg-container">
    <div class="commn-sec">
    <p>YOU PICKED</p>
        <img id="${e.target.getAttribute('id')}" src="${e.target.getAttribute('src')}" alt="">
        </div>
        </div>
            <div class="win-text">
                <h1 id="h1tag">YOU WIN</h1>
                <p id="para">AGAINST PC</p>
                <button onClick="mainDeshFunc()" id="playag-btn">PLAY AGAIN</button>
            </div>
            <div class="bg4-container">
            <div class="commn-sec">
            <p>PC PICKED</p>
            <img id="${array[num].getAttribute('id')}" src="${array[num].getAttribute('src')}" alt="">
            </div>
            </div>
            </div>
            </div>
            `
    console.log(mainSecContainer[0])
    const h1tag = document.getElementById('h1tag');
    const para = document.getElementById('para');
    const cScore = document.getElementById('cscore');
    const playagainbtn = document.getElementById('playag-btn');
    //console.log(playagainbtn.textContent);
    const bgcontainer = document.getElementsByClassName('bg-container');
    console.log(bgcontainer[0].innerHTML);
    const bg4container = document.getElementsByClassName('bg4-container');
    const btnSection = document.getElementsByClassName('btn-section')
    if (e.target.getAttribute('src') == array[num].getAttribute('src')) {
        h1tag.textContent = "TIE UP"
        bgcontainer[0].innerHTML = `<div class="forBg4">
                        <div class="commn-sec">
                            <p>YOU PICKED</p>
                            <img id="${e.target.getAttribute('id')}" src="${e.target.getAttribute('src')}" alt="">
                        </div>
                    </div>`
        bg4container[0].innerHTML = `<div class="forBg4">
                        <div class="commn-sec">
                            <p>PC PICKED</p>
                            <img id="${array[num].getAttribute('id')}" src="${array[num].getAttribute('src')}" alt="">
                        </div>
                    </div>`
        para.textContent = "";
        playagainbtn.textContent = "REPLAY"
    }
    else if (e.target.getAttribute('src') === 'assets/firstimg.png' && array[num].getAttribute('src') == 'assets/thirdimg.png') {

        h1tag.textContent = "YOU WON";
        btnSection[0].classList.replace('btn-section', 'btn-section1');
        bgcontainer[0].innerHTML = `<div class="forBg">
                        <div class="forBg1">
                            <div class="forBg2">
                                <div class="commn-sec">
                                    <p>YOU PICKED</p>
                                    <img id="${e.target.getAttribute('id')}" src="${e.target.getAttribute('src')}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="next-btn">
            <button onClick="hurrayPage()">NEXT</button>
        </div>`
        bg4container[0].innerHTML = `<div class="forBg4">
                        <div class="commn-sec">
                            <p>PC PICKED</p>
                            <img id="${array[num].getAttribute('id')}" src="${array[num].getAttribute('src')}" alt="">
                        </div>
                    </div>`
        saveItem1();
        onLoad1();
    }
    else if (e.target.getAttribute('src') === 'assets/secondimg.png' && array[num].getAttribute('src') == 'assets/firstimg.png') {

        h1tag.textContent = "YOU WON";
        btnSection[0].classList.replace('btn-section', 'btn-section1');
        bgcontainer[0].innerHTML = `<div class="forBg">
                        <div class="forBg1">
                            <div class="forBg2">
                                <div class="commn-sec">
                                    <p>YOU PICKED</p>
                                    <img id="${e.target.getAttribute('id')}" src="${e.target.getAttribute('src')}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="next-btn">
            <button onClick="hurrayPage()">NEXT</button>
        </div>`
        bg4container[0].innerHTML = `<div class="forBg4">
                        <div class="commn-sec">
                            <p>PC PICKED</p>
                            <img id="${array[num].getAttribute('id')}" src="${array[num].getAttribute('src')}" alt="">
                        </div>
                    </div>`
        saveItem1();
        onLoad1();
    }
    else if (e.target.getAttribute('src') === 'assets/thirdimg.png' && array[num].getAttribute('src') == 'assets/secondimg.png') {

        h1tag.textContent = "YOU WON";
        btnSection[0].classList.replace('btn-section', 'btn-section1');
        bgcontainer[0].innerHTML = `<div class="forBg">
                        <div class="forBg1">
                            <div class="forBg2">
                                <div class="commn-sec">
                                    <p>YOU PICKED</p>
                                    <img id="${e.target.getAttribute('id')}" src="${e.target.getAttribute('src')}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="next-btn">
            <button onClick="hurrayPage()">NEXT</button>
        </div>`
        bg4container[0].innerHTML = `<div class="forBg4">
                        <div class="commn-sec">
                            <p>PC PICKED</p>
                            <img id="${array[num].getAttribute('id')}" src="${array[num].getAttribute('src')}" alt="">
                        </div>
                    </div>`
        saveItem1();
        onLoad1();
    }
    else if (array[num].getAttribute('src') == 'assets/firstimg.png' && e.target.getAttribute('src') == 'assets/thirdimg.png') {
        h1tag.textContent = "YOU LOST";
        bgcontainer[0].innerHTML = `<div class="forBg4">
                        <div class="commn-sec">
                            <p>YOU PICKED</p>
                            <img id="${e.target.getAttribute('id')}" src="${e.target.getAttribute('src')}" alt="">
                        </div>
                    </div>`
        bg4container[0].innerHTML = `<div class="forBg">
                        <div class="forBg1">
                            <div class="forBg2">
                                <div class="commn-sec">
                                    <p>PC PICKED</p>
                                    <img id="${array[num].getAttribute('id')}" src="${array[num].getAttribute('src')}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>`
        saveItem();
        onLoad();
    }
    else if (array[num].getAttribute('src') == 'assets/secondimg.png' && e.target.getAttribute('src') == 'assets/firstimg.png') {
        h1tag.textContent = "YOU LOST";
        bgcontainer[0].innerHTML = `<div class="forBg4">
                        <div class="commn-sec">
                            <p>YOU PICKED</p>
                            <img id="${e.target.getAttribute('id')}" src="${e.target.getAttribute('src')}" alt="">
                        </div>
                    </div>`
        bg4container[0].innerHTML = `<div class="forBg">
                        <div class="forBg1">
                            <div class="forBg2">
                                <div class="commn-sec">
                                    <p>PC PICKED</p>
                                    <img id="${array[num].getAttribute('id')}" src="${array[num].getAttribute('src')}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>`
        saveItem();
        onLoad();
    }
    else if (array[num].getAttribute('src') == 'assets/thirdimg.png' && e.target.getAttribute('src') == 'assets/secondimg.png') {
        h1tag.textContent = "YOU LOST";
        bgcontainer[0].innerHTML = `<div class="forBg4">
                        <div class="commn-sec">
                            <p>YOU PICKED</p>
                            <img id="${e.target.getAttribute('id')}" src="${e.target.getAttribute('src')}" alt="">
                        </div>
                    </div>`
        bg4container[0].innerHTML = `<div class="forBg">
                        <div class="forBg1">
                            <div class="forBg2">
                                <div class="commn-sec">
                                    <p>PC PICKED</p>
                                    <img id="${array[num].getAttribute('id')}" src="${array[num].getAttribute('src')}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>`
        saveItem();
        onLoad();
    }
};
function hurrayPage() {
    container[0].innerHTML = `<div class="hurray-container">
        <div class="texts-container">
            <div class="trophy-img">
                <img id="star-img8" src="Star 1.png" alt="">
                <img id="star-img7" src="Star 1.png" alt="">
                <img id="star-img6" src="Star 1.png" alt="">
                <img id="star-img5" src="Star 1.png" alt="">
                <img id="star-img4" src="Star 1.png" alt="">
                <img id="star-img3" src="Star 1.png" alt="">
                <img id="star-img1" src="Star 1.png" alt="">
                <img src="Vector.png" alt="">
                <img id="star-img" src="Star 1.png" alt="">
                <audio src="TunePocket-Hurray-Group-Cheer-Preview.mp3" autoplay></audio>
            </div>
            <div class="hurray-text">
                <h1>HURRAY!!</h1>
            </div>
            <div class="hurray-text1">
                <h2>YOU WON THE GAME</h2>
            </div>
            <div class="ply-agn-btn">
                <button onClick="mainDeshFunc()" id="playag-btn1" id="playag-btn">PLAY AGAIN</button>
            </div>
        </div>
     </div>
             <div class="rules-section1">
        </div>
        <div class="btn-section">
            <button onClick = "showRules()" id="rules-btn">RULES</button>
        </div>
`
}
// location.reload=function(){
//     mainSecContainer[0].innerHTML=`<div class="main-section">
//                 <div class="img-section">
//                     <img id="img1" src="assets/secondimg.png" alt="">
//                     <img id="img2" src="assets/firstimg.png" alt="">
//                     <div class="img-section2">
//                         <img id="img3" src="assets/thirdimg.png" alt="">
//                     </div>
//                 </div>
//             </div>`
// }
function mainDeshFunc() {
    location.reload();
};


// function saveItem() {
//     const cScore = document.getElementById('cscore');
//     localStorage.setItem('value', cScore.textContent);
//     let value = (parseInt(localStorage.getItem("value")));
//     localStorage.setItem('value', value + 1);
// };
function saveItem() {
    const cScore = document.getElementById('cscore');
    sessionStorage.setItem('value', cScore.textContent);
    let value = (parseInt(sessionStorage.getItem("value")));
    sessionStorage.setItem('value', value + 1);
};
// function saveItem1() {
//     const yOcore = document.getElementById('yocore');
//     localStorage.setItem('values', yOcore.textContent);
//     let values = (parseInt(localStorage.getItem("values")));
//     localStorage.setItem('values', values + 1);
// };
function saveItem1() {
    const yOcore = document.getElementById('yocore');
    sessionStorage.setItem('values', yOcore.textContent);
    let values = (parseInt(sessionStorage.getItem("values")));
    sessionStorage.setItem('values', values + 1);
};

function onLoad() {
    const cScore = document.getElementById('cscore');
    let newV = sessionStorage.getItem('value');
    if (newV == null) {
        sessionStorage.setItem('value', cScore.textContent);
    }
    else {
        cScore.textContent = newV;
    }
};
function onLoad1() {
    const yOcore = document.getElementById('yocore');
    let newV = sessionStorage.getItem('values');
    if (newV == null) {
        localStorage.setItem('values', yOcore.textContent);
    }
    else {
        yOcore.textContent = newV;
    }
};
rulesBtn.addEventListener('click', showRules);
for (let i = 0; i < imges.length; i++) {
    imges[i].addEventListener('click', selImgFunc)
};