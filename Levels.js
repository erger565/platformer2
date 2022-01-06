//Levels

// dimensions
boxes.push({x: 0,y: 0,width: 1,height: height});//left bound
boxes.push({x: 0,y: height - 1,width: width,height: 50});//Middle bound
boxes.push({x: width - 1,y: 0,width: 50,height: height});//Right bound
boxes.push({x: 0,y: 0,width: width,height: 1});//Bound up





var PlatformMaxCount = 200;

for (var i = 0; i < PlatformMaxCount; i++) { 
    boxes.push({
    x: Math.floor((Math.random() * width) + 1),
    y: Math.floor((Math.random() * height) + 1),
    width: Math.floor((Math.random() * 10) + 6),
    height: Math.floor((Math.random() * 10) + 6)
	});
}



