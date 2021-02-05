## Installation
```bash
yarn add stimulus-lazy-loader
```
And register the controller
```js
import { Application } from "stimulus"
import LazyLoader from 'stimulus-lazy-loader';

const application = Application.start();
application.register("lazy-loader", LazyLoader);
```

## Usage
```html
<div data-controller="lazy-loader">
    <img src="placeholder.jpg" data-lazy-loader-target="image" data-src="https://via.placeholder.com/150" />
</div
```

## Configuration
**Attribute** | **Default** | **Description** | **Optional**
------------- | ----------- | --------------- | ------------
`data-lazy-loader-root-margin-value` | `"0px 0px -200px 0px"` | Margin around the root. Can have values similar to the CSS margin property. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. | ✅
