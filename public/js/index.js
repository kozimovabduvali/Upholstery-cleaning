// Swiper
let swiper = new Swiper(".swipper-images", {
  slidesPerView: 1,
  spaceBetween: 10,
  // Breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


// Accourdion
document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const accordionItem = this.closest('.accordion-item');
      const content = accordionItem.querySelector('.accordion-content');
      const plusIcon = accordionItem.querySelector('.plus-icon');
      const minusIcon = accordionItem.querySelector('.minus-icon');

      // Close all other accordion items
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          const otherItem = otherHeader.closest('.accordion-item');
          const otherContent = otherItem.querySelector('.accordion-content');
          const otherPlusIcon = otherItem.querySelector('.plus-icon');
          const otherMinusIcon = otherItem.querySelector('.minus-icon');

          otherContent.classList.add('hidden');
          otherPlusIcon.classList.remove('hidden');
          otherMinusIcon.classList.add('hidden');
        }
      });

      // Toggle current accordion item
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        plusIcon.classList.add('hidden');
        minusIcon.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
        plusIcon.classList.remove('hidden');
        minusIcon.classList.add('hidden');
      }
    });
  });
});