// The function below uses recursion to find the number of routes that fully complete the grid

function numberOfRoutes(grid,pos,playableCells,steps) {

  let maxSteps = grid[0] * grid[1] - 1;
  let count = 0;
  let maxRoutes = [];

  getRoutes(grid,pos,playableCells,steps);

  return {
    count,
    routes: maxRoutes
  };

function getRoutes(grid,pos,playableCells,steps) {
    if (!playableCells && !steps) {
      playableCells = new Set();
      for (let i = 0; i < grid[0]; i++) {
        for (let j = 0; j < grid[1]; j++) {
          playableCells.add(`${i}x${j}y`);
        }
      };
      playableCells.delete(`${pos[0]}x${pos[1]}y`);
    };

    if (Array.isArray(playableCells)) playableCells = new Set(playableCells);

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


    for (let i = 0; i < options.length; i++) {  
      let cellsArray = Array.from(playableCells);
      let index = cellsArray.indexOf(`${positions[i][0]}x${positions[i][1]}y`);
      cellsArray.splice(index, 1);

      getRoutes(grid, positions[i], cellsArray, [...steps, options[i]])
    };

    if (steps.length === grid[0] * grid[1] - 1) {
      count++;
      maxRoutes.push(steps);
    };

  };
};

  console.log(
numberOfRoutes([3, 3], [2, 2])
);