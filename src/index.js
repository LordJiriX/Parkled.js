/* LordJiriX 2025 */
function createElm(html) {
      const template = document.createElement("template");
      template.innerHTML = html.trim();
      return template.content.firstChild;
    }

    function render(elm, props = {}, containerId = "app") {
  const container = document.getElementById(containerId);

  for (const [key, value] of Object.entries(props)) {
    if (key === "style") {
      if (typeof value === "string") {
        elm.setAttribute("style", value);
      } else if (typeof value === "object") {
        for (const [prop, val] of Object.entries(value)) {
          elm.style[prop] = val;
        }
      }
    }
    else if (key.startsWith("on") && typeof value === "function") {
      elm.addEventListener(key.substring(2).toLowerCase(), value);
    }
    else if (key.startsWith("data-")) {
      elm.setAttribute(key, value);
    }
    else if (["value", "checked", "disabled", "src", "href", "alt", "title"].includes(key)) {
      elm[key] = value;
    }
    else {
      elm.setAttribute(key, value);
    }
  }

  container.appendChild(elm);
  return elm;
   }
