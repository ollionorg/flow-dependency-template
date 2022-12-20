import { html, unsafeCSS, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import eleStyle from "./f-welcome.scss";
import flowCoreCSS from "@cldcvr/flow-core/dist/style.css";

@customElement("f-welcome")
export class FWelcome extends LitElement {
  /**
   * css loaded from scss file
   */
  static styles = [unsafeCSS(eleStyle), unsafeCSS(flowCoreCSS)];

  @property({
    reflect: true,
    type: String,
  })
  message?: string;

  render() {
    return html`<f-text variant="heading" state="primary"
      >${this.message}</f-text
    > `;
  }
}
