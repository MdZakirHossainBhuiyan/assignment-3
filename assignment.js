// https://github.com/MdZakirHossainBhuiyan/assignment-3

function kilometerToMeter(inputValue){
    if(inputValue>0){   //check the value positive or not becouse distance can not be negative
        var result = inputValue*1000;
        return result;
    }
}

var meter = kilometerToMeter(12);
console.log(meter);

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop){
    if(numberOfWatch>=0 && numberOfMobile>=0 && numberOfLaptop>=0){  //check the value positive or not becouse number of item can not be negative
        var totalBudget = (50*numberOfWatch)+(100*numberOfMobile)+(500*numberOfLaptop);
        return totalBudget;
    }
}

var totalBudget = budgetCalculator(10, 4, 3);
console.log(totalBudget);

function hotelCost(numberOfDays){
    var cost = 0;
    if(numberOfDays>0){ //check the value positive or not becouse days can not be negative or zero
        if(numberOfDays<=10){
            cost = numberOfDays*100;
        }
        else{
            var remainingDays = numberOfDays - 10;
            cost = 10*100;
            if(remainingDays<=10){
                cost = cost + remainingDays*80;
            }
            else{
                remainingDays = remainingDays - 10;
                cost = cost + 10*80;
                cost = cost + remainingDays*50;
            }
        }
    }

    return cost;
}

var totalCost = hotelCost(21);
console.log(totalCost);

function megaFriend(friends){
    var maxNameLength = 0;
    var maxName = "";
    for(var i=0; i<friends.length; i++){
        var nameLength = friends[i].length;
        if(nameLength > maxNameLength){
            maxNameLength = nameLength;
            maxName = friends[i];
        }
    }
    return maxName;
}

friends = ["sabbir", "anik", "antor", "mehedi"];
var maxName = megaFriend(friends);
console.log(maxName);