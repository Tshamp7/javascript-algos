/* 
Instructions
Define a Cat class
The constructor function should take a name and owner and store them in the instance
Write Cat.prototype.cuteStatement method that returns "[owner] loves [name]"
cuteStatement should be defined on the prototype
Prototypes example:
Create several Cat instances, test out their cuteStatement method
Reassign the Cat.prototype.cuteStatement method with a function that returns 
"Everyone loves [name]!"
Invoke the cuteStatement method on your old cats; the new method should be invoked
Add a meow method to the Cat class You can now call meow on your previously 
constructed Cat instances
Take one of your cats and set the meow property on the instance (cat1.meow = function () { ... }. 
Call meow on this Cat instance; call meow on any other cat. 
The other cats should continue to use the prototype method.
*/

class Cat {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
}

Cat.prototype.cuteStatement = function () {
  console.log(`Everyone loves ${this.name}!`);
};

Cat.prototype.meow = function () {
  console.log(`${this.name} goes meooowww! :3 :3 :3`);
};

let kitty1 = new Cat("winston", "churchill");
let kitty2 = new Cat("billy", "churchill");
let kitty3 = new Cat("remmington", "churchill");
let kitty4 = new Cat("abigail", "churchill");

kitty1.meow = function () {
  console.log("meoooowwwwwwwzers!");
};

kitty1.cuteStatement();
kitty2.cuteStatement();
kitty3.cuteStatement();
kitty4.cuteStatement();

kitty1.meow();
kitty2.meow();
kitty3.meow();
kitty4.meow();
