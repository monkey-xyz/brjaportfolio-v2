function fade() {
    let all = document.querySelector('body');
    setTimeout (() => {
        all.setAttribute("style","opacity: 1")
    }, 100)
}

fade();