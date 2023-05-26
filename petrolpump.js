
let usingPetrol = true;
const petrolPrice = 1.45;
const dieselPrice = 1.67;;
let interval;

function dismountPetrolPump(){
	usingPetrol = true;
	
	document.getElementById("startPump").disabled = false;
	document.getElementById("holdPetrol").disabled = true;
	document.getElementById("holdDiesel").disabled = true;
}

function dismountDieselPump(){
	usingPetrol = false;	
	
	document.getElementById("startPump").disabled = false;
	document.getElementById("holdPetrol").disabled = true;
	document.getElementById("holdDiesel").disabled = true;
}

function startPump() {
	document.getElementById("startPump").disabled = true;
	document.getElementById("stopPump").disabled = false;
	document.getElementById("pay").disabled = true;
	
	interval = setInterval(increment, 200);
}

function increment(){
	
	let counter = parseFloat(document.getElementById("petrolCounter").value);		
	counter = counter + 0.210		
	document.getElementById("petrolCounter").value =  counter;	
		
		
	if(usingPetrol === true){
		document.getElementById("petrolCostCounter").value = counter * petrolPrice;
	}
	else {	
		document.getElementById("petrolCostCounter").value = counter * dieselPrice;
	}
	
}

function stopPump() {
	document.getElementById("startPump").disabled = false;
	document.getElementById("stopPump").disabled = true;
	document.getElementById("pay").disabled = false;
	
	clearInterval(interval);
}

function putDownAndPay(){
	var newRow = document.getElementById("paymentTable").insertRow(1);
	
	var paymentTimeCell = newRow.insertCell(0);
	var fuelTypeCell = newRow.insertCell(1);
	var litresCell = newRow.insertCell(2);
	var fuelCostCell = newRow.insertCell(3);
	var priceCell = newRow.insertCell(4);
	
	let paymentDate = new Date();
	
	paymentTimeCell.innerHTML = paymentDate.toDateString() + " " + paymentDate.toLocaleTimeString();
	
	if(usingPetrol === true){
		fuelTypeCell.innerHTML = "Petrol";
		fuelCostCell.innerHTML = petrolPrice
	}
	else {
		fuelTypeCell.innerHTML = "Diesel";
		fuelCostCell.innerHTML = dieselPrice;
	}
	
	litresCell.innerHTML = document.getElementById("petrolCounter").value;
	priceCell.innerHTML = document.getElementById("petrolCostCounter").value;
	
	resetButtons();
	resetCounters();
}

function resetButtons() {	
	document.getElementById("holdPetrol").disabled = false;
	document.getElementById("holdDiesel").disabled = false;
	
	document.getElementById("startPump").disabled = true;
	document.getElementById("stopPump").disabled = true;
	document.getElementById("pay").disabled = true;
}

function resetCounters() {
	document.getElementById("petrolCounter").value = 0.00
	document.getElementById("petrolCostCounter").value = 0.00
}