
  
  function BuilderES5 (greeting) {
    this.greeting = greeting
    this.text = ''
  }
  
  BuilderES5.prototype.plus = function (...str) {
    
    for (let arg of str)
       this.text += arg;
       this.text = this.greeting + this.text
    console.log(`'${this.text}'`)
  }

  BuilderES5.prototype.minus = function (n) {
       let result = this.text.substring(0, this.text.length - n)
    
    console.log(`'${result}'`)
  }

  function StringBuilder(greeting) {
    BuilderES5.call(this, greeting);
}

StringBuilder.prototype = Object.create(BuilderES5.prototype);

let strBuilder = new StringBuilder('Hello', 22);
strBuilder.plus(' all','!')
strBuilder.minus(4)


