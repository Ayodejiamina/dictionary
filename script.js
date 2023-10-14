 let input = document.getElementById('input')
let enter = document.getElementById('enter')
let audio = document.getElementById('audio')
let trans = document.getElementById('trans')
let meaning =document.getElementById('meaning')
const all = document.querySelector('#all')
let show = document.getElementById('show')
let ori = document.getElementById('ori')
let exams = document.getElementById('example')

// enter.addEventListener('click', (e) =>{
//  e.preventDefault();
// alert('working nice');
function empty_example(empty){
 if(empty == undefined){
    empty = ""
 }else{
empty = "Example:" + empty
 }  
 
}
function clickme() {
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+input.value)
.then(res => res.json())
.then(data =>{
let results = "";

for (let i = 0; i < data[0].meanings.length; i++) {
   let exam = data[0].meanings[i].definitions[0].example
if(exam == undefined){
   results += ` <div>
    <h3>${data[0].word}</h3>
    <b id="audio"><i class="fas fa-speaker"></i>
    <audio controls autoplay><source src = "${data[0].phonetics[0].audio}"></audio></b>
    <p><b> Pronunciation:</b> <span id="trans">${data[0].phonetics[1].text}</span></p>
    <p  id="meaning"><b> Part of Speech:</b>  <span>${data[0].meanings[i].partOfSpeech}</span></p>
                          <p><b>Meaning:</b>  <span> ${data[0].meanings[i].definitions[0].definition}</span></p>
                                 

</div>`
}else{
   results += ` <div>
   <h3>${data[0].word}</h3>
   <b id="audio"><i class="fas fa-speaker"></i>
   <audio controls autoplay><source src = "${data[0].phonetics[0].audio}"></audio></b>
   <p><b> Pronunciation:</b> <span id="trans">${data[0].phonetics[1].text}</span></p>
   <p  id="meaning"><b> Part of Speech:</b>  <span>${data[0].meanings[i].partOfSpeech}</span></p>
                         <p><b>Meaning:</b>  <span> ${data[0].meanings[i].definitions[0].definition}</span></p>
                                <p><b>Example:</b> <span id="example">${exam}</span></p>
                                

</div>`
}

}
show.innerHTML = results;
console.log(data)
})



}

// })