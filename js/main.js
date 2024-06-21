

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar-example');

    function changeNavbarColor() {
        if (window.scrollY > window.innerHeight) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('position-absolute');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('position-absolute');
        }
    }

    window.addEventListener('scroll', changeNavbarColor);
})

document.addEventListener("DOMContentLoaded", function() {
    // Function to start counting
    function startCounter(element) {
      var target = +element.getAttribute('data-count');
      var current = 0;

      var counterInterval = setInterval(function() {
        current += Math.ceil(target / 70); 
        element.textContent = current;

        if (current >= target) {
          element.textContent = target;
          clearInterval(counterInterval);
        }
      }, 20); 
    }

    // Function to check if an element is in the viewport
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to check if an element is visible, start the counter, and set a flag to prevent repeat
    function checkVisibilityAndStartCounter() {
      var counters = document.querySelectorAll('.done-projects .item h3');

      counters.forEach(function(counter) {
        if (isInViewport(counter) && !counter.dataset.counted) {
          startCounter(counter);
          counter.dataset.counted = true;
        }
      });
    }

    // Listen for the scroll event
    window.addEventListener('scroll', checkVisibilityAndStartCounter);

    // Initial check when the page loads
    checkVisibilityAndStartCounter();
  });