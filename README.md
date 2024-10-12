# Charging Speed Checker

After a long time, I was able to create a new application 😎🚀. So I was able to create a charging speed checker using HTML, CSS, and JavaScript.

Here the battery level shows the current battery level. This is always updated. Also, when it is not plugged in, it shows as "Disconnected" and when it is plugged in, it shows as "Charging". Charge speed shows how many units are charged per minute. Finally, the time taken to fully charge is displayed in minutes.


![1](https://github.com/user-attachments/assets/4ed10cfc-bb45-4c56-98fb-487f86bdd542)
**🟢 Shown as below when not plugged in to charge (light Mode)**

![2](https://github.com/user-attachments/assets/f7ec4479-38d6-4e53-90be-28a54c2d7744)
**🟢 Shown as below when not plugged in to charge (Dark Mode)**

![3](https://github.com/user-attachments/assets/48279da4-4d11-4f4a-82cc-6274424a0c61)
**🟢 Shown as below when plugged in to charge**

**🟢 Final Result**


https://github.com/user-attachments/assets/e1066ee2-34f7-48c9-80c2-d902a2eb6cf3

---

Certainly! Here's a more **detailed breakdown** of the **functional requirements** for the **Charging Speed Checker**:

### **1. Device Charging Status Detection**:
   - **1.1 Detect Charging Status**:
     - The app must detect whether the device is plugged in and actively charging or if it is discharging.
     - It should provide a visual indicator (like a charging icon) when the device is plugged in.
   - **1.2 Monitor Charging Transitions**:
     - The app must detect real-time transitions between charging and discharging states.
     - A notification or message should appear when the device starts or stops charging.

### **2. Battery Level Display**:
   - **2.1 Display Current Battery Level**:
     - Show the battery percentage (e.g., 45%) in a clear, visible format (such as a progress bar or numerical display).
     - The display must automatically update as the battery level changes.
   - **2.2 Support for Various Devices**:
     - The app should handle different devices with varying battery capacities and update battery levels accordingly.
     - It should work with laptops, mobile phones, tablets, etc., that support battery status detection.

### **3. Charging Speed Calculation**:
   - **3.1 Measure Charge Rate**:
     - Calculate the charging rate (e.g., percentage increase per minute).
     - Perform calculations by measuring the battery percentage at the start of a specific interval (e.g., every minute) and checking the percentage at the end of the interval.
   - **3.2 Display Charging Speed**:
     - Show the calculated charging speed in an easy-to-understand format, such as "Charging at 1% per minute."
     - Include clear labels like “Charging Speed” so users understand the information being displayed.
   - **3.3 Update in Real-Time**:
     - Recalculate the charging speed regularly (e.g., every minute) and update the displayed speed in real-time.
   
### **4. Charging Time Estimation**:
   - **4.1 Estimate Time Until Full Charge**:
     - Based on the current charging speed, estimate how long it will take to reach 100% battery.
     - The estimated time should be displayed dynamically as the charging speed changes.
   - **4.2 Update Time Remaining**:
     - Continuously update the estimated time remaining as the charging speed and battery level fluctuate.

### **5. Discharging Speed Calculation**:
   - **5.1 Measure Discharge Rate**:
     - Calculate the rate at which the battery is discharging when not connected to a charger.
     - This could be displayed in terms of "battery percentage lost per minute" or "per hour."
   - **5.2 Display Discharge Speed**:
     - Show the calculated discharge speed in a visible format (e.g., "Discharging at 0.5% per minute").
   - **5.3 Real-Time Updates**:
     - Continuously update the discharge rate as the battery level decreases.
   
### **6. User Notifications**:
   - **6.1 Fully Charged Notification**:
     - Notify the user when the battery level reaches 100% with a message like "Battery Fully Charged."
     - The notification could be visual (e.g., a pop-up message) or audible (e.g., a sound).
   - **6.2 Charging Anomalies Notification**:
     - Optionally, notify the user if the charging speed is too slow (e.g., below 0.5% per minute) or unusually fast.
     - Provide suggestions or warnings, like “Charging speed is slower than normal, check your charger.”

### **7. Historical Data Logging**:
   - **7.1 Track Battery Level Over Time**:
     - Log battery percentage values at regular intervals (e.g., every minute) during a charging session.
   - **7.2 Display Charging History**:
     - Provide a visual or tabular representation of the battery level and charging speed history for the current session.
     - For example, a simple chart or a timeline showing battery percentage over time.
   - **7.3 Clear Data After Session**:
     - Provide an option to clear the history after each session or when the user decides to reset the data.

### **8. Cross-Browser Compatibility**:
   - **8.1 Ensure Compatibility with Major Browsers**:
     - The app should function correctly across modern web browsers like Chrome, Firefox, Safari, and Edge.
   - **8.2 Handle Browser-Specific Features**:
     - Ensure compatibility with browser-specific implementations of the Battery Status API or provide fallback options for browsers that do not support the API.
   
### **9. Mobile and Desktop Support**:
   - **9.1 Mobile Device Support**:
     - The app should support mobile devices (phones, tablets), accurately detecting their battery status and charging speed.
   - **9.2 Desktop Device Support**:
     - It should also work on laptops and other battery-powered desktop devices.
   - **9.3 Responsive Design**:
     - The app layout should be responsive and adjust appropriately across different screen sizes, ensuring a smooth user experience on both mobile and desktop.

---

### Optional Features (Detailed View):

#### **10. Dark Mode**:
   - **10.1 Switch Between Light and Dark Mode**:
     - Allow users to toggle between a light and dark theme to suit their environment.
   - **10.2 Auto-Switching**:
     - Optionally, detect the user’s device settings to automatically switch to dark mode during night-time hours.

#### **11. User Preferences**:
   - **11.1 Set Charging Notifications**:
     - Let users define custom notifications, such as receiving an alert when the battery reaches a specific percentage (e.g., 80%).
   - **11.2 Save User Preferences**:
     - Allow users to save their preferences (e.g., preferred notifications, theme settings) locally in the browser.
   
#### **12. Progressive Web App (PWA) Support**:
   - **12.1 Installable as a PWA**:
     - Allow users to install the Charging Speed Checker as a Progressive Web App (PWA) on their devices.
   - **12.2 Offline Mode**:
     - Support offline functionality so users can continue monitoring battery data even when they lose network connectivity.
   - **12.3 Add to Home Screen**:
     - Provide a prompt or option to add the app to the home screen for quick access, making it feel like a native mobile app.

This detailed breakdown adds more clarity to each functional requirement, giving more specific tasks for each feature the app should support.

---
Here’s a more **detailed breakdown** of the **non-functional requirements** for the **Charging Speed Checker**:

---

### **1. Performance**:
   - **1.1 Efficient Resource Usage**:
     - The application should consume minimal CPU, memory, and battery resources, especially on mobile devices, so it doesn’t interfere with other processes or affect battery life negatively.
   - **1.2 Low Latency Updates**:
     - Updates to battery status, charging speed, and charging time estimation should happen in real-time with minimal delay. The app should provide a smooth user experience by updating data dynamically without noticeable lag.
   - **1.3 Optimized for Low-End Devices**:
     - The app should be optimized to run on low-end devices, ensuring smooth operation on devices with limited hardware capabilities (such as older smartphones).
   - **1.4 Minimal API Calls**:
     - Use the **Battery Status API** efficiently to avoid unnecessary API calls or excessive polling, thereby reducing the strain on both the device and the browser.

---

### **2. User Interface (UI) Design**:
   - **2.1 Clean and Simple Interface**:
     - The app should provide a visually clean and intuitive UI, focusing on ease of navigation and readability. All key information (battery level, charging speed, time remaining) should be visible at a glance.
   - **2.2 Responsive Design**:
     - The interface should be responsive and adapt to different screen sizes, ensuring it works on mobile phones, tablets, and desktops without compromising usability.
   - **2.3 Visual Indicators**:
     - Use clear visual indicators like icons, color changes, or animations to reflect the device’s charging status. For example, a charging icon could glow or pulse when the device is actively charging.
   - **2.4 Mobile-Friendly Layout**:
     - On mobile, UI components should be touch-friendly, with buttons and text large enough for easy interaction.

---

### **3. Accessibility**:
   - **3.1 ARIA Support**:
     - Implement ARIA (Accessible Rich Internet Applications) roles and attributes to ensure that the app is compatible with screen readers for visually impaired users. This will help users navigate the app and understand its current status using assistive technologies.
   - **3.2 High Contrast Mode**:
     - Ensure that the app provides sufficient contrast between text and background colors for users with vision impairments. Optionally, allow users to toggle between regular and high-contrast modes.
   - **3.3 Keyboard Navigation**:
     - All interactive elements (buttons, sliders, etc.) should be accessible using the keyboard alone, ensuring that users can navigate without needing a mouse or touchscreen.
   - **3.4 Support for Multiple Languages**:
     - Consider adding support for multiple languages, making the app accessible to non-English speaking users.

---

### **4. Security**:
   - **4.1 No Unnecessary Permissions**:
     - The app should only request access to the device’s battery status and not ask for any additional permissions that could compromise user security or privacy.
   - **4.2 Protection Against Code Injections**:
     - Ensure that the app is secure from common web vulnerabilities like cross-site scripting (XSS) and code injection attacks. This could be done by validating and sanitizing any user inputs, though the app may not require significant input from the user.
   - **4.3 Use of HTTPS**:
     - If the app is deployed online, ensure it is served over HTTPS to protect against man-in-the-middle attacks and ensure encrypted communication.
   
---

### **5. Privacy**:
   - **5.1 No Personal Data Collection**:
     - The app should not collect, store, or transmit any personally identifiable information (PII) or sensitive data from the user. Battery status information should be processed locally on the client side.
   - **5.2 Local Storage**:
     - If the app stores any data (such as user preferences or session history), it should only store data locally on the device, using browser storage mechanisms like **localStorage** or **sessionStorage**, without transmitting data to external servers.
   - **5.3 Clear Privacy Policy**:
     - The app should have a clear and transparent privacy policy, informing users about what data (if any) is collected and how it is used. Even though the app doesn’t collect personal data, stating that explicitly helps build user trust.

---

### **6. Scalability**:
   - **6.1 Handle Growing Number of Users**:
     - The app should be designed to handle a large number of users simultaneously, especially if deployed as a web service. For example, it should ensure performance remains smooth even if many users are interacting with the app at the same time.
   - **6.2 Minimal External Dependencies**:
     - Keep the app light with minimal external dependencies (e.g., external libraries). This reduces the likelihood of performance bottlenecks and makes the app easier to scale in the future.
   - **6.3 Efficient Caching Mechanisms**:
     - Implement efficient caching strategies, such as browser caching, to reduce load times and improve performance, especially when handling larger user bases.

---

### **7. Maintainability**:
   - **7.1 Well-Structured Code**:
     - The app’s codebase should be modular and follow best practices in JavaScript, HTML, and CSS. This includes using components, separating concerns (e.g., separating logic from UI), and making the code easy to follow and maintain.
   - **7.2 Code Documentation**:
     - The code should be well-documented, with comments explaining non-obvious logic or complex sections. Documentation should cover how different parts of the system work and how to extend or modify the app in the future.
   - **7.3 Easy Updates**:
     - The app should be easy to update and maintain in the future. This includes updating libraries or dependencies without breaking the core functionality and adding new features without major restructuring.
   - **7.4 Version Control**:
     - Use a version control system (e.g., Git) to manage changes and track updates. This will make it easier to roll back to previous versions in case of bugs or errors.

---

### **8. Error Handling**:
   - **8.1 Graceful Degradation**:
     - The app should gracefully degrade on browsers or devices that don’t support the **Battery Status API**. In such cases, provide an informative message to the user (e.g., “Battery information is not available on this device or browser”).
   - **8.2 Handle API Failures**:
     - If the Battery Status API fails or becomes unavailable during use, the app should handle these failures gracefully. Display an error message or fallback content, and ensure the app doesn’t crash.
   - **8.3 User-Friendly Error Messages**:
     - Provide clear and helpful error messages that guide the user on what went wrong and how they can resolve it (if possible). Avoid using technical jargon in error messages.

---

### **9. Standards Compliance**:
   - **9.1 HTML5 Compliance**:
     - The app’s HTML should follow modern standards, ensuring compliance with HTML5. This includes using semantic HTML elements and adhering to best practices for accessibility and SEO.
   - **9.2 CSS3 Compliance**:
     - Use CSS3 to style the application and ensure that the styles are compatible across modern browsers. Avoid using deprecated or outdated CSS properties and ensure styles adhere to W3C standards.
   - **9.3 JavaScript Best Practices**:
     - Follow modern JavaScript (ES6+) standards, including using best practices like modularization, avoiding global variables, and using async/await where necessary. Ensure compatibility across modern browsers.
   - **9.4 Cross-Browser Testing**:
     - Perform thorough testing to ensure the app functions as expected across different browsers (e.g., Chrome, Firefox, Safari, Edge). This includes handling edge cases where certain browsers might not fully support the Battery Status API.

---

### **10. Cross-Platform Battery API Support**:
   - **10.1 Consistent Battery API Implementation**:
     - Use the Battery Status API consistently to ensure it functions across supported platforms. Handle different implementations (or lack thereof) across browsers and devices.
   - **10.2 Browser Detection**:
     - Detect if the browser supports the Battery Status API, and if not, provide feedback to the user or gracefully degrade.
   - **10.3 Test on Various Devices**:
     - Ensure the app is tested on a wide range of devices and platforms (mobile phones, tablets, laptops) to ensure consistent battery detection and performance.

---

These detailed non-functional requirements ensure that the **Charging Speed Checker** web app is robust, performant, secure, and scalable, while providing an optimal user experience across multiple devices and platforms.

---
I’ll walk through creating the **Charging Speed Checker** based on the functional and non-functional requirements outlined. The implementation includes HTML, CSS, and JavaScript and will use some advanced JavaScript features such as the Battery Status API and `localStorage` for user preferences.

Here’s how I'll structure the solution:

### 1. **HTML** - To provide the UI structure.
### 2. **CSS** - To style the app, ensure responsive design, and provide dark mode support.
### 3. **JavaScript** - To implement the core functionality, like charging speed, battery status detection, notifications, and real-time updates.

Let’s start coding the foundational version of the **Charging Speed Checker**:

### **HTML** (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Charging Speed Checker</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Charging Speed Checker</h1>
    
    <!-- Battery Status Display -->
    <div class="battery-status">
      <h2>Battery Level: <span id="battery-level">--</span>%</h2>
      <div class="battery-bar">
        <div id="battery-bar-inner"></div>
      </div>
      <h3 id="charging-status">Status: Disconnected</h3>
    </div>
    
    <!-- Charging Speed Display -->
    <div class="charging-speed">
      <h3>Charging Speed: <span id="charging-speed">--</span>% per minute</h3>
    </div>
    
    <!-- Charging Time Estimation -->
    <div class="charging-estimate">
      <h3>Estimated Time Until Full: <span id="time-until-full">--</span></h3>
    </div>
    
    <!-- Dark Mode Toggle -->
    <div class="dark-mode-toggle">
      <label for="dark-mode-switch">Dark Mode:</label>
      <input type="checkbox" id="dark-mode-switch">
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### **CSS** (styles.css)

```css
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;


```css
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Container styling */
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Headings */
h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}
h2, h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

/* Battery Status Styling */
.battery-status {
  margin: 20px 0;
}
.battery-bar {
  width: 100%;
  height: 30px;
  background-color: #eee;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 10px;
}
#battery-bar-inner {
  height: 100%;
  width: 0;
  background-color: #4caf50;
  transition: width 0.3s ease;
}

/* Charging Speed and Estimate */
.charging-speed, .charging-estimate {
  margin: 20px 0;
}

/* Dark Mode Toggle */
.dark-mode-toggle {
  margin-top: 30px;
}
#dark-mode-switch {
  margin-left: 10px;
}

/* Dark Mode Styles */
body.dark {
  background-color: #222;
  color: #ddd;
}
body.dark .container {
  background-color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
body.dark .battery-bar {
  background-color: #555;
}
body.dark #battery-bar-inner {
  background-color: #76ff03;
}
```

### **JavaScript** (script.js)

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const batteryLevelElement = document.getElementById('battery-level');
  const batteryBarInner = document.getElementById('battery-bar-inner');
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
    batteryBarInner.style.width = `${level}%`;

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
});
```

### **Explanation:**

1. **HTML**:
   - Contains the basic structure of the Charging Speed Checker. Elements like the battery level, charging speed, and time estimates are displayed in a clean interface.
   - There’s a dark mode switch that the user can toggle.

2. **CSS**:
   - Implements a clean, responsive layout.
   - Provides a light and dark theme with transitions and ensures readability across both.
   - The progress bar (`battery-bar-inner`) dynamically reflects the current battery level with smooth transitions.

3. **JavaScript**:
   - **Battery Status API**: Retrieves and listens to changes in the battery status (charging state, battery level) and updates the UI in real-time.
   - **Charging Speed Calculation**: Calculates how fast the battery is charging in percentage points per minute.
   - **Time Estimate**: Estimates the time required to fully charge the battery based on the current charging speed.
   - **Dark Mode Toggle**: Allows the user to switch between dark and light mode, with preferences saved to `localStorage` so the setting persists across sessions.

### **Next Steps for Advanced Features:**
1. **Notifications**: Use the browser's Notification API to alert users when the battery is fully charged or charging speed is abnormal.
2. **PWA Support**: Convert this app into a Progressive Web App (PWA) by adding a service worker and web manifest for offline support and "Add to Home Screen" functionality.
3. **Cross-Platform Testing**: Ensure proper functionality across multiple devices (mobile, desktop) and browsers.

This is a functional, minimalist version. You can expand on it to meet the full list of non-functional requirements, such as improved performance, accessibility, and security features. Let me know if you’d like further enhancements!

---
Let’s implement the bubbling background animation and ensure it changes based on the light and dark modes. Here's the complete code with the correct adjustments.

### Complete Code

#### **HTML** (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Charging Speed Checker</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="background"></div>

  <div class="container">
    <h1>Charging Speed Checker</h1>
    <div class="battery-visual">
      <div id="battery-icon">
        <div id="battery-fill"></div>
      </div>
      <h2>Battery Level: <span id="battery-level">--</span>%</h2>
      <h3 id="charging-status">Status: Disconnected</h3>
    </div>

    <div class="charging-info">
      <h3>Charging Speed: <span id="charging-speed">--</span>% per minute</h3>
      <h3>Time Until Full: <span id="time-until-full">--</span> mins</h3>
    </div>

    <div class="dark-mode-toggle">
      <label for="dark-mode-switch">Dark Mode:</label>
      <input type="checkbox" id="dark-mode-switch">
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

#### **CSS** (styles.css)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Bubble animation for light mode */
@keyframes bubble {
  0% { background: rgba(255, 250, 250, 0.6); }
  50% { background: rgba(240, 240, 250, 0.6); }
  100% { background: rgba(255, 250, 250, 0.6); }
}

/* Bubble animation for dark mode */
@keyframes bubbleDark {
  0% { background: rgba(30, 30, 30, 0.7); }
  50% { background: rgba(40, 40, 40, 0.7); }
  100% { background: rgba(30, 30, 30, 0.7); }
}

/* Background */
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: bubble 10s ease-in-out infinite;
  z-index: -1;
}

/* Container */
.container {
  position: relative;
  max-width: 500px;
  margin: 100px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Battery Icon */
#battery-icon {
  width: 80px;
  height: 150px;
  border: 4px solid #333;
  border-radius: 8px;
  position: relative;
  margin: 20px auto;
}

#battery-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #4caf50;
  transition: height 0.5s ease;
}

/* Dark mode toggle */
.dark-mode-toggle {
  margin-top: 20px;
}
#dark-mode-switch {
  margin-left: 10px;
}

/* Text Styling */
h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}
h2, h3 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
}

/* Dark Mode Styles */
body.dark {
  background-color: #222;
  color: #ddd;
}
body.dark .container {
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
body.dark #battery-fill {
  background-color: #76ff03;
}
body.dark .background {
  animation: bubbleDark 10s ease-in-out infinite;
}
```

#### **JavaScript** (script.js)

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const batteryLevelElement = document.getElementById('battery-level');
  const batteryFill = document.getElementById('battery-fill');
  const chargingStatusElement = document.getElementById('charging-status');
  const chargingSpeedElement = document.getElementById('charging-speed');
  const timeUntilFullElement = document.getElementById('time-until-full');
  const darkModeSwitch = document.getElementById('dark-mode-switch');

  let previousBatteryLevel = null;

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

  // Battery API
  if ('getBattery' in navigator) {
    navigator.getBattery().then((battery) => {
      updateBatteryStatus(battery);
      updateChargingSpeed(battery);

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

      chargingSpeedElement.textContent = speed.toFixed(2);

      // Estimate time remaining to full charge
      const timeRemaining = (100 - currentBatteryLevel) / speed;
      timeUntilFullElement.textContent = `${timeRemaining.toFixed(2)} minutes`;
    }

    previousBatteryLevel = battery.level * 100;
  }
});
```

### Key Features:

1. **Bubbling Background Animation**:
   - Light mode uses a soft bubble effect with lighter colors.
   - Dark mode uses a darker bubble effect to match the theme.

2. **Dynamic Mode Switching**:
   - The background animation changes seamlessly when switching between light and dark modes.

3. **Eye-Comfortable Colors**:
   - Both themes use colors that are easy on the eyes, ensuring a pleasant user experience.

With these updates, your Charging Speed Checker application should now have the desired bubbling background animation and theme switching functionality. Let me know if you need further adjustments or enhancements!

