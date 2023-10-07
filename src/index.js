import {Controller} from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['image', 'root']
  static values = {
    rootMargin: String,
    threshold: Array,
  }

  connect() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          entry.target.src = entry.target.dataset.src
          observer.unobserve(entry.target)
        })
      },
      {root: this.root, rootMargin: this.rootMargin, threshold: this.threshold},
    )
    this.imageTargets.forEach((target) => observer.observe(target))
  }

  get rootMargin() {
    return this.hasRootMarginValue ? this.rootMarginValue : '0px'
  }

  get root() {
    return this.hasRootTarget ? this.rootTarget : null
  }

  get threshold() {
    return this.hasThresHoldValue ? this.thresholdValue : [0.0]
  }
}
