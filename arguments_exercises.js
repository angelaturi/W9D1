function sum() {
    let sum = 0;
    
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

// console.log(sum(1, 2, 3, 4));

function sumRest(...args) {
    let sum = 0;
    args.forEach(arg => {
        sum += arg;
    });
    return sum;
}





// console.log(sumRest(1, 2, 3, 4));


// Function.prototype.myBind = function(context) {
//     const bindArgs = Array.from(arguments).slice(1);
//     // console.log(bindArgs);
//     const that = this;
//     return function() {
//         const callArgs = Array.from(arguments);
//         // console.log(callArgs);
//         return that.apply(context, bindArgs.concat(callArgs));
//     }
// }

// Function.prototype.myBind = function(context, ...callArgs) {
//     // const that = this;
//     return (...bindArgs) => {
//         return this.apply(context, callArgs.concat(bindArgs))
//     }
// }



// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

 function curriedSum(numArgs) {
    const numbers = [];
    function _curriedSum(num) {
        debugger
        numbers.push(num);
        if (numbers.length === numArgs) {
            debugger
            let total = 0;
            numbers.forEach((n) => {
                total += n;
            });
            // console.log(total)
            // let total = numbers.reduce((acc, el) => (acc + el))
            return total;
        }
        else {
            debugger
            return _curriedSum;
        }
    }
    return _curriedSum
 }

 const cSum = curriedSum(4);
 
 cSum(5)(30)(20)(1);

