/*
© LordJiriX 2025
--- under MIT ---
*/
const VERSION = "1.0.0";
const HOMEPAGE = "https://github.com/LordJiriX/Parkled.js";

function getHomePage() {
      return (HOMEPAGE);
}
function getVersion() {
      return (VERSION);
}
function createElm(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
}


function render(elm, props = {}, containerId = "app") {
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error(`Container with ID "${containerId}" not found.`);
  }
  container.appendChild(elm);
  return elm;
}


function el(tag, props = {}, children = []) {
  const element = document.createElement(tag);

  
  if (typeof children === "string") {
    element.textContent = children;
  } else if (Array.isArray(children)) {
    for (const child of children) {
      element.appendChild(
        typeof child === "string" ? document.createTextNode(child) : child
      );
    }
  } else if (children instanceof Node) {
    element.appendChild(children);
  }

  
  for (const [key, value] of Object.entries(props)) {
    if (key === "style" && typeof value === "object") {
      Object.assign(element.style, value);
    } 
    else if (key.startsWith("on") && typeof value === "function") {
      element.addEventListener(key.substring(2).toLowerCase(), value);
    } 
    else if (key.startsWith("data-")) {
      element.setAttribute(key, value);
    } 
    else if (["value", "checked", "disabled", "src", "href", "alt", "title"].includes(key)) {
      element[key] = value;
    } 
    else if (key === "text") {
      element.textContent = value;
    } 
    else {
      element.setAttribute(key, value);
    }
  }

  
  if (tag === "img" && props.src) {
    element.loading = "lazy";
    if (props.onLoad || props.onError) {
      element.addEventListener("load", (e) => props.onLoad?.(e, element));
      element.addEventListener("error", (e) => props.onError?.(e, element));
    }
  }

  return element;
}


function setGlobalStyles(cssText) {
  let styleTag = document.getElementById("__global_styles__");

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "__global_styles__";
    document.head.appendChild(styleTag);
  }

  styleTag.textContent = cssText;
}
