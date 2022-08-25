class FooterComp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    footer {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #8ed6fb;
      color: #fff;
      text-align: center;
      letter-spacing: 2px;
      word-spacing: 5px;
    }
  </style>

  <footer id="footerid">
    <p>2022 - submission Dicoding - </p>
  </footer>
    `;
  }
}

customElements.define("footer-comp", FooterComp);
