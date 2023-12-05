class WordCounter{
    constructor(inputText){
        this.inputText=inputText;
        this.inputText.addEventListener('input', () => {
            this.count();
        });
    }
    count(){
        let wordStat = this.getWordStat(this.inputText.value.trim());
        // console.log(wordStat);
        this.emitEvent(wordStat);
        console.log(wordStat);
    }
    emitEvent(wordStat){
        let countEvent = new CustomEvent('count', {
            bubbles: true,
            cancelable: true,
            detail: {
                wordStat
            }
        });
        this.inputText.dispatchEvent(countEvent);
        console.log(countEvent);
    }

    getWordStat(str){
        let matches = str.match(/\S+/g);
        console.log(matches);
        return{
            characters: str.length,
            words: matches ? matches.length : 0,
        };
        
    }
}