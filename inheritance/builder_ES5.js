
  
  function BuilderES5 (greeting) {
    this.greeting = greeting
    this.text = ''
  }
  
  BuilderES5.prototype.plus = function (...str) {
    
    for (let arg of str)
       this.text += arg;
    
    this.text = this.greeting.concat(this.text)
    console.log(`'${this.text}'`)
    return this;
  }

  BuilderES5.prototype.minus = function (n) {
    this.text = this.text.slice(0, - n)
    
    console.log(`'${this.text}'`)
    return this;
  }

  BuilderES5.prototype.multiply = function (int) {
   this.text = Array(int + 1).join(this.text);
   
    console.log(`'${this.text}'`)
    return this;
  }

  BuilderES5.prototype.divide = function (n) {
    this.text = this.text.slice(0, n)
 
    console.log(`'${this.text}';`)
    return this;
  }

  BuilderES5.prototype.remove = function (str) {
    this.text = this.text.slice(str, 2)
    
    console.log(`'${this.text}';`)
    return this;
  }

  BuilderES5.prototype.sub = function (from,n) {

    this.text = this.text.substring(from, n + 1)
    
    console.log(`'${this.text}';`)
    return this;
  }

  BuilderES5.prototype.get = function () { 
    console.log(`->'${this.text}';`)
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


