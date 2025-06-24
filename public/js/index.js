// Swiper
let swiper = new Swiper(".swipper-images", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 3500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  grabCursor: true,
  allowTouchMove: true,
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




document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const reviewCard = this.closest('.bg-white');
      const reviewText = reviewCard.querySelector('.review-text');

      if (reviewText.classList.contains('line-clamp-4')) {
        // Expand the text
        reviewText.classList.remove('line-clamp-4');
        this.textContent = 'Свернуть';
      } else {
        // Collapse the text
        reviewText.classList.add('line-clamp-4');
        this.textContent = 'Раскрыть';
      }
    });
  });
});