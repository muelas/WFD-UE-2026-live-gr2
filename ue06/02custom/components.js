class UserBadge extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name") ?? "Guest";

        // Erzeuge Shadow Root, um das Markup und CSS zu kapseln
        const shadow = this.attachShadow({mode: "open"});

        // Verwende Shadow DOM statt "this.innterHTML", um das Markup und CSS zu kapseln
        shadow.innerHTML = `
            <style>
                span{
                    background: #007bff;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                }
            </style>
            <span>User: ${name}</span>
        `;
    }
}

customElements.define("user-badge", UserBadge);