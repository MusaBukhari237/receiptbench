const el = id => document.getElementById(id);
function show(value) { el("result").textContent = value; }
function appendText(value) {
  const p = document.createElement("p"); p.textContent = value; el("result").append(p);
}
function action(callback) {
  const button = el("run");
  button.onclick = async () => {
    button.disabled = true;
    try { await callback(); } catch (error) { show(error.message); }
    finally { button.disabled = false; }
  };
}
function renderTable(rows) {
  const wrapper = document.createElement("div"), table = document.createElement("table");
  wrapper.className = "grid";
  rows.forEach((row,index) => {
    const tr = table.insertRow();
    row.forEach(value => {
      const cell = document.createElement(index ? "td" : "th");
      cell.textContent = String(value);
      if (!index) cell.scope = "col";
      tr.append(cell);
    });
  });
  wrapper.append(table); el("result").append(wrapper);
}
let previousUrl;
function download(filename, contents, type = "text/csv") {
  if (previousUrl) URL.revokeObjectURL(previousUrl);
  previousUrl = URL.createObjectURL(new Blob([contents],{type}));
  const link = document.createElement("a");
  link.className = "download"; link.href = previousUrl;
  link.download = filename; link.textContent = "Download " + filename;
  el("result").append(link);
}
import {receipt,money} from "./tool.mjs";
el("example").onclick = () => { el("items").value = "Ceramic cup | 2 | 8.50\nFilter papers | 1 | 4.25\nCoffee sample | 3 | 2.10"; };
action(() => {
  const r = receipt(el("items").value,el("currency").value);
  const paper = el("paper").value;
  el("result").classList.remove("paper58","paper80");
  el("result").classList.add("paper"+paper);
  show("Total " + money(r.total,r.currency));
  renderTable([["Item","Qty","Amount"],...r.items.map(i => [i.name,i.qty,money(i.lineTotal,r.currency)])]);
  const button = document.createElement("button"); button.textContent = "Print receipt"; button.className = "quiet no-print";
  button.onclick = () => window.print(); el("result").append(button);
});
