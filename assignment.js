// https://github.com/AvishekMajumder/js-assignment

// Assignment-1.kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000; //We know 1km = 1000m;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result);


// Assignment-2.budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    var totalWatch = watch * 2;
    var totalMobile = mobile * 2;
    var totalLaptop = laptop * 2;

    var totalBudget = totalWatch + totalMobile + totalLaptop;

    return totalBudget;
}
var result = budgetCalculator(50, 100, 500);
console.log(result);


// Assignment-3.hotelCost
function hotelCost(stayingDays) {
    if(stayingDays < 0){
        return 0; //Number of days cannot be zero or negetive//
    }
    else if(stayingDays < 11) {
        return stayingDays * 100;
    }
    else if(stayingDays < 18) {
        afterTenDays = stayingDays - 10;
        return (1000 + (afterTenDays * 80));
    }
    else{
        afterSeventeenDays = stayingDays - 17;
        return (1560 + (afterSeventeenDays * 50));
    }
} 
console.log(hotelCost(20));


// Assignment-4.megaFriend
function megaFriend(name) {
    var largestName = name[0];
    for(var i = 0; i<name.length; i++){
        var element = name [i];
        if(element.length > largestName.length){
            largestName = element;
        }
    }
    return largestName;       
}
var friendsName = ["Avishek Majumder","Pranta Paul","Miraz Rahman","Tonmoy Barua","Sharika Alam"];
var largestName = megaFriend(friendsName);
console.log(largestName);

//Ending of the code