function sandwichcalculator(slicesOfBread, slicesOfCheese){
    var sandwiches = slicesOfBread / 2;

if((slicesOfBread > 1) && (slicesOfCheese > 0) && (
    slicesOfCheese < sandwiches)) {
        sandwiches = slicesOfCheese;
        console.log(sandwiches)
        return sandwiches;
    } 
}
sandwichcalculator(10,2)