function Builder2(_initNum = 0) {

    this.initNum = _initNum;
    this.sum2 =  this.initNum ;
 }

Builder2.prototype.plus = function(...n) { 
    this.sum2

    for (let arg of n) this.sum2 += arg;
    console.log(`Builder2 ${this.sum2}`)
    return this.sum;
};

Builder2.prototype.minus = function(...n) { 
    this.sum2;

    for (let arg of n) this.sum2 -= arg;
    console.log(`Builder2 ${this.sum2}`)
    return this.sum2;
};


let builder = new Builder2(10)
builder.plus(2,3,2)
builder.minus(1,2);