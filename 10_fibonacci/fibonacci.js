const fibonacci = function(num) {

    let prev = 0;
    let current = 1;
    if(num == 1){
        return 1;
    }else if(num > 1){

        while (num-1>0) {

            let aux = current;
            current = aux + prev;
            prev = aux;
            num--;
        }

        return current;

    }else{
        return "OOPS";
    }

};

// Do not edit below this line
module.exports = fibonacci;
