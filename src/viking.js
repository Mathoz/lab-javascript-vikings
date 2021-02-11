// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage
        if (this.health>0){return `${this.name} has received ${damage} points of damage`}
        else {return `${this.name} has died in act of combat`}
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage
        if (this.health>0){return `A Saxon has received ${damage} points of damage`}
        else {return `A Saxon has died in combat`}
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
       this.vikingArmy.push(Viking) 
    }


    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        // if (this.saxonArmy.length<1 || array === undefined) throw new Error("Add some Saxon for the battle !!");
        // let poorSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        // this.vikingArmy.forEach(brutalViking => poorSaxon.receiveDamage(brutalViking.strength))
        
        let saxonWarrior = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingWarrior = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let damage = saxonWarrior.receiveDamage(vikingWarrior.strength);
        if (saxonWarrior.health <= 0) {this.saxonArmy.splice(saxonWarrior)};
        return damage
    }

    saxonAttack(){
        let saxonWarrior = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingWarrior = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let damage = vikingWarrior.receiveDamage(saxonWarrior.strength);
        if (vikingWarrior.health <= 0) {this.vikingArmy.splice(vikingWarrior)};
        return damage
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else {return "Vikings and Saxons are still in the thick of battle."}
    }
}
