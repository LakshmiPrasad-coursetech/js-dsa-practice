let nRolls = 0;
let finished = false;

while (!finished) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    nRolls++;
    if (dice1 == dice2) {
        finished = true;
    }
}
display("It took " + nRolls + " rolls to get doubles.");