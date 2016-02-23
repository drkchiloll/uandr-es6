// Spread Operator
var cats = ['Tabby', 'Siamese', 'Persian'],
    dogs = ['Golden Retriever', 'Pug', 'Schnauzer'],
    animals = ['Whale', 'Giraffe', cats, 'Snake', dogs, 'Coyote'],
    animalSpread = ['Coyote', 'Whale', ...cats, 'Giraffe', ...dogs, 'Snake'];
console.log(animals); // [Whale, Giraffe, Array[3], Snake, Array[3], Coyote]
console.log(animalSpread); // [All String Literals in Each Array]
