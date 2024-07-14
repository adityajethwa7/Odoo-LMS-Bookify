/**
 * Creates a DOM element with the specified tag, properties, and children.
 * 
 * @param {string} tag - The HTML tag name of the element to create.
 * @param {Object} props - An object containing the properties to set on the element.
 * @param {...(Node|string)} children - Child nodes or text to append to the element.
 * @returns {HTMLElement} The created DOM element.
 */
export function createElement(tag, props = {}, ...children) {
    // Create the element
    const element = document.createElement(tag);
  
    // Set properties and event listeners
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith('on') && typeof value === 'function') {
        // For event listeners (props starting with 'on')
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        // For other properties
        element[key] = value;
      }
    });
  
    // Append children
    children.forEach(child => {
      if (typeof child === 'string') {
        // If the child is a string, create a text node
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        // If the child is a DOM node, append it directly
        element.appendChild(child);
      }
    });
  
    return element;
  }