import{Controller as t}from"stimulus";class r extends t{connect(){const t=new IntersectionObserver((t,r)=>{t.forEach(t=>{t.target.src=t.target.dataset.src,r.unobserve(t.target)})},{rootMargin:this.rootMargin});this.imageTargets.forEach(r=>t.observe(r))}get rootMargin(){}}r.targets=["image"],r.values={rootMargin:String};export default r;
//# sourceMappingURL=stimulus-lazy-loader.modern.js.map
