 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
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
`data-lazy-loader-target="root"` | browser viewport | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. | ✅
`data-lazy-loader-root-margin-value` | `"0px"` | Margin around the root. Can have values similar to the CSS margin property. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. | ✅
`data-lazy-loader-threshold-value` | `[0.0]` | Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. | ✅

For more info about the configuration options please visit [the MDN documentation on the Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
