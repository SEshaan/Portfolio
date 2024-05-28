// animate the title
function fumble(target, final, time, prog) {
    bifurc = final.substr(0, Math.round(final.length * prog)) + ((final.length > Math.round(final.length * prog)) ? "".repeat(final.length - Math.round(final.length * prog)) : " ")
    document.getElementById(target).innerText = bifurc
    if (prog >= 1) { return }
    setTimeout(() => { fumble(target, final, time, (prog += 0.1)) }, time * 0.1)
}

click_count = 0
document.getElementById("title").onclick = () => {
    click_count += 1
    console.log("unlocking")
    if (click_count >= 5) {
        document.getElementById("secret").style.display = "initial"
        console.log("unlocked")
    }
}
(function(){
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: true,
        resetNativeScroll:false,
        smartphone: {
            // smooth: true,
            lerp:0.1,
        },
        touchMultiplier:2
    });
})()


