function draw(fourier) {
    const ITERATIONS = 10000

    let canvas = document.getElementById("res")
    let ctx = canvas.getContext("2d")

    const OGX = X_WIDTH / 2 + fourier.c0[0]
    const OGY = Y_WIDTH / 2 + fourier.c0[1]

    let pastX = OGX
    let pastY = OGY

    for(i = 0; i < ITERATIONS; i++) {
        let x = OGX
        let y = OGY

        for(let j = 0; j < ARMS; j++) {
            x += (fourier.positives[j][0] * Math.cos((j+1) * 2 * Math.PI * i / ITERATIONS) - fourier.positives[j][1] * Math.sin((j+1) * 2 * Math.PI * i / ITERATIONS))
            y += (fourier.positives[j][0] * Math.sin((j+1) * 2 * Math.PI * i / ITERATIONS) + fourier.positives[j][1] * Math.cos((j+1) * 2 * Math.PI * i / ITERATIONS))

            x += (fourier.negatives[j][0] * Math.cos(-(j+1) * 2 * Math.PI * i / ITERATIONS) - fourier.negatives[j][1] * Math.sin(-(j+1) * 2 * Math.PI * i / ITERATIONS))
            y += (fourier.negatives[j][0] * Math.sin(-(j+1) * 2 * Math.PI * i / ITERATIONS) + fourier.negatives[j][1] * Math.cos(-(j+1) * 2 * Math.PI * i / ITERATIONS))
        }

        if(i != 0) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(pastX, pastY)
            ctx.stroke()
        }
        

        pastX = x
        pastY = y
    }
}