import { html, css, LitElement } from 'lit';

function hasChanged(newVal, oldVal) {
    return JSON.stringify(newVal) != JSON.stringify(oldVal);
}

export default class BaseTable extends LitElement {
    static properties = {
        rows: {
            state: true,
            hasChanged
        }
    }

    constructor() {
        super();
        this.rows = [];
        this.refresh();
    }

    static styles = css`
      table, td, th {
        border: 1px solid black;
      }
    `;

    async refresh() {

    }

    renderHeader() {
        return html`<tr></tr>`;
    }

    renderRow(row) {
        return html`<tr></tr>`;
    }

    render() {
        return html`
        <table>
          <thead>
            ${this.renderHeader()}
          </thead>
          <tbody>
            ${this.rows.map(this.renderRow)}
          </tbody>
        </table>
      `;
    }
}
