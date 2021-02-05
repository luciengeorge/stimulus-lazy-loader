import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'image' ];
  static values = {
    rootMargin: String
  }

  connect() {
    const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: this.rootMargin });
    this.imageTargets.forEach(target => observer.observe(target));
  }

  get rootMargin() {
    this.hasRootMarginValue ? this.rootMarginValue : "0px 0px -200px 0px";
  }
}
