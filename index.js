function getRoutes(grid,pos,playableCells,steps) {
    if (!playableCells) {
      playableCells = new Set();
      for (let i = 0; i < grid[0]; i++) {
        for (let j = 0; j < grid[1]; j++) {
          playableCells.add(`${i}x${j}y`);
        }
      }

    };

    playableCells.delete(`${pos[0]}x${pos[1]}y`);
    
    console.log(playableCells);

    const options = [];
    const positions = [];
    steps = steps || [];   
    
    if (playableCells.has(`${pos[0] + 1}x${pos[1]}y`)) {
      options.push("RIGHT");
      positions.push([pos[0] + 1, pos[1]]);
    };
    if (playableCells.has(`${pos[0] - 1}x${pos[1]}y`)) {
        options.push("LEFT");
        positions.push([pos[0] - 1, pos[1]]);
      };
    if (playableCells.has(`${pos[0]}x${pos[1] + 1}y`)) {
      options.push("DOWN");
      positions.push([pos[0], pos[1] + 1]);
    };
    if (playableCells.has(`${pos[0]}x${pos[1] - 1}y`)) {
        options.push("UP");
        positions.push([pos[0], pos[1] - 1]);
      };

    // if (options.length === 0) return null;

    console.log(steps)

    options.forEach((el, i) => {
      
      // console.log(el);
      // console.log(positions[i]);
      console.log(playableCells);
      // console.log([...steps, el]);

      getRoutes(grid, positions[i], playableCells, [...steps, el])
    })
  };

getRoutes([3, 3], [2, 2]);  
  
// currently, the problem is with the playable cells method, which seems to be persisting through multiple recursion calls 