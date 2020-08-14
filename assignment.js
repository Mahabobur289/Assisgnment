function feetToMile(feet){
 var mile = feet/5280;
 return mile;
}
var convert = feetToMile(500000);
console.log(convert);
var convert1 = feetToMile(365000);
console.log(convert1);










function tinyFriend(age){
    var allFriend = age[0];
    for (let i = 0; i < age.length; i++) {
        const element = age[i];
        if (element < allFriend) {
            allFriend = element;
            
        }
        
    }
    return allFriend;

}
var result = tinyFriend([24,26,28,29]);
console.log(result)


function woodCalculator 

