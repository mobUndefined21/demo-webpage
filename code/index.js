const reverseString = async stringToReverse => { 
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const reversed = [];
            stringToReverse.split('').forEach(char => reversed.unshift(char));
            return resolve(reversed.join(''));
        }, 1000);
    });
}
  
console.log('Before the function call');
(async () => {
    console.log(await reverseString('A very important string that needs to be reversed for a very particular reason'))
})();
console.log('After the function call');
  