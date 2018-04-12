

function fizzbuzz() {
    for (var i = 1; i <= 20; i++) {
        if (i % 15 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}

function ite4(){

        var count = 0;
        console.log("Input: " + input)
        while(input > 1){
            if(input % 3 == 0){
                console.log("divided by three")
                input /= 3;
            } else {
                console.log("subtracted by 1")
                input--;
                //input /= 3;
            }
            count++;
            console.log("current input: " + input)
        }
    console.log("Final Count: " + count);
}