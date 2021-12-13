window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    draw();
  };

  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  const bird = new Image();
  const background = new Image();
  const pipeTop = new Image();
  const pipeBtm = new Image();

  bird.src = './images/flappy.png';
  background.src = './images/bg.png';
  pipeTop.src = './images/obstacle_top.png';
  pipeBtm.src = './images/obstacle_bottom.png';

  pipeTop.height = 380;
  pipeBtm.height = pipeTop.height;
  pipeTop.width = 50;
  pipeBtm.width = pipeTop.width;
  

  // bird
  let faby = {
    x: 50,
    y: 100,
    g: 1.5 
  };

  // pipe gap between top and bottom
  let gap = 100;
  let constant = gap + pipeTop.height;

  // pipe
  let pipe = [];
  pipe[0] = {
    x: canvas.width,
    y: 0,
    w: pipeTop.width,
    h: pipeTop.height
  };


  document.addEventListener('keydown', (event) => {
  if(event.keyCode === 32) {
    faby.y -= 20;
  }
  });


  function draw() {
      // draw background
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);     
      // draw pipes    
      for (let i = 0; i < pipe.length; i++) {
        gap = pipeTop.height + 100;
        ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y, pipe[0].w, pipe[0].h);
        ctx.drawImage(pipeBtm, pipe[i].x, pipe[i].y + constant, pipe[0].w, pipe[0].h);
      // randomly create pipes
        pipe[i].x--;
        if(pipe[i].x == canvas.width - 300) {
            pipe.push({
            x: canvas.width,
            y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height
          });
        }
      }
      // draw bird
      ctx.drawImage(bird, faby.x, faby.y, 35, 30);
      // bird gravity
      faby.y += faby.g;

      // check for collision

      requestAnimationFrame(draw);
  };

  function checkCollision() {

  }

  function score() {
    let score = 0;

  }

  function gameOver() {

  }

};
