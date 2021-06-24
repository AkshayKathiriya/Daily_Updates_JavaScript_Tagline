container.onmouseover = container.onmouseout = handler;

function handler(event) {
    function str(el) {
        if(!el) return "null"
        return el.className || el.tagName;
    }

    log.value += event.type + ": target = " + event.target.tagName + ", relatedTarget=" + str(event.relatedTarget) + "\n";

    log.scrollTop = log.scrollHeight;

    if(event.type== 'mouseover') {
        event.target.style.background = 'pink'
    }

    if(event.type == 'mouseout') {
        event.target.style.background =''
    }

}