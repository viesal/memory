export function createElement (container, htmlElement, attributes = [], style = {}) {
    const element = document.createElement(htmlElement)
    attributes.forEach((attribute) => element.setAttribute(attribute[0], attribute[1]))
    element.style.cssText = style
    container.appendChild(element)
    return element
}