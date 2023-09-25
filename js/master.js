let _span = document.getElementsByTagName('span')
    let _count = document.getElementsByClassName('count')
    let _sec = document.getElementsByClassName('sec')
    let _min = document.getElementsByClassName('min')
    sec = 0
    min = 0
    count = 0
    let _set
    _span[0].addEventListener('click', () => {
        _set = setInterval(timer, 10)
        document.getElementById('span1').style.top = '-2px'
        document.getElementById('span2').style.top = '-55px'
        document.getElementById('span3').style.top = '-10px'
    })
    _span[1].addEventListener('click', () => {
        clearInterval(_set)
        document.getElementById('span2').style.top = '-45px'
        document.getElementById('span1').style.top = '-10px'
        document.getElementById('span3').style.top = '-10px'
    })
    _span[2].addEventListener('click', () => {
        clearInterval(_set)
        sec = 0
        min = 0
        count = 0
        _count[0].innerHTML = '00'
        _sec[0].innerHTML = '00'
        _min[0].innerHTML = '00'
        document.getElementById('span3').style.top = '-2px'
        setTimeout(() => {
            document.getElementById('span3').style.top = '-10px'
        }, 800)
        document.getElementById('span2').style.top = '-55px'
        document.getElementById('span1').style.top = '-10px'
    })
    function timer() {
        count++
        if (count > 100) {
            sec++
            count = 0
            if (sec > 60) {
                min++
                sec = 0
                _sec[0].innerHTML = '00'
                _min[0].innerHTML = min
            } else {
                _sec[0].innerHTML = sec
            }
        } else {
            _count[0].innerHTML = count
        }
    }
