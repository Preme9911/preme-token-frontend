$(document).ready(function () {
  $(".smog-tweets-wrapper").owlCarousel({
    items: 3, 
    loop: true, 
    margin: 20, 
    nav: true, 
    responsive: {
      0: {
        items: 1, // 1 item when width is 0px and up
      },
      600: {
        items: 1, // 2 items when width is 600px and up
      },
      768: {
        items: 2, // 3 items when width is 1000px and up
      },
      1000: {
        items: 3, 
      }
    },
    navText: [
      `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <g clip-path="url(#clip0_24700_32672)">
    <path d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z" fill="#382B3C"/>
    <path d="M27.6004 32.1998L18.4004 22.9998L27.6004 13.7998" stroke="white" stroke-width="5"/>
  </g>
  <defs>
    <clipPath id="clip0_24700_32672">
      <rect width="46" height="46" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <g clip-path="url(#clip0_24700_32678)">
    <path d="M23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46Z" fill="#382B3C"/>
    <path d="M18.4004 32.1998L27.6004 22.9998L18.4004 13.7998" stroke="white" stroke-width="5"/>
  </g>
  <defs>
    <clipPath id="clip0_24700_32678">
      <rect width="46" height="46" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
    ],
  });

  AOS.init({
    duration: 1500,
    offset: 0, // Set offset to 100 for mobile, 0 for desktop
    once: true,
  });


  // mushfik vai

  // let snowflakeCount = 0;
  // const maxSnowflakes = 20; // Set the maximum number of snowflakes

  // function createSnowflake() {
  //   if (snowflakeCount >= maxSnowflakes) return; // Stop generating when max is reached
  //   const snowflake = document.createElement("div");
  //   snowflake.classList.add("snowflake");


  //   const randomNumber= parseInt(Math.random())


  //   const positionRandom= parseInt(Math.random()*100)
  


  //   const size = 10; // Random size between 20px and 30px
  //   snowflake.style.width = `${size}px`;
  //   snowflake.style.height = `${size}px`;

  //   // Random horizontal position
  //   snowflake.style.left = `${positionRandom}%`;

  //   // Random animation duration
  //   snowflake.style.animationDuration = `${(parseInt(Math.random())) * 5 + 5}s`; // Between 5s and 10s

  //   // Add your SVG snowflake as innerHTML
  //   snowflake.innerHTML = `
  // <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  //   <path d="M4 0L8 4L4 8L0 4L4 0Z" fill="white"/>
  // </svg>
  // `;
  //   // Append snowflake to each section
  //   const sections = document.querySelectorAll("[data-snowfall]"); // Replace with your section class or ID
  //   sections.forEach((section) => {
  //     section.appendChild(snowflake.cloneNode(true));
  //   });

  //   snowflakeCount++; // Increment the snowflake count

  //   // Remove snowflake after animation and decrement the count
  //   setTimeout(() => {
  //     snowflake.remove();
  //     snowflakeCount--; // Decrease the count after removal
  //   }, 10000); // Same as max animation duration
  // }

  // // Generate snowflakes every 200ms, but limit the total number
  // setInterval(() => {
  //   if (snowflakeCount < maxSnowflakes) {
  //     createSnowflake();
  //   }
  // }, 2000);


  const maxSnowflakes = 20; // Set the maximum number of snowflakes
  const maxVisibleSnowflakes = 10; // Set the maximum number of visible snowflakes
  
  let snowflakeCount = 0;
  const snowflakes = []; // Array to keep track of created snowflakes
  
  function createSnowflake() {
    if (snowflakeCount >= maxSnowflakes) return; // Stop generating if max snowflakes are reached
  
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
  
    // Random size with smaller size for mobile screens
    const size = window.innerWidth <= 768 ? Math.floor(Math.random() * 10) + 5 : Math.floor(Math.random() * 20) + 10;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
  
    // Random horizontal position, ensuring it stays within the viewport
    const positionRandom = Math.random() * (100 - size / 10); // Reduces potential overflow
    snowflake.style.left = `${positionRandom}%`;
  
    // Random animation duration between 5s and 10s
    const animationDuration = Math.random() * 5 + 5;
    snowflake.style.animationDuration = `${animationDuration}s`;
  
    // Add your SVG snowflake as innerHTML
    snowflake.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M4 0L8 4L4 8L0 4L4 0Z" fill="white"/>
      </svg>
    `;
  
    // Append snowflake to each section
    const sections = document.querySelectorAll("[data-snowfall]"); // Replace with your section class or ID
    sections.forEach((section) => {
      section.style.overflow = "hidden"; // Ensure no overflow in the section
      section.appendChild(snowflake.cloneNode(true));
    });
  
    snowflakes.push(snowflake); // Add the new snowflake to the array
    snowflakeCount++; // Increment the snowflake count
  
    // Remove the oldest snowflakes if the number exceeds maxVisibleSnowflakes
    if (snowflakes.length > maxVisibleSnowflakes) {
      const oldSnowflake = snowflakes.shift(); // Remove the oldest snowflake from the array
      oldSnowflake.remove(); // Remove it from the DOM
      snowflakeCount--; // Decrease the count after removal
    }
  
    // Remove snowflake after animation and decrement the count
    setTimeout(() => {
      if (snowflakeCount > maxVisibleSnowflakes) { // Ensure snowflake removal only if not already removed
        snowflake.remove();
        snowflakeCount--;
      }
    }, Math.random() * 5000 + 5000); // Set timeout to match animation duration
  }
  
  // Generate snowflakes at regular intervals
  setInterval(() => {
    if (snowflakeCount < maxSnowflakes) {
      createSnowflake();
    }
  }, 2000);
  



  
  // toggle
  function initializeTabToggle(
    tabSelector,
    formSelector,
    activeTabClass = "active",
    activeFormClass = "active"
  ) {
    const tabButtons = document.querySelectorAll(tabSelector);
    const forms = document.querySelectorAll(formSelector);

    if (tabButtons && tabButtons.length > 0) {
      tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          // Remove active class from all tabs
          tabButtons.forEach((btn) => btn.classList.remove(activeTabClass));
          // Add active class to the clicked tab
          button.classList.add(activeTabClass);

          // Hide all forms
          forms.forEach((form) => form.classList.remove(activeFormClass));
          // Show the form corresponding to the clicked tab
          forms[index].classList.add(activeFormClass);
        });
      });
    }

    // Initialize the first form as active
    if (forms && forms.length > 0) {
      forms[0].classList.add(activeFormClass);
    }
  }

  // Usage
  initializeTabToggle(".tab-btn", ".tab-form");




  // apex chart
  var options = {
    series: [10, 10 , 20, 60],
    chart: {
      type: 'donut',
      width: 500,
      height: 500
    },
    colors: [ '#23a2d6','#f52226', '#edf1ee', '#FDCB3C'],
    stroke: {
      show: false,  // This removes the white border
    },
    legend: {
      show: false,
      markers: {
        width: 0,
        height: 0
      },
      position: 'bottom'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
          height: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  



function initScrollButton(config) {
  const scrollButton = document.querySelector(config.buttonSelector);
  const icon = scrollButton.querySelector(".icon");
  const progressBar = scrollButton.querySelector(".progress-bar");
  const circumference = 2 * Math.PI * 22; // Circumference for a radius of 22

  // Function to handle scroll visibility and icon change
  function handleScroll() {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;

    if (window.scrollY > config.threshold) {
      scrollButton.classList.remove("hidden"); // Show button
    } else {
      scrollButton.classList.add("hidden"); // Hide button
    }

    // Change icon based on scroll position
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      icon.classList.remove("fa-arrow-down");
      icon.classList.add("fa-arrow-up"); // Change to up arrow
    } else {
      icon.classList.remove("fa-arrow-up");
      icon.classList.add("fa-arrow-down"); // Change to down arrow
    }

    // Update progress circle based on scroll percentage
    const offset = circumference - (scrollPercentage / 100) * circumference;
    progressBar.style.strokeDashoffset = offset;
  }

  // Function to handle scroll behavior on button click
  function scrollPage() {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }

  // Attach event listeners
  window.addEventListener("scroll", handleScroll);
  scrollButton.addEventListener("click", scrollPage);

  // Initialize the scroll state
  handleScroll();
}

// Initialize the scroll button with custom settings
initScrollButton({
  buttonSelector: "#scrollButton", // CSS selector for the scroll button
  threshold: 100, // Scroll position threshold to show the button
});

// Weglot.initialize({
//   api_key: 'wg_3ee00916892780024d55c94cab75e8ee4'
// });

function initCustomDropdown(config) {
  const selectLanguage = document.querySelector(config.selector);
  const selectTrigger = selectLanguage.querySelector(config.triggerSelector);
  const languageFlag = selectLanguage.querySelector(config.flagSelector);
  const selectOptions = selectLanguage.querySelector(config.optionsSelector);
  const selectOptionsList = selectOptions.querySelectorAll(
    config.optionItemSelector
  );

  // Function to toggle dropdown visibility by adding/removing class
  function toggleDropdown() {
    selectOptions.classList.toggle("show");
  }

  // Function to handle option selection
  function selectOption(event) {
    const selectedOption = event.target;
    if (selectedOption.tagName.toLowerCase() === "li") {
      const selectedText = selectedOption.textContent;
      const selectedImage = selectedOption.getAttribute("data-img");
      const selectedLang = selectedOption.getAttribute("data-value");
      selectTrigger.querySelector("span").textContent = selectedText;
      languageFlag.src = selectedImage;
      Weglot.switchTo(selectedLang);
      selectOptions.classList.remove("show");
    }
  }

  // Function to handle clicks outside the dropdown
  function handleOutsideClick(event) {
    if (!selectLanguage.contains(event.target)) {
      selectOptions.classList.remove("show");
    }
  }

  // Attach event listeners
  selectTrigger.addEventListener("click", toggleDropdown);
  selectOptions.addEventListener("click", selectOption);
  document.addEventListener("click", handleOutsideClick);
}

// Initialize the custom dropdown
initCustomDropdown({
  selector: "#languageSelector", // CSS selector for the dropdown container
  triggerSelector: ".select-trigger", // CSS selector for the trigger element
  flagSelector: ".language-flag img", // CSS selector for the flag image
  optionsSelector: ".select-options", // CSS selector for the options container
  optionItemSelector: "li", // CSS selector for the individual options
});
initCustomDropdown({
  selector: "#languageSelector-mobile", // CSS selector for the dropdown container
  triggerSelector: ".select-trigger-mobile", // CSS selector for the trigger element
  flagSelector: "[data-mobile-flag-prev] img", // CSS selector for the flag image
  optionsSelector: ".select-options-mobile", // CSS selector for the options container
  optionItemSelector: "[options-mb]", // CSS selector for the individual options
});

  
// for header

const openMobileHeader = (toggleBtn) => {
  const btns = document.querySelectorAll(toggleBtn);
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click from triggering the document listener
      const actionBox = btn.parentNode.querySelector(
        ".mobile-header-route-box"
      );

      // Toggle the current action box
      actionBox.classList.toggle("active");

      // Close other action boxes
      document
        .querySelectorAll(".mobile-header-route-box.active")
        .forEach((box) => {
          if (box !== actionBox) {
            box.classList.remove("active");
          }
        });
    });
  });

  // Click outside to remove active class
  document.addEventListener("click", (event) => {
    document
      .querySelectorAll(".mobile-header-route-box.active")
      .forEach((box) => {
        if (!box.contains(event.target)) {
          box.classList.remove("active");
        }
      });
  });
};

openMobileHeader("#open-mobile-header");






  

});
