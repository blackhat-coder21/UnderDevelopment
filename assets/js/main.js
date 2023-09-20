/**
* Template Name: MyPortfolio - v4.7.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function (e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()


// Committed Changes on 28-08-2023

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();






// // copy content
// const copyButton = document.getElementById('copyButton');

// // Get a reference to the pre tag
// const preTag = document.querySelector('.prompt');

// // Get a reference to the custom popup
// const copyPopup = document.getElementById('copyPopup');

// // Add a click event listener to the copy button
// copyButton.addEventListener('click', () => {
//   // Create a temporary text area element
//   const tempTextArea = document.createElement('textarea');

//   // Set the value of the text area to the content of the pre tag
//   tempTextArea.value = preTag.textContent;

//   // Append the text area to the document (it doesn't need to be visible)
//   document.body.appendChild(tempTextArea);

//   // Select the text within the text area
//   tempTextArea.select();

//   // Execute the copy command
//   document.execCommand('copy');

//   // Remove the temporary text area from the document
//   document.body.removeChild(tempTextArea);

//   // Show the popup
//   copyPopup.style.display = 'block';

//   // Hide the popup after a delay (e.g., 2 seconds)
//   setTimeout(() => {
//     copyPopup.style.display = 'none';
//   }, 2000); // 2000 milliseconds (2 seconds)
// });


function copyTextAndShowPopup(copyButtonId, copyPopupId, preClassName) {
  const copyButton = document.getElementById(copyButtonId);
  const preTag = document.querySelector(`.${preClassName}`);
  const copyPopup = document.getElementById(copyPopupId);

  copyButton.addEventListener('click', () => {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = preTag.textContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    // Show the corresponding popup
    copyPopup.style.display = 'block';

    // Hide the popup after a delay (e.g., 2 seconds)
    setTimeout(() => {
      copyPopup.style.display = 'none';
    }, 2000); // 2 seconds
  });
}

// Initialize copy functionality for the first set of elements
copyTextAndShowPopup('copyButton1', 'copyPopup1', 'prompt1');

// Initialize copy functionality for the second set of elements
copyTextAndShowPopup('copyButton2', 'copyPopup2', 'prompt2');