export default (barsArray, id1, id2) => {

    let height1 = 0
    let height2 = 0

    let _barsArray = [...barsArray];

    _barsArray.forEach(element => {
        if (element.id === id1) {
          height1 = element.height
        }
        if (element.id === id2) {
          height2 = element.height
        }
        
      });
      
      _barsArray.forEach(element => {
        if (element.id == id1) {
          element.height = height2
        }
        if (element.id == id2) {
          element.height = height1
        }
      });

    _barsArray.forEach(element => element.backgroundColor= 'red' )

      return _barsArray;
}