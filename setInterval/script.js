let randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color
}

let interval;

let changeCol = function(){
    document.body.style.backgroundColor = randomColor()
}

let startChangeCol = function(){
    if (!interval) {

        interval = setInterval(changeCol, 1000)
        
    }
}

let stopChangeCol = function(){
    clearInterval(interval)
    interval = null
}



document.querySelector('.start').addEventListener('click', startChangeCol)


document.querySelector('.stop').addEventListener('click', stopChangeCol)






