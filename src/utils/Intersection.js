export function initIntersectionObserver(selector) {
  const bioChildren = document.querySelectorAll(selector);

  if ("IntersectionObserver" in window) {
    // IntersectionObserver Supported
    const observer = new IntersectionObserver(onChange, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    });

    bioChildren.forEach(child => observer.observe(child));
  } else {
    // IntersectionObserver NOT Supported
    bioChildren.forEach((child, index) => loadChild(child, index));
  }
}

function onChange(changes, observer) {
  changes.forEach((change, index) => {
    if (change.intersectionRatio > 0) {
      // Stop watching and load child
      loadChild(change.target, index);
      observer.unobserve(change.target);
    }
  });
}

function loadChild(image, index) {
  setTimeout(() => image.classList.add("fadeIn"), index * 400);
}
