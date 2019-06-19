

Function.prototype.inherits = function(ParentClass) {
    let Surrogate = function(){};
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate;
    this.prototype.constructor = this;
}

// `Function.prototype.inherits` using `Object.create`

Function.prototype.inheritsCreates = function (ParentClass) {
    this.prototype = Object.create(ParentClass.prototype);
    this.prototype.constructor = this;
  };

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

s = new Ship;
a = new Asteroid;
console.log(s)
console.log(s.__proto__)
console.log(a.__proto__)

