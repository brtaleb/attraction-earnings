/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs: string[] = readline().split(' ');
const L: number = parseInt(inputs[0]);
const C: number = parseInt(inputs[1]);
const N: number = parseInt(inputs[2]);
let queue: number[] = [];

for (let i = 0; i < N; i++) {
    const pi: number = parseInt(readline());
    queue.push(pi);
}

let res = 0;
let runs = C;

while(runs > 0){
    let people: number[] = [];
    let peopleSum = 0;
    let tmp: number[] = []

    while(peopleSum < L){
        let group = queue[0];


        if(group+peopleSum <= L) {
            queue.shift();
            people.push(group);
            peopleSum += group;
            tmp.push(group);
        }
        else break;
    }

    res += people.reduce((total: number, curr: number) => total+=curr, 0)
    queue = queue.concat(tmp);
    runs--;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(res);
