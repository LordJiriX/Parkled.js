const hello = createElm("<p>Hello</p>")
function App() {
      render(hello, { 
        id: "someId",
        class: "my-text",
        style: { color: "red", fontWeight: "bold" },
        title: "Tooltip text",
        onClick: () => alert("Hello it work!")
      });
  }
App();
