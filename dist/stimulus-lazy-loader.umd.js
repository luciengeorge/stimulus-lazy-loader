!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@hotwired/stimulus")):"function"==typeof define&&define.amd?define(["@hotwired/stimulus"],e):(t||self).stimulusLazyLoader=e(t.stimulus)}(this,function(t){function e(t,r){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},e(t,r)}var r=/*#__PURE__*/function(t){var r,o,n,i;function u(){return t.apply(this,arguments)||this}return o=t,(r=u).prototype=Object.create(o.prototype),r.prototype.constructor=r,e(r,o),u.prototype.connect=function(){var t=new IntersectionObserver(function(t,e){t.forEach(function(t){t.target.src=t.target.dataset.src,e.unobserve(t.target)})},{root:this.root,rootMargin:this.rootMargin,threshold:this.threshold});this.imageTargets.forEach(function(e){return t.observe(e)})},n=u,(i=[{key:"rootMargin",get:function(){return this.hasRootMarginValue?this.rootMarginValue:"0px"}},{key:"root",get:function(){return this.hasRootTarget?this.rootTarget:null}},{key:"threshold",get:function(){return this.hasThresHoldValue?this.thresholdValue:[0]}}])&&function(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,"symbol"==typeof(n=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key))?n:String(n),o)}var n}(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),u}(t.Controller);return r.targets=["image","root"],r.values={rootMargin:String,threshold:Array},r});
//# sourceMappingURL=stimulus-lazy-loader.umd.js.map
