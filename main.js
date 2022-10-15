let  element = document.getElementById('comenzar');
element.addEventListener("click", function(){comenzar()});
console.log('paso2');

var winner = false;

function comenzar(){
    
    let input = document.getElementById('cantBarras');
    let q = input.value;

    if (q<5|q>25) {
        location.reload();
    }

    var elemento = document.getElementById('form');
    elemento.parentNode.removeChild(elemento);
    let hmax = 200;
    let step = Math.ceil(hmax/q);
    let bars = [];
    for (let index = 0; index < q; index++) {
        bars.push((index+1)*step);
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

    bars.sort(randomScoreOrder);
    
    let i = 0;
    bars.forEach(bar => {
        const barra = document.createElement("div"); 
        barra.className='barra';
        barra.style.backgroundColor = 'red';
        barra.style.width = '30px';
        barra.style.height = bar + 'px';
        barra.id = 'bar' + i;
        i++;
        var barsrow = document.getElementById("div1");
        barsrow.appendChild(barra);
        let  element = document.getElementById(barra.id);
        element.addEventListener("click", function(){clickOnBar(barra.id)});
    });

    countMovs = 0;
    barsSelected=[];
}

function clickOnBar(barId){
    if(!winner){
        if(barId!==barsSelected[0]){
            barsSelected.push(barId);
            if (barsSelected.length > 1) {
                countMovs++;
                let  contador = document.getElementById('countMovs');
                contador.textContent = 'MOVIMIENTOS REALIZADOS: '+countMovs;
                let  element1 = document.getElementById(barsSelected[0]);
                let  element2 = document.getElementById(barsSelected[1]);
                const originalHeight1 = element1.style.height;
                const originalHeight2 = element2.style.height;
                element1.style.height = originalHeight2;
                element2.style.height = originalHeight1;
                barsSelected=[];
                let barras = document.querySelectorAll(".barra");
                barras.forEach(
                    function(barra) {
                        barra.style.backgroundColor = "red";
                    }
                )
                let heightPrev = 0;
                winner = true;
                barras.forEach(
                    function(barra) {
                        barraH = barra.style.height;
                        barraHnum = Number(barraH.substring(0, barraH.length - 2));
                        if (winner) {
                            winner = (barraHnum > heightPrev);
                        }
                        heightPrev = barraHnum;
                    }
                )
                if(winner){
                    let  winnerText = document.getElementById('winner');
                    winnerText.textContent = 'FIN DE PARTIDA';

                    const button = document.createElement('button');
                    button.type = 'button';
                    button.id = 'refresh';
                    button.innerText = 'Nueva partida';
                    document.body.appendChild(button);

                    let refresh = document.getElementById('refresh');
                    refresh.addEventListener('click', _ => {
                        location.reload();
                    })
                }
            } else {
                let  element = document.getElementById(barId);
                element.style.backgroundColor = 'blue';
            }
        }
    }
}





