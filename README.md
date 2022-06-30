# `sandpack-theme-nord`

Implementation of the Nord theme (<https://www.nordtheme.com/>) for Sandpack (<https://sandpack.codesandbox.io/docs/>).

## Installation

```sh
npm i --save sandpack-theme-nord
```

## Usage

```javascript
import { Sandpack } from "@codesandbox/sandpack-react";
import { nord } from "sandpack-theme-nord";

export default function App() {
  return <Sandpack theme={nord} />;
}
```
