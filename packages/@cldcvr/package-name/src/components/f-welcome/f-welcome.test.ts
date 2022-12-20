import { html, fixture, expect } from "@open-wc/testing";

import "@cldcvr/flow-core";
import { FWelcome } from "@cldcvr/package-name";

describe("f-welcome", () => {
  it("is defined", () => {
    const el = document.createElement("f-welcome");
    expect(el).instanceOf(FWelcome);
  });

  it("should render message", async () => {
    const el = await fixture(
      html` <f-welcome message="Hello world!"></f-welcome> `
    );

    const descendant = el.shadowRoot!.querySelector("f-text")!;
    expect(descendant.textContent).to.equal("Hello world!");
  });
});
