function UI(){
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord")

    this.languageList = document.getElementById("language");
}

UI.prototype.changeUI = function(){
 
    //Arayüz değiştirme
    this.outputImage.src = `images/${this.languageList.value}.png`;

    //SelectedIndex LanguageListte hangi dili seçtiysek onun ındexini verir

    // this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;


}

UI.prototype.displayTranslate = function(word){

    this.outputWord.textContent = word;
}