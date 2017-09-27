
//Use this file to implement Part One of your project



var animal = {};

animal.username = 'far'
console.log(animal.username)

animal['tagline'] = 'rat'
console.log(animal.tagline)

var noises = []

animal['noises'] = noises

console.log(animal)


var count
for (var arc in animal){
  count++
  if (arc == 'username'){
    console.log('Hi my name is ' + animal[arc]); 
  }
  else if (arc == 'tagline'){
    console.log('I like to say ' + animal[arc]);
  }
  
}


/////////////////////////////////////////////////////////////////

var noiseArray = ['arc'];

noiseArray.unshift('tar');
noiseArray.push('mar');

noiseArray[3]='zar';

console.log(noiseArray.length)

console.log(noiseArray);


animal.noises=noiseArray

console.log(animal);

////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);


var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] } 
animals.push(quackers);
console.log(animals);


var cat= { username: 'Dagreguck', tagline: 'Yipgrge!', noises: ['qujhgj', 'trek', 'sn543ze', 'gryutl'] } 
animals.push(cat);

var dog= { username: 'ewtryck', tagline: 'mnbmge!', noises: ['quj65hj5', 'startrek', 'smnvbc', 'grewtlrew'] } 
animals.push(dog);

console.log(animals.length)



////////////////////////////////////////////////////////////////





console.log('-----------------------------------------');

var friends=[];


friends[0]=animals[0].username;
friends[1]=animals[1].username;

console.log(friends);

//////////////////////////////////////////////////////////

var relationships = {};

relationships['friends']=friends;




var matches=[];
relationships['matches']=matches;

relationships.matches.push('dog');


console.log(relationships);


for(var i=0;animals.length>i;i++){
	animals[i].relationships=relationships;
}

console.log(animals);