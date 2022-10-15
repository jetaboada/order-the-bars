export default (cantidad) => {
    let hmax = 200;
    let step = Math.ceil(hmax/cantidad);
    let bars = [];

    for (let index = 0; index < cantidad; index++) {
      bars.push({
        id: index, 
        height: (index+1)*step, 
        backgroundColor: 'red'
      });
    }

    function randomScoreOrder(a, b) {
      if (a.score === b.score) {
      const random = Math.random() * 10;
      if (random >= 5) {
          return 1;
      } else {
          return -1;
      }
      } else if (a.score > b.score) {
      return -1;
      } else if (a.score < b.score) {
      return 1;
      }
      return 0;
    }

    bars.sort(randomScoreOrder)

    return bars;
}