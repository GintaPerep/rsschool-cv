class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    negateNumber() {
            this.appendNumber("-");
            return;
        }
        
    compute() {
        let result
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
     
        switch (this.operation) {
            case '+':
                result = prev + current
                break

            case '-':
                result = prev - current
                break

            case '*':
                result = prev * current
                break

            case '÷':   
                result = prev / current
                if(result == Infinity) {  
                    result = 'Error'; 
                }
                break

            case 'x^':
                result = prev ** current
                break

            case '√x':
                result = Math.sqrt(prev)
                if (isNaN(result))  result = 'Error'; 
                break

            case '&plus;/&minus;':
                break

            default:
                return                       
        }
   
        if (result.lenght > 10) {
            result = Number(result.slice(0, 10));
        }
        if (Number(result) === result && result % 1 !== 0)
        {
            result = result.toFixed(10)
        }       
     
        this.currentOperand = result
        this.operation = undefined
        this. previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.') [1]
        let integerDisplay
       
        if (isNaN(integerDigits)) {
            integerDisplay = stringNumber
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText =  this.getDisplayNumber(this.currentOperand)
        
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
    
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const negationButton = document.querySelector('[data-negation]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const squareRootButton = document.querySelector('[data-square-root]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

negationButton.addEventListener('click', () => {
    calculator.negateNumber()
    calculator.updateDisplay()
})
squareRootButton.addEventListener('click', () => {
    calculator.chooseOperation(squareRootButton.innerText)
    calculator.compute()
    calculator.updateDisplay()
})
