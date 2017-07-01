function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
};

ClozeCard.prototype.printCloze = function() {


    this.partial = '.......' + this.fullText.split(this.cloze).join("");

    if (this.fullText.indexOf(this.cloze) == -1) {
        console.log(
        	"\n***********************\n" + 
        	"\n" + 
        	"'" + 
        	this.cloze + "'" + " " + "does not appear in" + " " + "'" + this.fullText + "'" + "\n" + "\n***********************\n");
    } else {

        console.log("\n***********************\n" + "\n" + this.partial + "\n" + "\n" + this.cloze + "\n" + "\n***********************\n");
    }
};

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var brokenCloze = new ClozeCard("This doesn't work", "oops");
var currentPresidentCloze = new ClozeCard("Trump is the current president of the United States.", "Trump");

firstPresidentCloze.printCloze();
currentPresidentCloze.printCloze();
brokenCloze.printCloze();


