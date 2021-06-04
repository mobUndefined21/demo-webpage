class StringReverser {
  constructor(stringToReverse) {
    this.stringToReverse = stringToReverse;
  }
  then(resolve,reject) {
    if (typeof this.stringToReverse !== 'string') {
      return reject('This function is designed to only allow strings, please supply a string');
    }
    const reversed = [];
    this.stringToReverse.split('').forEach(char => reversed.unshift(char));
    return resolve(reversed.join(''));
  }
}

(async () => console.log(await new StringReverser('Another very important string that needs to be reversed for a very particular reason')))();
