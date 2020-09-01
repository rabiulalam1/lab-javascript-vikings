// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health -= damage;
  };
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;

    return `${this.name} has died in act of combat`;
  };
  battleCry = () => {
    return "Odin Owns You All!";
  };
}
// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;

    return "A Saxon has died in combat";
  };
}
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = (viking) => {
    this.vikingArmy.push(viking);
  };
  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon);
  };

  vikingAttack = () => {
    let viking = this.vikingArmy[this.random(this.vikingArmy.length)];
    let saxon = this.saxonArmy[this.random(this.saxonArmy.length)];
    let result = saxon.receiveDamage(viking.attack());
    if (saxon.health <= 0)
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
    return result;
  };
  saxonAttack = () => {
    let viking = this.vikingArmy[this.random(this.vikingArmy.length)];
    let saxon = this.saxonArmy[this.random(this.saxonArmy.length)];
    let result = viking.receiveDamage(saxon.attack());
    if (viking.health <= 0)
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
    return result;
  };

  random = (armyLength) => Math.floor(Math.random() * armyLength);

  showStatus = () => {
    if (this.saxonArmy.length == 0)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length == 0)
      return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  };
}
