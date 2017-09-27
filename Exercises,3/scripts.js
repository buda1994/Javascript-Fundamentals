console.log('--------------------');
console.log('1,2');

function AnimalTestUser(username){
  
  var user={};
  user[username]=username;
  
  
  if(arguments.length>1){
    var otherArgs  = [];
    
    for(var i=0;arguments.length>i;i++){
      otherArgs.push(arguments[i]);
    }
    
  }
  
  return user,otherArgs;
  
}

//var testSheep = AnimalTestUser('CottonBall','');
//console.log(testSheep); 

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }

console.log('--------------------');
console.log('3');

function AnimalCreator(username,species,tagline,noises){
  var animal={};
  var friends = [];
  
  animal.username=username;
  animal.species=species;
  animal.tagline=tagline;
  animal.noises=noises;
  animal.friends=friends;
  
  return animal;
  
  
  
}


var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
      // { username: 'Cloud', 
      //  species: 'sheep', 
      //  tagline: 'You can count on me!', 
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
      //  friends: []
      // }

var dog = AnimalCreator('Scrappy-Doo', 'dog', 'Por el poder perruno', ['fdsf', 'iuyiy', 'hgfhfg']);
console.log(dog);

var cat = AnimalCreator('Garfiled', 'cat', 'Lasagna', ['nmbvmnb', 'tret', 'antr']);
console.log(cat);

console.log('--------------------');
console.log('4,5');

function addFriend(ani1,ani2){
  ani1.friends.push(ani2.username);
}

addFriend(sheep, dog);
console.log(sheep);

addFriend(sheep, cat);
console.log(sheep);

addFriend(cat, sheep);
console.log(sheep);

addFriend(dog, cat);
console.log(sheep);

console.log('--------------------');
console.log('6');

var myFarm=[]
myFarm.push(sheep);
myFarm.push(dog);
myFarm.push(cat);

console.log(myFarm);

console.log('--------------------');
console.log('7');

function addMatchesArray(farm){
var matches=[];

  for(var i=0;farm.length>i;i++){
    farm[i].matches=matches;
  }
  
}

addMatchesArray(myFarm); 
console.log(myFarm[0]); // { username: 'Cloud', 
        //  species: 'sheep', 
        //  tagline: 'You can count on me!', 
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
        //  friends: ['Moo', 'Zeny'],
        //  matches: []
        // }




console.log('--------------------');
console.log('8');

function giveMatches(farm){
  
  for(var i=0;farm.length>i;i++){
    farm[i].matches=farm[i].friends[0];
  }
  
}


giveMatches(myFarm); 
console.log(myFarm[0]); 
console.log(myFarm[1]);
console.log(myFarm[2]);