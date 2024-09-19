const character= {
    name: "Simon",
    getCharacter(){
        console.log("a",this)
        //return this.name;
        
    }
};
const giveMeCharacterNow = character.getCharacter;

giveMeCharacterNow()



console.log("1",    character.getCharacter())