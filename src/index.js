import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'image' ];

  connect() {
    const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -200px 0px" });
    this.imageTargets.forEach(target => observer.observe(target));
  }
}
