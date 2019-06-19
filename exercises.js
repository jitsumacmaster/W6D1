function sum(...nums) {
    let sum = 0;
    nums.forEach((num) => {sum+=num})
    return sum;
}

// console.log(sum(1, 2, 3, 4)) //=== 10
// console.log(sum(1, 2, 3, 4, 5)) //=== 15

class Cat {
    constructor(name) {
        this.name = name;
    }
    
    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

Function.prototype.myBind = function(context, ...bindArgs){
    const that = this;
    return function(...callArgs) {
        return that.apply(context, bindArgs.concat(callArgs));
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true

function curriedSum(numArgs) {
    let args = [];
    return function _curriedSum(el) {
        args.push(el);
        if (args.length < numArgs) {
            return _curriedSum;
        } else {
            sum = 0
            return args.reduce((sum, el) => sum += el)
        }
    }
}
// curry = curriedSum(3)
// console.log(curry)
// curry = curry(1)
// curry = curry(2)
// console.log(curry)
// curry = curry(3)
// console.log(curry)

Function.prototype.curry = function(numArgs) {
    let args = [];
    let func = this;
    return function _curry(el) {
        args.push(el);
        if (args.length < numArgs) {
            return _curry;
        } else {
            return func(...args)
        }
    }
}

// curry = sum.curry(3)
// console.log(curry)
// curry = curry(1)
// curry = curry(2)
// console.log(curry)
// curry = curry(3)
// console.log(curry)

Function.prototype.applyCurry = function(numArgs) {
    let args = [];
    let func = this;
    return function _curry(el) {
        args.push(el);
        if (args.length < numArgs) {
            return _curry;
        } else {
            return func.apply(this, args)
        }
    }
}

// curry = sum.applyCurry(3)
// console.log(curry)
// curry = curry(1)
// curry = curry(2)
// console.log(curry)
// curry = curry(3)
// console.log(curry)
