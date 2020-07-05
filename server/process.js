import routes from './cachedJSONs/seventeen.js';

const process = () => {
  return routes.length;
}

const testRoute = (route, moves) => {
  console
  for (let m = 0; m < moves.length; m++) {
    if (!route.moves.includes(moves[m])) {
      return false;
    }
  }
  return true;
}

const sift = (body) => {
  const { grade, moves} = body;
  const matches = []
  for (let r = 0; r < routes.length; r++) {
    const route = routes[r];
    if (testRoute(route, moves)) {
      matches.push(route)
    }
  }
  return matches
}

export {
  process,
  sift,
}