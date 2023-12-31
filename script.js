"use-strict"
// animate the title
function fumble(target,final,time,prog){
    bifurc = final.substr(0,Math.round(final.length*prog)) + ((final.length > Math.round(final.length*prog)) ? "".repeat(final.length - Math.round(final.length*prog)) : " ")
    document.getElementById(target).innerText = bifurc
    if (prog >= 1){return}
    setTimeout(() => {fumble(target,final,time,(prog += 0.1))},time*0.1)
}