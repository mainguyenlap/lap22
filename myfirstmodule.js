const calc = (a,b,p) => {
    switch (p) {
        case '+' : {
            return a+b;
            break;
        }
        case '-' : {
            return a-b;
            break;
        }
        case '*' : {
            return a*b;
            break;
        }
        case '/' : {
            return a/b;
            break;
        }
        default :{return;}
    }
}
exports.calc=calc;