# There is example: 
```
const app = el("div", { id: "wrapper", style: { display: "flex", gap: "10px" } }, [
  el("h2", { text: "Mini UI Builder" }),
  el("button", {
    text: "Say Hi",
    onClick: () => alert("Hi there!"),
    style: { background: "orange", color: "white", border: "none", padding: "6px 12px" }
  }),
  el("button", {
    text: "Console Log",
    onClick: () => console.log("Clicked!"),
  })
]);
const img = el("img", {
  src: "https://picsum.photos/300/200",
  alt: "Random image",
  style: { borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.3)" }
});

render(img);


render(app);
```
