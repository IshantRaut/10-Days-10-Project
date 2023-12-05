const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

new WordCounter(inputText);

const render = (event) =>{
    statElem.innerHTML = `<p> Youve written <span class="highlight">${event.detail.wordStat.words} words</span> and <span class="highlight">${event.detail.wordStat.characters} characters</span>.</p>`;
}
inputText.addEventListener('count',render);