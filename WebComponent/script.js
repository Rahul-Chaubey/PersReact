//console.log("Hello World");

class UserDeatils extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "This is our first component";
  }
}

window.customElements.define("user-detail", UserDeatils);
