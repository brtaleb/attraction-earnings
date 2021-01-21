/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs: string[] = readline().split(' ');
const L: number = parseInt(inputs[0]);
const C: number = parseInt(inputs[1]);
const N: number = parseInt(inputs[2]);
let P: number[] = [];

for (let i = 0; i < N; i++) {
    const pi: number = parseInt(readline());
    P.push(pi);
}

let groups: number[] = [];
let sequences: string[] = [P.join()];

let group: number | undefined = P.shift();
let offset: number | undefined = undefined;

let res = 0;

while(offset === undefined || offset < 0){
    let peopleSum = 0;

    for(let i=0; i<=P.length; i++){
        if(group && peopleSum + group <= L){
            P.push(group);
            peopleSum += group;
            group = P.shift();

        }
        else break;
    }

    offset = sequences.indexOf(P.join()); // find cycle offset
    sequences.push(P.join()); // save sequence
    groups.push(peopleSum);
}

// profit of the group sequences that happen once
let it = 0;
while(it < offset){
    res+= groups[it];
    it++;
}

// profit of the rest
let rest = (C - offset) % (groups.length - offset);
while(it < groups.length){
    res += groups[it] * (Math.floor((C - offset) / (groups.length - offset)) + (rest > 0 ? 1 : 0));
    rest--;
    it++;
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(res);
