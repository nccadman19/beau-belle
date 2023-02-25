  const thumbImgs = document.querySelectorAll('#gallery img');
  thumbImgs.forEach(img => {
    img.style.filter = 'blur(10px)';
  });

  const lazyloadImages = document.querySelectorAll('.lazyload');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.addEventListener('load', () => {
          image.style.filter = 'none';
          image.classList.remove('lazyload');
        });
        observer.unobserve(image);
      }
    });
  });

  lazyloadImages.forEach(image => {
    imageObserver.observe(image);
  });