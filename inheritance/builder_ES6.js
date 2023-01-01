class Builder {
    constructor(_initNum = 0) {
       this.initNum = _initNum;
       this.sum = 0;
    }

    plus(...n)  {
       this.sum = this.initNum;

        for (let arg of n) this.sum += arg;
        console.log(this.sum)
      return this;
    }

    minus(...n) {
        for (let arg of n) this.sum -= arg;
        console.log(this.sum)
        this.sum
        return this;
    }

    multiply(n) {
        this.sum *= n;
        console.log(this.sum)
        return this;
    }

    divide(n) {
        this.sum /= n;
        console.log(this.sum)
        return this;
    }

    mod(n) {
        this.sum %= n;
        console.log(this.sum)
        return this;
    }

    get() { 
        this.sum;
        console.log(`-> ${this.sum}`)
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




