let input = document.getElementById('input')
let enter = document.getElementById('enter')
let audio = document.getElementById('audio')
let trans = document.getElementById('trans')
let meaning =document.getElementById('meaning')
const all = document.querySelector('#all')
let show = document.getElementById('show')
let ori = document.getElementById('ori')

// 
//  e.preventDefault();
// alert('working nice');
function clickme() {
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+input.value)
.then(res => res.json())
.then(data =>{
let results = "";
for (let i = 0; i < data[0].meanings.length; i++) {
    results += `<div class="container">
    <b class="container" id="audio"><i class="fas fa-speaker"></i>
    <audio controls autoplay><source src = "${data[0].phonetics[0].audio}"></audio></b>
    <h2>Pronunciation:<span id="trans">${data[0].phonetic}</span></h2><hr>
    <h2 class="container" id="meaning">Part of Speech:<span>${data[0].meanings[i].partOfSpeech}</span></h2>
                          <h3>Meaning:<span> ${data[0].meanings[i].definitions[0].definition}</span></h3>
                                 <h2> Example:<span id="example"> ${data[0].meanings[i].definitions[0].example}</span></h2>

</div>`
}
show.innerHTML = results;
if(document.getElementById("example").innerHTML == undefined){
    document.getElementById("example").style.display="none"
}else{
    
}
if(document.getElementById('trans').innerHTML == undefined){
    document.getElementById('trans').style.display ="none"
}
})



}
// })