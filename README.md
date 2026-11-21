# ReceiptBench

**Preview thermal receipts.** Build a print-ready receipt for 58 mm or 80 mm paper with exact decimal line totals.

[Open the live tool](https://musabukhari237.github.io/receiptbench/) · [Report an issue](https://github.com/MusaBukhari237/receiptbench/issues)

[![ReceiptBench showing an example workflow](docs/preview.png)](https://musabukhari237.github.io/receiptbench/)

## Try an example

Choose Load example and Preview receipt. The total is USD 27.55. Choose the paper width and print from the preview.

## Usage and limits

Receipts use exact integer minor units for prices. Taxes and regulatory invoice fields are outside this preview. In your print dialog choose the matching paper size and disable headers and footers.

## Run locally

Clone this repository, then run:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory docs
```

Open http://127.0.0.1:8000 in a browser. The site needs no package install. Run `node --test` with Node.js 22 or newer.

## Interface

A café photograph, large serif headings, warm brown controls, and a separate paper receipt preview make the print workflow easier to follow.

Use Ctrl+Enter or Command+Enter to run the current inputs. Clear editor clears pasted text, and View results moves keyboard focus to the output. Status text identifies changed inputs and refreshed results.

Fonts and imagery are bundled locally. Visual sources and font licenses are recorded in [asset credits](docs/Assets.md).

## Sponsors

Supported by [LeadCeleris](https://www.leadceleris.com/) and [AIFFICIENTO](https://www.aifficiento.biz/).

## Contributing and license

Use synthetic input in bug reports and contributions. See [contribution notes](CONTRIBUTING.md) and the [MIT license](LICENSE).
