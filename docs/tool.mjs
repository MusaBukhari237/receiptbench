export function receipt(input, currency) {
  if (!["USD","EUR","GBP","CAD","PKR"].includes(currency)) throw new Error("Choose a supported currency.");
  const rows = input.trim().split(/\r?\n/).filter(line => line.trim());
  if (!rows.length || rows.length > 50) throw new Error("Enter between 1 and 50 items.");
  const items = rows.map((line, index) => {
    const parts = line.split("|").map(x => x.trim());
    const [name, qty, amount] = parts;
    if (parts.length !== 3 || !name || name.length > 75 || !/^[1-9]\d{0,3}$/.test(qty) ||
        !/^\d{1,7}(?:\.\d{1,2})?$/.test(amount)) throw new Error("Check item " + (index+1) + ": name | quantity | unit price.");
    const [whole, fraction = ""] = amount.split(".");
    const cents = BigInt(whole) * 100n + BigInt(fraction.padEnd(2,"0"));
    return {name, qty:Number(qty), lineTotal: BigInt(qty)*cents};
  });
  return {currency, items, total:items.reduce((sum,x) => sum+x.lineTotal,0n)};
}
export function money(value, currency) {
  return currency + " " + (value/100n) + "." + String(value%100n).padStart(2,"0");
}
