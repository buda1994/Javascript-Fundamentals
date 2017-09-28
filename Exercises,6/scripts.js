


function nonsense(arc){
	function blab(){
		alert(arc);
	}

	//blab();

	//setTimeout(blab, 2000);

	return blab;
}

//nonsense('ggdgdfgf');

var blabLater = nonsense('fgfdvr');
var blabAgainLater = nonsense('gdfgdg');


console.log(blabLater);
console.log(blabAgainLater);



//////////////////////////////////////////////



function firstname(name){
var fname = name;

	function lastname(lname){
		console.log(fname+' '+lname);
	};

	return lastname
};

var namer = firstname('Warchief');
namer('Grommash');
namer('Thrall');



//////////////////////////////////////////////



function storyWriter(){
	var arc='';

	return {
		addWords:function(words){

			arc= arc + words+ ' ' ;
			
			console.log(arc);
			return arc;
		},
		erase:function(){
			return arc='';
		}
	}
}

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''



//////////////////////////////////////////////



var SuperMario = function(){
    var health = 100;
    
    return {
      lifemushroom:function(){
      	health=health+100;
      	console.log('health: '+health);
      },
      deathmushroom:function(){
      	health=0;
      	console.log('health: '+health);
      }
    };
};

var Mario = SuperMario();
Mario.lifemushroom();
Mario.lifemushroom();
Mario.deathmushroom();



//////////////////////////////////////////////

