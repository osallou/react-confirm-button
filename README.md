# react-confirm-button

> Add button with confirmation

[![NPM](https://img.shields.io/npm/v/react-confirm-button.svg)](https://www.npmjs.com/package/react-confirm-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-confirm-button
```

## Usage

```jsx
import React, { Component } from 'react'

import {ConfirmButton} from '@osallou/react-confirm-button'
import '@osallou/react-confirm-button/dist/index.css'

class Example extends Component {
  render() {
    return <ConfirmButton onConfirm={() => console.log('confirmed!') }>Click me</ConfirmButton>
  }
}
```

## License

MIT © [osallou](https://github.com/osallou)
