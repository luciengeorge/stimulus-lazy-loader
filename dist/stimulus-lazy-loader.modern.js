import{Controller as t}from"@hotwired/stimulus";class r extends t{connect(){const t=new IntersectionObserver((t,r)=>{t.forEach(t=>{t.target.src=t.target.dataset.src,r.unobserve(t.target)})},{root:this.root,rootMargin:this.rootMargin,threshold:this.threshold});this.imageTargets.forEach(r=>t.observe(r))}get rootMargin(){return this.hasRootMarginValue?this.rootMarginValue:"0px"}get root(){return this.hasRootTarget?this.rootTarget:null}get threshold(){return this.hasThresHoldValue?this.thresholdValue:[0]}}r.targets=["image","root"],r.values={rootMargin:String,threshold:Array};export{r as default};
//# sourceMappingURL=stimulus-lazy-loader.modern.js.map
