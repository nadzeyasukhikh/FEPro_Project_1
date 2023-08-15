function createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.setAttribute("class", className);
    return element;
}


export {createElement };