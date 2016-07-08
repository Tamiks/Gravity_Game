var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext("2d"),
    player = {x: 290, y: 290},
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60},
    input = -1,
    counter = 0,
    f = 0,
    pause = false,
    pressFrame = -1,
    playchar = new Image(),
    object = new Image(),
    zero = new Image(),
    one = new Image(),
    two = new Image(),
    three = new Image(),
    four = new Image(),
    five = new Image(),
    six = new Image(),
    seven = new Image(),
    eight = new Image(),
    nine = new Image(),
    background = new Image();

    playchar.src = "player.png";
    object.src = "object.png";
    background.src = "background.png";
    zero.src = "0.png";
    one.src = "1.png";
    two.src = "2.png";
    three.src = "3.png";
    four.src = "4.png";
    five.src = "5.png";
    six.src = "6.png";
    seven.src = "7.png";
    eight.src = "8.png";
    nine.src = "9.png";

document.addEventListener("keypress", function(event){
  if(event.keyCode == 112){
    pause = !pause;
  }
  else{
    input = event.keyCode;
    pressFrame = f;
  }
});

function length(num){
	var value = 0;
	for(i = 0; i !== undefined; i ++){
		if(num >= Math.pow(10, i)){
			value ++;
		}
		else{
			break;
		}
	}
	return value;
}

function printScreen(){
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(background, 0, 0);
  for(i = 0; i <= String(counter).length - 1; i ++){
    if(Number(String(counter).charAt(i)) == 0){
      ctx.drawImage(zero, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) === 1){
      ctx.drawImage(one, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) == 2){
      ctx.drawImage(two, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) == 3){
      ctx.drawImage(three, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) == 4){
      ctx.drawImage(four, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) == 5){
      ctx.drawImage(five, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) == 6){
      ctx.drawImage(six, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) == 7){
      ctx.drawImage(seven, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) == 8){
      ctx.drawImage(eight, 20 * i, 0);
    }
    else if(Number(String(counter).charAt(i)) == 9){
      ctx.drawImage(nine, 20 * i, 0);
    }
  }
  ctx.drawImage(object, objective.x, objective.y);
  ctx.drawImage(playchar, player.x, player.y);
}

function interpretInput(){
  if(pressFrame !== -1){
    if(input == 119){ //w
      player.y -= Math.round((f - pressFrame)/5);
    }
    else if(input == 115){ //s
      player.y += Math.round((f - pressFrame)/5);
    }
    else if(input == 100){ //d
      player.x += Math.round((f - pressFrame)/5);
    }
    else if(input == 97){ //a
      player.x -= Math.round((f - pressFrame)/5);
    }
  }
}

function objectiveCheck(){
  if(player.x > objective.x && player.x < objective.x + 16 && player.y > objective.y && player.y < objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
  if(player.x + 10 > objective.x && player.x + 10 < objective.x + 16 && player.y > objective.y && player.y < objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
  if(player.x + 20 > objective.x && player.x + 20 < objective.x + 16 && player.y > objective.y && player.y < objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
  if(player.x > objective.x && player.x < objective.x + 16 && player.y + 10 > objective.y && player.y + 10 < objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
  if(player.x > objective.x && player.x < objective.x + 16 && player.y + 20 > objective.y && player.y + 20 < objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
  if(player.x + 10 > objective.x && player.x + 10 < objective.x + 16 && player.y + 10 > objective.y && player.y + 10 < objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
  if(player.x + 10 > objective.x && player.x + 10 < objective.x + 16 && player.y + 20 > objective.y && player.y + 20 < objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
  if(player.x + 20 > objective.x && player.x + 20 < objective.x + 16 && player.y + 10 > objective.y && player.y + 10< objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
  if(player.x + 20 > objective.x && player.x + 20 < objective.x + 16 && player.y + 20 > objective.y && player.y + 20< objective.y + 16){
    counter ++;
    objective = {x: Math.random() * 500 + 60, y: Math.random() * 500 + 60};
  }
}

setInterval(function(){
  if(pause == false){
    objectiveCheck();
    printScreen();
    interpretInput();
    f ++;
  }
}, 16.6666667);
