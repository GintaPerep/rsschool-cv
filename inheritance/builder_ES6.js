class Builder {
    constructor(_initNum = 0) {
       this.initNum = _initNum;
       this.sum = 0;
    }

    plus(...n)  {
       this.sum = this.initNum;

        for (let arg of n) this.sum += arg;
        console.log(this.sum)
      return this.sum;
    }

    minus(...n) {
        for (let arg of n) this.sum -= arg;
        console.log(this.sum)
        return this.sum;
    }

    multiply(n) {
        this.sum *= n;
        console.log(this.sum)
        return this.sum;
    }

    divide(n) {
        this.sum /= n;
        console.log(this.sum)
        return this.sum;
    }

    mod(n) {
        this.sum %= n;
        console.log(this.sum)
        return this.sum;
    }

    get() { console.log(`-> ${this.sum}`)}
    

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

intBuilder.plus(2,3,2)
intBuilder.minus(1,2)
intBuilder.multiply(2)
intBuilder.divide(4)
intBuilder.mod(3)
intBuilder.get()



/* class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }
    static {
      console.log('Class static initialization block called');
    }
  } */

