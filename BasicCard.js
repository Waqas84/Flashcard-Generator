function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	this.printCard = function() {
		console.log("\n***********************\n" + firstPresident.front + "\n" + firstPresident.back + "\n***********************\n"); 
	}
};

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

firstPresident.printCard();


