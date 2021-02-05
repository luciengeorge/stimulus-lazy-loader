import{Controller as e}from"stimulus";class t extends e{connect(){const e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.target.src=e.target.dataset.src,t.unobserve(e.target)})},{rootMargin:"0px 0px -200px 0px"});this.imageTargets.forEach(t=>e.observe(t))}}t.targets=["image"];export default t;
//# sourceMappingURL=stimulus-lazy-loader.modern.js.map
