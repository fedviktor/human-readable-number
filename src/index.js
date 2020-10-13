module.exports = function toReadable (number) {
    let wholeNumberTen=number%10,
        wholeNumberHundred=number%100
        zero=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        // eden=['  ', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ],
        ten=[' ','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        

    if (number<20){
        return zero[number]}
    
    else if (number<91&&number>9&&wholeNumberTen===0) {
        return ten[number/10]
    } 
    else if (number<100&&number>20) {
    return `${ten[Math.floor(number/10)]} ${zero[wholeNumberTen]}`
    } 
    else if (number<991&&number>99&&wholeNumberHundred===0) {
        return zero[number/100]  +' hundred'
    } 
    else if (number<=999&&number>100&&wholeNumberHundred<20) {
        return `${zero[Math.floor(number/100)]} hundred ${zero[wholeNumberHundred]}`
    } 
    else if (number<=999&&number>100&&wholeNumberTen===0) {
        return `${zero[Math.floor(number/100)]} hundred ${ten[(Math.floor(number/10)%10)]}`
    } 
    else if (number<=999&&number>100&&wholeNumberTen!=0) {
        return `${zero[Math.floor(number/100)]} hundred ${ten[(Math.floor(number/10)%10)]} ${zero[wholeNumberTen]}`
    } 
   
}
