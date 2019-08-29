// hour walay wheel ka liyay

let hourMain = document.querySelector("#hMain");

let hourMin1 = document.querySelector("#hMinus-1");

let hourMin2 = document.querySelector("#hMinus-2");


let hourPlus1 = document.querySelector("#hPlus-1");

let hourPlus2 = document.querySelector("#hPlus-2");


function hMinus() {
    lock.play();
    if (hourMain.value == 98) {

        hourMain.value++

            hourPlus1.innerHTML = 0;
        hourPlus2.innerHTML = 1;


        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    } else if (hourMain.value == 99) {

        hourMain.value = 0;

        hourMin1.innerHTML = 99;
        hourMin2.innerHTML = 98;


        hourPlus1.innerHTML = 1;
        hourPlus2.innerHTML = 2;


        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    } else if (hourMain.value == 01) {

        hourMain.value++;

        hourMin1.innerHTML = 1;
        hourMin2.innerHTML = 0;


        hourPlus1.innerHTML = Number(hourMain.value) + 1;
        hourPlus2.innerHTML = Number(hourMain.value) + 2;

        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    } else if (hourMain.value == 00) {

        hourMain.value++;

        hourMin1.innerHTML = 0;
        hourMin2.innerHTML = 99;

        hourPlus1.innerHTML = Number(hourMain.value) + 1;
        hourPlus2.innerHTML = Number(hourMain.value) + 2;



        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    } else if (hourMain.value == 97) {

        hourMain.value++;

        hourPlus1.innerHTML = 99;
        hourPlus2.innerHTML = 00;

        hourPlus1.innerHTML = Number(hourMain.value) + 1;



        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    } else {

        hourMain.value++
            hourMin2.innerHTML = 99;

        hourPlus1.innerHTML = Number(hourMain.value) + 1;
        hourPlus2.innerHTML = Number(hourMain.value) + 2;

        hourMin1.innerHTML = hourMain.value - 1;
        hourMin2.innerHTML = hourMain.value - 2;




        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    }
    console.log(hourMain.value);

}

function hPlus() {
    lock.play();
    if (hourMain.value == 0) {

        hourMin1.innerHTML = 99;
        hourMin2.innerHTML = 98;


        hourMain.value--

            hourMain.value = 99;

        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

        if (hourMain.value = 99) {

            hourPlus1.innerHTML = 0;
            hourPlus2.innerHTML = 1;


            hourMin1.innerHTML = hourMain.value - 1;
            hourMin2.innerHTML = hourMain.value - 2;

            if (hourMain.value < 10) {
                hourMain.value = `0${hourMain.value}`
            }
            if (hourMin1.innerHTML < 10) {
                hourMin1.innerHTML = `0${hourMin1.innerHTML}`
            }
            if (hourPlus1.innerHTML < 10) {
                hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
            }
            if (hourMin2.innerHTML < 10) {
                hourMin2.innerHTML = `0${hourMin2.innerHTML}`
            }
            if (hourPlus2.innerHTML < 10) {
                hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
            }

        }

    } else if (hourMain.value == 1) {

        hourMain.value--

            hourMin1.innerHTML = 99;
        hourMin2.innerHTML = 98;


        hourPlus1.innerHTML = Number(hourMain.value) + 1;
        hourPlus2.innerHTML = Number(hourMain.value) + 2;

        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    } else if (hourMain.value == 2) {

        hourMain.value--

            hourMin1.innerHTML = 00;
        hourMin2.innerHTML = 99;


        hourPlus1.innerHTML = Number(hourMain.value) + 1;
        hourPlus2.innerHTML = Number(hourMain.value) + 2;

        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    } else if (hourMain.value == 99) {

        hourMain.value--

            hourPlus1.innerHTML = 99;
        hourPlus2.innerHTML = 00;


        hourPlus1.innerHTML = Number(hourMain.value) + 1;

        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    } else {

        hourMain.value--


            hourMin1.innerHTML = hourMain.value - 1;
        hourMin2.innerHTML = hourMain.value - 2;

        hourPlus1.innerHTML = Number(hourMain.value) + 1;
        hourPlus2.innerHTML = Number(hourMain.value) + 2;

        if (hourMain.value < 10) {
            hourMain.value = `0${hourMain.value}`
        }
        if (hourMin1.innerHTML < 10) {
            hourMin1.innerHTML = `0${hourMin1.innerHTML}`
        }
        if (hourPlus1.innerHTML < 10) {
            hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
        }
        if (hourMin2.innerHTML < 10) {
            hourMin2.innerHTML = `0${hourMin2.innerHTML}`
        }
        if (hourPlus2.innerHTML < 10) {
            hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
        }

    }
    console.log(hourMain.value);

}


hourPlus1.innerHTML = Number(hourMain.value) + 1;
hourPlus2.innerHTML = Number(hourMain.value) + 2;

hourMin1.innerHTML = hourMain.value - 1;
hourMin2.innerHTML = hourMain.value - 2;

if (hourMain.value == 00) {

    hourMin1.innerHTML = 99;
    hourMin2.innerHTML = 98;


} else {

    hourMin1.innerHTML = hourMain.value - 1;
    hourMin2.innerHTML = hourMain.value - 2;

}
if (hourMain.value < 10) {
    hourMain.value = `0${hourMain.value}`
}
if (hourMin1.innerHTML < 10) {
    hourMin1.innerHTML = `0${hourMin1.innerHTML}`
}
if (hourPlus1.innerHTML < 10) {
    hourPlus1.innerHTML = `0${hourPlus1.innerHTML}`
}
if (hourMin2.innerHTML < 10) {
    hourMin2.innerHTML = `0${hourMin2.innerHTML}`
}
if (hourPlus2.innerHTML < 10) {
    hourPlus2.innerHTML = `0${hourPlus2.innerHTML}`
}



// hour walay wheel ka liyay

// minutes walay wheel ka liyay

let minutesMain = document.querySelector("#mMain");

let minutesMin1 = document.querySelector("#mMinus-1");

let minutesMin2 = document.querySelector("#mMinus-2");


let minutesPlus1 = document.querySelector("#mPlus-1");

let minutesPlus2 = document.querySelector("#mPlus-2");


function mMinus() {
    lock.play();

    if (minutesMain.value == 58) {

        minutesMain.value++

            minutesPlus1.innerHTML = 0;
        minutesPlus2.innerHTML = 1;


        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    } else if (minutesMain.value == 59) {

        minutesMain.value = 0;

        minutesMin1.innerHTML = 59;
        minutesMin2.innerHTML = 58;


        minutesPlus1.innerHTML = 1;
        minutesPlus2.innerHTML = 2;


        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    } else if (minutesMain.value == 01) {

        minutesMain.value++;

        minutesMin1.innerHTML = 1;
        minutesMin2.innerHTML = 0;


        minutesPlus1.innerHTML = Number(minutesMain.value) + 1;
        minutesPlus2.innerHTML = Number(minutesMain.value) + 2;

        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    } else if (minutesMain.value == 00) {

        minutesMain.value++;

        minutesMin1.innerHTML = 0;
        minutesMin2.innerHTML = 59;

        minutesPlus1.innerHTML = Number(minutesMain.value) + 1;
        minutesPlus2.innerHTML = Number(minutesMain.value) + 2;



        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    } else if (minutesMain.value == 57) {

        minutesMain.value++;

        minutesPlus1.innerHTML = 59;
        minutesPlus2.innerHTML = 00;

        minutesPlus1.innerHTML = Number(minutesMain.value) + 1;



        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    } else {

        minutesMain.value++
            minutesMin2.innerHTML = 59;

        minutesPlus1.innerHTML = Number(minutesMain.value) + 1;
        minutesPlus2.innerHTML = Number(minutesMain.value) + 2;

        minutesMin1.innerHTML = minutesMain.value - 1;
        minutesMin2.innerHTML = minutesMain.value - 2;




        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    }
    console.log(minutesMain.value);

}

function mPlus() {
    lock.play();

    if (minutesMain.value == 0) {

        minutesMin1.innerHTML = 59;
        minutesMin2.innerHTML = 58;


        minutesMain.value--

            minutesMain.value = 59;

        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

        if (minutesMain.value = 59) {

            minutesPlus1.innerHTML = 0;
            minutesPlus2.innerHTML = 1;


            minutesMin1.innerHTML = minutesMain.value - 1;
            minutesMin2.innerHTML = minutesMain.value - 2;

            if (minutesMain.value < 10) {
                minutesMain.value = `0${minutesMain.value}`
            }
            if (minutesMin1.innerHTML < 10) {
                minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
            }
            if (minutesPlus1.innerHTML < 10) {
                minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
            }
            if (minutesMin2.innerHTML < 10) {
                minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
            }
            if (minutesPlus2.innerHTML < 10) {
                minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
            }

        }

    } else if (minutesMain.value == 1) {

        minutesMain.value--

            minutesMin1.innerHTML = 59;
        minutesMin2.innerHTML = 58;


        minutesPlus1.innerHTML = Number(minutesMain.value) + 1;
        minutesPlus2.innerHTML = Number(minutesMain.value) + 2;

        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    } else if (minutesMain.value == 2) {

        minutesMain.value--

            minutesMin1.innerHTML = 00;
        minutesMin2.innerHTML = 59;


        minutesPlus1.innerHTML = Number(minutesMain.value) + 1;
        minutesPlus2.innerHTML = Number(minutesMain.value) + 2;

        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    } else if (minutesMain.value == 59) {

        minutesMain.value--

            minutesPlus1.innerHTML = 59;
        minutesPlus2.innerHTML = 00;


        minutesPlus1.innerHTML = Number(minutesMain.value) + 1;

        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    } else {

        minutesMain.value--


            minutesMin1.innerHTML = minutesMain.value - 1;
        minutesMin2.innerHTML = minutesMain.value - 2;

        minutesPlus1.innerHTML = Number(minutesMain.value) + 1;
        minutesPlus2.innerHTML = Number(minutesMain.value) + 2;

        if (minutesMain.value < 10) {
            minutesMain.value = `0${minutesMain.value}`
        }
        if (minutesMin1.innerHTML < 10) {
            minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
        }
        if (minutesPlus1.innerHTML < 10) {
            minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
        }
        if (minutesMin2.innerHTML < 10) {
            minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
        }
        if (minutesPlus2.innerHTML < 10) {
            minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
        }

    }
    console.log(minutesMain.value);

}


minutesPlus1.innerHTML = Number(minutesMain.value) + 1;
minutesPlus2.innerHTML = Number(minutesMain.value) + 2;

minutesMin1.innerHTML = minutesMain.value - 1;
minutesMin2.innerHTML = minutesMain.value - 2;

if (minutesMain.value == 00) {

    minutesMin1.innerHTML = 59;
    minutesMin2.innerHTML = 58;


} else {

    minutesMin1.innerHTML = minutesMain.value - 1;
    minutesMin2.innerHTML = minutesMain.value - 2;

}
if (minutesMain.value < 10) {
    minutesMain.value = `0${minutesMain.value}`
}
if (minutesMin1.innerHTML < 10) {
    minutesMin1.innerHTML = `0${minutesMin1.innerHTML}`
}
if (minutesPlus1.innerHTML < 10) {
    minutesPlus1.innerHTML = `0${minutesPlus1.innerHTML}`
}
if (minutesMin2.innerHTML < 10) {
    minutesMin2.innerHTML = `0${minutesMin2.innerHTML}`
}
if (minutesPlus2.innerHTML < 10) {
    minutesPlus2.innerHTML = `0${minutesPlus2.innerHTML}`
}



// minutes walay wheel ka liyay

// seconds walay wheel ka liyay

let secondsMain = document.querySelector("#sMain");

let secondsMin1 = document.querySelector("#sMinus-1");

let secondsMin2 = document.querySelector("#sMinus-2");


let secondsPlus1 = document.querySelector("#sPlus-1");

let secondsPlus2 = document.querySelector("#sPlus-2");


function sMinus() {
    lock.play();

    if (secondsMain.value == 58) {

        secondsMain.value++

            secondsPlus1.innerHTML = 0;
        secondsPlus2.innerHTML = 1;


        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    } else if (secondsMain.value == 59) {

        secondsMain.value = 0;

        secondsMin1.innerHTML = 59;
        secondsMin2.innerHTML = 58;


        secondsPlus1.innerHTML = 1;
        secondsPlus2.innerHTML = 2;


        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    } else if (secondsMain.value == 01) {

        secondsMain.value++;

        secondsMin1.innerHTML = 1;
        secondsMin2.innerHTML = 0;


        secondsPlus1.innerHTML = Number(secondsMain.value) + 1;
        secondsPlus2.innerHTML = Number(secondsMain.value) + 2;

        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    } else if (secondsMain.value == 00) {

        secondsMain.value++;

        secondsMin1.innerHTML = 0;
        secondsMin2.innerHTML = 59;

        secondsPlus1.innerHTML = Number(secondsMain.value) + 1;
        secondsPlus2.innerHTML = Number(secondsMain.value) + 2;



        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    } else if (secondsMain.value == 57) {

        secondsMain.value++;

        secondsPlus1.innerHTML = 59;
        secondsPlus2.innerHTML = 00;

        secondsPlus1.innerHTML = Number(secondsMain.value) + 1;



        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    } else {

        secondsMain.value++
            secondsMin2.innerHTML = 59;

        secondsPlus1.innerHTML = Number(secondsMain.value) + 1;
        secondsPlus2.innerHTML = Number(secondsMain.value) + 2;

        secondsMin1.innerHTML = secondsMain.value - 1;
        secondsMin2.innerHTML = secondsMain.value - 2;




        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    }
    console.log(secondsMain.value);

}

function sPlus() {
    lock.play();

    if (secondsMain.value == 0) {

        secondsMin1.innerHTML = 59;
        secondsMin2.innerHTML = 58;


        secondsMain.value--

            secondsMain.value = 59;

        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

        if (secondsMain.value = 59) {

            secondsPlus1.innerHTML = 0;
            secondsPlus2.innerHTML = 1;


            secondsMin1.innerHTML = secondsMain.value - 1;
            secondsMin2.innerHTML = secondsMain.value - 2;

            if (secondsMain.value < 10) {
                secondsMain.value = `0${secondsMain.value}`
            }
            if (secondsMin1.innerHTML < 10) {
                secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
            }
            if (secondsPlus1.innerHTML < 10) {
                secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
            }
            if (secondsMin2.innerHTML < 10) {
                secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
            }
            if (secondsPlus2.innerHTML < 10) {
                secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
            }

        }

    } else if (secondsMain.value == 1) {

        secondsMain.value--

            secondsMin1.innerHTML = 59;
        secondsMin2.innerHTML = 58;


        secondsPlus1.innerHTML = Number(secondsMain.value) + 1;
        secondsPlus2.innerHTML = Number(secondsMain.value) + 2;

        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    } else if (secondsMain.value == 2) {

        secondsMain.value--

            secondsMin1.innerHTML = 00;
        secondsMin2.innerHTML = 59;


        secondsPlus1.innerHTML = Number(secondsMain.value) + 1;
        secondsPlus2.innerHTML = Number(secondsMain.value) + 2;

        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    } else if (secondsMain.value == 59) {

        secondsMain.value--

            secondsPlus1.innerHTML = 59;
        secondsPlus2.innerHTML = 00;


        secondsPlus1.innerHTML = Number(secondsMain.value) + 1;

        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    } else {

        secondsMain.value--


            secondsMin1.innerHTML = secondsMain.value - 1;
        secondsMin2.innerHTML = secondsMain.value - 2;

        secondsPlus1.innerHTML = Number(secondsMain.value) + 1;
        secondsPlus2.innerHTML = Number(secondsMain.value) + 2;

        if (secondsMain.value < 10) {
            secondsMain.value = `0${secondsMain.value}`
        }
        if (secondsMin1.innerHTML < 10) {
            secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
        }
        if (secondsPlus1.innerHTML < 10) {
            secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
        }
        if (secondsMin2.innerHTML < 10) {
            secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
        }
        if (secondsPlus2.innerHTML < 10) {
            secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
        }

    }
    console.log(secondsMain.value);

}


secondsPlus1.innerHTML = Number(secondsMain.value) + 1;
secondsPlus2.innerHTML = Number(secondsMain.value) + 2;

secondsMin1.innerHTML = secondsMain.value - 1;
secondsMin2.innerHTML = secondsMain.value - 2;

if (secondsMain.value == 00) {

    secondsMin1.innerHTML = 59;
    secondsMin2.innerHTML = 58;


} else {

    secondsMin1.innerHTML = secondsMain.value - 1;
    secondsMin2.innerHTML = secondsMain.value - 2;

}
if (secondsMain.value < 10) {
    secondsMain.value = `0${secondsMain.value}`
}
if (secondsMin1.innerHTML < 10) {
    secondsMin1.innerHTML = `0${secondsMin1.innerHTML}`
}
if (secondsPlus1.innerHTML < 10) {
    secondsPlus1.innerHTML = `0${secondsPlus1.innerHTML}`
}
if (secondsMin2.innerHTML < 10) {
    secondsMin2.innerHTML = `0${secondsMin2.innerHTML}`
}
if (secondsPlus2.innerHTML < 10) {
    secondsPlus2.innerHTML = `0${secondsPlus2.innerHTML}`
}



// seconds walay wheel ka liyay
let startTime;
let start = false;
let sSpan = document.querySelector("#sSpan");
let mSpan = document.querySelector("#mSpan");
let hSpan = document.querySelector("#hSpan");
let beepSound = new Audio("beep.wav");
let lock = new Audio("lock.mp3");

function startTimer() {


    if (start == false) {

        hSpan.innerHTML = hourMain.value;

        mSpan.innerHTML = minutesMain.value;

        sSpan.innerHTML = secondsMain.value;

        document.querySelector("main").style = "display:none";

        document.querySelector("#main").style = "display:flex";

        startTime = setInterval(updateTime, 1000);

        start = true;

    }

    document.querySelector("#ring").style = "animation: box 1s linear infinite";



}


function updateTime() {



    if (sSpan.innerHTML == 0 && mSpan.innerHTML == 0 && hSpan.innerHTML == 0) {
        beepSound.play();
        sSpan.innerHTML = `00`;
        mSpan.innerHTML = `00`;
        hSpan.innerHTML = `00`;

    } else {
        if (sSpan.innerHTML == 0) {

            sSpan.innerHTML = 59;

            if (mSpan.innerHTML == 0) {

                hSpan.innerHTML--;

                mSpan.innerHTML = 59;

            } else {

                mSpan.innerHTML--;

            }

        } else {

            sSpan.innerHTML--;

        }

        if (sSpan.innerHTML < 10) {
            sSpan.innerHTML = `0${sSpan.innerHTML}`;
        } else {
            sSpan.innerHTML;
        }
    }
}

function reset() {
    location.reload();
}