import test from "node:test";
import assert from "node:assert/strict";
import * as core from "../docs/tool.mjs";

test("prices in minor units, with strict decimal input", () => {
  const result=core.receipt("Tea | 3 | 0.10\nCup | 1 | 8.02","EUR");
  assert.equal(result.total,832n);
  assert.equal(core.money(result.total,"EUR"),"EUR 8.32");
  assert.throws(() => core.receipt("Tea | 0 | 0.10","USD"),/Check item/);
  assert.throws(() => core.receipt("Tea | 1 | 0.001","USD"),/Check item/);
});
