// code solution here

class President {
	constructor(name, politicalParty, yearsInOffice, homeState) {
		this.name = name;
		this.politicalParty = politicalParty;
		this.yearsInOffice = yearsInOffice;
		this.homeState = homeState;
	}

	veto() {
		return 'NO!'
	}
	passBill(){
		return `You can do that!`
	}
	doCharity(){
		return `I like to help people.`
	}
	conductPressInterview(){
		return `I am proud to be an American.`

	}
	sayHi(){
		return `Hi, my name is ${name}. I am from ${homeState}. I represent the ${politicalParty}s, and was in office ${yearsInOffice}.`
	}

}


var gw = new President('George Washington', 'democrat', '8', 'VA')

var lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "7", "Texas")


// Then create the following presidents: George Washington, Abraham Lincoln, Richard Nixon, and Jimmy Carter.