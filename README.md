# PDF417

Typified and distributed to npm wrapper for https://github.com/bkuzmic/pdf417-js

### Install

```bash
npm i @makard/pdf417
yarn add @makard/pdf417
```

### Usage

```ts
import { PDF417 } from '@makard/pdf417'

PDF417.init('text', 0, 0);
const barcode = PDF417.getBarcodeArray();
```
