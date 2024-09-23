document.addEventListener("DOMContentLoaded", () => {
    const batteryLevelElement = document.getElementById('battery-level');
    const batteryFill = document.getElementById('battery-fill');
    const chargingStatusElement = document.getElementById('charging-status');
    const chargingSpeedElement = document.getElementById('charging-speed');
    const timeUntilFullElement = document.getElementById('time-until-full');
    const darkModeSwitch = document.getElementById('dark-mode-switch');
  
    let previousBatteryLevel = null;
    let chargingSpeed = null;
  
    // Load dark mode preference from localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark', isDarkMode);
    darkModeSwitch.checked = isDarkMode;
  
    // Dark mode toggle event
    darkModeSwitch.addEventListener('change', () => {
      const darkModeEnabled = darkModeSwitch.checked;
      document.body.classList.toggle('dark', darkModeEnabled);
      localStorage.setItem('darkMode', darkModeEnabled);
    });
  
    // Create particle elements
    createFloatingParticles();
  
    // Battery API
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        // Initial battery level and status
        updateBatteryStatus(battery);
        updateChargingSpeed(battery);
  
        // Event listeners for changes in battery state
        battery.addEventListener('levelchange', () => {
          updateBatteryStatus(battery);
          updateChargingSpeed(battery);
        });
        battery.addEventListener('chargingchange', () => {
          updateBatteryStatus(battery);
          updateChargingSpeed(battery);
        });
      });
    } else {
      alert("Battery API not supported by your browser.");
    }
  
    function updateBatteryStatus(battery) {
      const level = battery.level * 100;
      batteryLevelElement.textContent = Math.round(level);
      batteryFill.style.height = `${level}%`;
  
      chargingStatusElement.textContent = battery.charging
        ? "Status: Charging"
        : "Status: Disconnected";
    }
  
    function updateChargingSpeed(battery) {
      if (previousBatteryLevel !== null && battery.charging) {
        const currentBatteryLevel = battery.level * 100;
        const speed = currentBatteryLevel - previousBatteryLevel;
  
        chargingSpeed = speed;  // Update global charging speed variable
        chargingSpeedElement.textContent = speed.toFixed(2);
  
        // Estimate time remaining to full charge
        const timeRemaining = (100 - currentBatteryLevel) / speed;
        timeUntilFullElement.textContent = `${timeRemaining.toFixed(2)} minutes`;
      }
  
      previousBatteryLevel = battery.level * 100;
    }
  
    function createFloatingParticles() {
      const particleContainer = document.createElement('div');
      particleContainer.classList.add('particle-background');
      document.body.appendChild(particleContainer);
  
      // Generate random floating particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        setParticleStyles(particle);
        particleContainer.appendChild(particle);
        animateParticle(particle);
      }
    }
  
    function setParticleStyles(particle) {
      const size = Math.random() * 10 + 10; // Random size between 10 and 20px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`; // Random position
      particle.style.bottom = `-${Math.random() * 10}vh`; // Slightly below the viewport
    }
  
    function animateParticle(particle) {
      const duration = Math.random() * 8 + 5; // Animation duration between 5 and 13s
      particle.style.animationDuration = `${duration}s`;
    }
  });
  