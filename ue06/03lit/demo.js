import {LitElement, html, css} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js"

export class SimpleCounter extends LitElement {
    static styles = css`
        button {
            background: royalblue;
            color: white;
            border: none;
            padding: 8px 14px;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }
    `;

    static properties = {
        count: {type: Number},
    }

    constructor() {
        super();
        this.count = 0;
    }

    render() {
        return html`
            <button @click=${() => this.count++}>
                Clicks: ${this.count}
            </button>
        `;
    }
}

customElements.define("simple-counter", SimpleCounter);