# react-simple-drawer

> Simple React drawer

[![NPM](https://img.shields.io/npm/v/react-simple-drawer.svg)](https://www.npmjs.com/package/react-simple-drawer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-simple-drawer
```

## Usage

```jsx
import React, { Component } from 'react'

import Drawer from 'react-simple-drawer'
import 'react-simple-drawer/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Drawer 
        cta={ <button> Open drawer </button> }
        maskable={true}
        placement={placement}
        open={false}
      >
        <p>
          This is the drawer body content
        </p>
      </Drawer>
    )
  }
}
```

| props             | Description                                       | Type                      | Required | Default |
|-------------------|---------------------------------------------------|---------------------------|----------|----------
| `cta`             | To invoke the drawer (button, span etc..)         | ReactNode                 | Yes      | None    |
| `closeOnMaskClick`| close the drawer by clicking mask area       | boolean                   | No       | true    |
| `maskable`        | show an overlay on the empty area outisde drawer  | boolean                   | No       | true    |
| `open`            | drawer is visible or not                          | boolean                   | No       | false   |
| `placement`       | place where drawer appears from                   | right, left, top, right   | No       | right   |

## License

MIT © [georgejustin22](https://github.com/justin22)
