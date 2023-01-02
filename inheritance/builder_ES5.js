
  
  function BuilderES5 (greeting) {
    this.greeting = greeting
  }
  
  BuilderES5.prototype.plus = function (...str) {
    
    for (let arg of str)
       this.greeting += arg;
    
    console.log(`'${this.greeting}'`)
    return this;
  }

  BuilderES5.prototype.minus = function (n) {
    this.greeting = this.greeting.slice(0, - n)
    
    console.log(`'${this.greeting}'`)
    return this;
  }

  BuilderES5.prototype.multiply = function (int) {
   this.greeting = Array(int + 1).join(this.greeting);
   
    console.log(`'${this.greeting}'`)
    return this;
  }

  BuilderES5.prototype.divide = function (n) {
    const k = Math.floor(this.greeting.length /n)
    this.greeting = this.greeting.slice(0, k)
 
    console.log(`'${this.greeting}';`)
    return this;
  }

  BuilderES5.prototype.remove = function (str) {
    this.greeting = this.greeting.split(str).join('')
    
    console.log(`'${this.greeting}';`)
    return this;
  }

  BuilderES5.prototype.sub = function (from,n) {

    this.greeting = this.greeting.substring(from, n + 1)
    
    console.log(`'${this.greeting}';`)
    return this;
  }

  BuilderES5.prototype.get = function () { 
    console.log(`'${this.greeting}';`)
    return this;
  }

  function StringBuilder(greeting) {
    BuilderES5.call(this, greeting);
}

StringBuilder.prototype = Object.create(BuilderES5.prototype);

let strBuilder = new StringBuilder('Hello');

console.log (
  strBuilder.plus(' all','!')
            .minus(4)
            .multiply(3)
            .divide(4)
            .remove('l')
            .sub(1,1)
            .get()
);


