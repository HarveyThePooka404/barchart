

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
}

window.onload = function () {
    Counting();
}

const miracle = [];

function Counting() {


    const queueSize = getNumberOfCustomers();

    if (miracle.length > 39) {

        miracle.length = 39;
        miracle.unshift(queueSize);
    }
    else {
        miracle.unshift(queueSize);
    }

    for (i = 0; i < 40; i++) {
        const bar_number = document.querySelector(`#bar_${i}`);
        bar_number.style.height = `${miracle[i] * 5}px`;

        console.log(miracle[i]);
    }

    /*     let i = 39;
        let j = 0;
        let bar_number = document.querySelector(`#bar_${i}`);
    
        if (i > 0) {
            bar_number.style.height = `${miracle[j]}px`;
            i--;
            j++;
            console.log(i);
            console.log(bar_number);
        }
    
        else {
            console.log("firstround");
        } */

    setTimeout(Counting, 1000);
}
