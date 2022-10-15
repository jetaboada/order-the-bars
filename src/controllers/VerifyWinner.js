export default (barsArray) => {
    let heightPrev = 0;
    let isWinner= true;
    
    barsArray.forEach(
        function(barra) {
            let barraH = barra.height;
            if (isWinner) {
                isWinner = (barraH > heightPrev);
            }
            heightPrev = barraH;
        }
    )

    return isWinner;
}