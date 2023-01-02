class Builder {
    constructor(_initNum = 0) {
       this.initNum = _initNum;
    }

    plus(...n)  {
        for (let arg of n) this.initNum += arg;
        console.log(this.initNum)
      return this;
    }

    minus(...n) {
        for (let arg of n) this.initNum -= arg;
        console.log(this.initNum)
        this.initNum
        return this;
    }

    multiply(n) {
        this.initNum *= n;
        console.log(this.initNum)
        return this;
    }

    divide(n) {
        this.initNum /= n;
        console.log(this.initNum)
        return this;
    }

    mod(n) {
        this.initNum %= n;
        console.log(this.initNum)
        return this;
    }

    get() { 
        this.initNum;
        console.log(this.initNum)
        return this;
    }
    

    static random(from,to) {
        console.log(Math.floor(Math.random() *to) + from);
       }
}

class IntBuilder extends Builder {
    constructor(_initNum) {
        super(_initNum);
     }
}

IntBuilder.random(10,100)

const intBuilder = new IntBuilder(10);

console.log(
    intBuilder
    .plus(2,3,2)
    .minus(1,2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get()
)




