const X_WIDTH = 600
const Y_WIDTH = 600
const ARMS = 50

class Fourier {
    constructor(input, order) {
        this.input = input
        this.order = order
        this.midX = Math.floor((X_WIDTH - 1) / 2)
        this.midY = Math.floor((Y_WIDTH - 1) / 2)

        this.c0 = this.findC(0)
        this.positives = []
        this.negatives = []

        for(let i = 1; i <= ARMS; i++) {
            this.positives.push(this.findC(i))
            this.negatives.push(this.findC(-i))
        }

        this.writeEquation()

        draw(this)
    }

    findC(n) {
        let x = 0
        let y = 0

        for(let t = 0; t < this.order.length; t++) {
            x += (this.order[t][0] * Math.cos(-n * 2 * Math.PI * (t+1) / this.order.length) - this.order[t][1] * Math.sin(-n * 2 * Math.PI * (t+1) / this.order.length)) / this.order.length
            y += (this.order[t][0] * Math.sin(-n * 2 * Math.PI * (t+1) / this.order.length) + this.order[t][1] * Math.cos(-n * 2 * Math.PI * (t+1) / this.order.length)) / this.order.length
        }

        return [x, y]
    }

    writeEquation() {
        let s = ""
        let equationElement = document.getElementById("equation")

        for(let i = this.negatives.length - 1; i >= 0; i--) {
            s += `(${this.positives[i][0].toFixed(2)} + ${this.positives[i][1].toFixed(2)}i) * e^(-${i}*2*pi*i*t) + `
        }

        s += `(${this.c0[0].toFixed(2)} + ${this.c0[1].toFixed(2)}i)`

        for(let i = 0; i < this.positives.length; i++) {
            s += `(${this.positives[i][0].toFixed(2)} + ${this.positives[i][1].toFixed(2)}i) * e^(${i}*2*pi*i*t) + `
        }
        

        equationElement.innerText = "f(t) = " + s.slice(0, s.length - 3)
    }
}