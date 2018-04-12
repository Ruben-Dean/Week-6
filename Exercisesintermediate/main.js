

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
    var num = document.getElementById("numberinput").value.replace();
    var count = 0;

        while(num != 1) {
            if (num % 3==0){
                num /=3;

                count++
                console.log(num)
            }
            if((num - 1) % 3==0){
                num= +num-1;
                count++;
                console.log(num);
            } else if ((num +1) % 3==0){
                num= +num-1;
                count++;
                console.log(num);
            }

        }

        console.log("number of iterations: " + count);

      /*  console.log("Input: " + input);
        for(var i = 0; input > 0; i++){
            if(input % 3 == 0){
                console.log("divided by three");
                input /= 3;
            } else {
                console.log("added by 1");
                input++;

            }
            console.log("current input: " + input)
        }
    console.log("Final Count: " + i);*/

        /*  var input = document.getElementById('input');
          var times = parseInt(input.value);

          for (var i = 0; i < times; i++){

              console.log(input);*/

             /* if(input % 3){
                  console.log("divided by three");
                  input / 3;
              } else {
                  console.log("added by 1")
                  input++
              }
              console.log("current input: " + input)

          }
            console.log("Final Count: " + input)*/


}