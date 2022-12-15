
  
  function BuilderES5 (greeting) {
    this.greeting = greeting
    this.text = ''
  }
  
  BuilderES5.prototype.plus = function (...str) {
    
    for (let arg of str)
       this.text += arg;
    
    this.text = this.greeting.concat(this.text)
    console.log(`'${this.text}'`)
  }

  BuilderES5.prototype.minus = function (n) {
    this.text = this.text.slice(0, - n)
    
    console.log(`'${this.text}'`)
  }

  BuilderES5.prototype.multiply = function (int) {
   this.text = this.text.repeat(int)
   
    console.log(`'${this.text}'`)
  }

  BuilderES5.prototype.divide = function (n) {
    this.text = this.text.slice(0, n)
 
    console.log(`'${this.text}';`)
  }

  BuilderES5.prototype.remove = function (str) {
    this.text = this.text.replaceAll(str, '')
    
    console.log(`'${this.text}';`)
  }

  BuilderES5.prototype.sub = function (from,n) {

    this.text = this.text.substring(from, n + 1)
    
    console.log(`'${this.text}';`)
  }

  BuilderES5.prototype.get = function () { 
    console.log(`->'${this.text}';`)
  }

  function StringBuilder(greeting) {
    BuilderES5.call(this, greeting);
}

StringBuilder.prototype = Object.create(BuilderES5.prototype);

let strBuilder = new StringBuilder('Hello');
strBuilder.plus(' all','!')
strBuilder.minus(4)
strBuilder.multiply(3)
strBuilder.divide(4)
strBuilder.remove('l')
strBuilder.sub(1,1)
strBuilder.get()


