/* Prototype Refactor
1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

//GAMEOBJECT CLASS (PARENT)\\
class GameObject {
    constructor(attributes){
        this.createdAt = attributes.createdAt,
        this.name = attributes.name,
        this.dimensions = attributes.dimensions 
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}
//OLD CONSTRUCTOR\\
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt,
//     this.name = attributes.name,
//     this.dimensions = attributes.dimensions
// }
//OLD PROTOTYPE METHOD\\ 
// GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
// };

/*****BREAK*****/

//CHARACTERSTATS CLASS (CHILD)\\
class CharacterStats extends GameObject {
    constructor(characterAttrs){
        super(characterAttrs)
        this.healthPoints = characterAttrs.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}

//OLD CONSTRUCTOR\\
// function CharacterStats(characterAttrs) {
//     GameObject.call(this, characterAttrs);
//     this.healthPoints = characterAttrs.healthPoints
// }
//OLD PROTOTYPE METHOD\\
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
// }

/*****BREAK*****/

//HUMANOID CLASS (GRANDCHILD)\\
class Humanoid extends CharacterStats {
    constructor(humanoidAttrs){
        super(humanoidAttrs)
        this.team = humanoidAttrs.team,
        this.weapons = humanoidAttrs.weapons,
        this.language = humanoidAttrs.language
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
//OLD CONSTRUCTOR\\
// function Humanoid(humanoidAttrs) {
//     CharacterStats.call(this, humanoidAttrs);
//     this.team = humanoidAttrs.team,
//     this.weapons = humanoidAttrs.weapons,
//     this.language = humanoidAttrs.language
// }
//OLD PROTOTYPE METHOD\\
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
// }

/*****BREAK*****/

//CHARACTER OBJECTS\\ 
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
  
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});
  
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});
 
//CONSOLE LOG OUTPUTS\\
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.