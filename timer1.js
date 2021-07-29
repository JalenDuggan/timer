const args = process.argv.slice(2);
const toNumbers = args => args.map(Number);
const alarmTimes = toNumbers(args);
alarmTimes.sort((a, b) => a - b);



const beep = (arr) => {
  if (arr === []) {
    return
  }
  for (const times of arr) {
    if (times >= 0 && times !== NaN) {
      setTimeout(() => {
        process.stdout.write(".");
      }, times * 1000);
      
    }
  }
}

beep(alarmTimes)


