//Modify the following function to return 
//the number of arguments passed to it 
//using the rest parameter syntax 

export default function returnHowManyArguments(...Args) {
    for( Arg of Args) {
        var total = 0
        total += Arg;
    }
    return total;
}
//console.log(returnHowManyArguments(1,2));