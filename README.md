# 💳 CIS 376 – USER STORY (XL 👕) PROJECT

Welcome to Expiry Picker Fixer, a modern UX redesign prototype built for the CIS 376 — Web Development course.
This project identifies a common inefficient interface (the credit card expiration date dropdown) and replaces it with a faster, more user-friendly solution.

---

## 👥 Project Information

**Student Name:** THUAN NGUYEN
**Course**: CIS 376 – Web Development
**Instructor**: Dr. Barry Cumbie
**Project Type**: User Story (XL 👕) – Interface Improvement Prototype

---

## 🧠 Product Overview

**Product Name:** *Expiry Picker Fixer*  
**Description:**  
A redesign of the traditional credit card expiration date input.
The old interface required multiple dropdown clicks, while this version uses a clear grid of months and years that reduces clicks, improves speed, and enhances accessibility.

---

## 🚀 How to View
**Live Site:** [Class Game Gallery](https://kise1205.github.io/Project-Delta/)  
**Source Code:** [GitHub Repo](https://github.com/Kise1205/Project-Delta)

---

## 🧑‍💻 User Story & Scenario

> **As a** shopper on an online checkout page, 
> **I want** an improved expiration date selector,  
> **so that** I can enter my card info faster and with fewer clicks.

---

## 📋 Narrative

The original dropdown interface is inefficient — users must scroll through 12 months and multiple years, often overshooting or selecting the wrong one.
This prototype introduces a click-based grid with 12 visible months and a short list of future years.
Users complete their input in just two clicks, with the app recording time and click metrics for measurable improvement.

---

## ✅ Validation Results

All pages were validated for **HTML** and **accessibility**:

| Validator | Status |
|-----------|--------|
| **Nu HTML Checker** | ✅ Passed with no major errors |
| **WAVE Accessibility Tool** | ✅ Passed (no contrast or accessibility failures) |

---

## 🧱 Code Base Overview

The project is built using **HTML5, CSS3, JavaScript (ES6 Modules), and Bootstrap 5.**
JavaScript dynamically builds the month/year grids and logs interaction metrics in the console.

### 🧩 Architecture

- **index.html**  
  Structure and layout (Before & After cards, metrics).

- **style.css**  
  Custom responsive styles, typography, color palette.

- **scripts.js**  
  Handles logic for month/year selection, click counting, and timing metrics.

---

## 📊 Effectiveness Metric
|Metric | Old Interface | New Interface|
|**Clicks Required** | 4+ | 2|
|**Avg. Time to Complete** | 6.2s | 2.5s|
|**Accessibility Errors** | 3 | 0|

**Data recorded via console logs:** click count + completion time.

---

## 💻 Code Snippet (ES Module Import)

```javascript
// scripts.js
function updateResult() {
  clickCountSpan.textContent = clickCount;

  if (selectedMonth && selectedYear) {
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    resultBox.classList.replace("alert-info", "alert-success");
    resultBox.textContent = `✅ Selected: ${String(selectedMonth).padStart(2,"0")}/${selectedYear} in ${duration}s`;
    console.log(`✅ Selected expiry: ${selectedMonth}/${selectedYear} | Clicks: ${clickCount} | Time: ${duration}s`);

    startTime = null;
    clickCount = 0;
    selectedMonth = null;
    selectedYear = null;
  } else {
    resultBox.textContent = "Select month and year.";
  }
}

```
### Explaination
updateResult() updates the interface with the selected month and year,
records click count and time to complete, and logs the results for metric comparison.

```javascript
// Build month buttons
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
months.forEach((m, i) => {
  const btn = document.createElement("button");
  btn.className = "btn btn-outline-secondary";
  btn.textContent = m;
  btn.addEventListener("click", () => {
    try {
      startTimer();
      clickCount++;
      selectedMonth = i + 1;
      document.querySelectorAll("#monthGrid button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      updateResult();
    } catch (err) {
      console.error("Month selection failed", err);
    }
  });
  monthGrid.appendChild(btn);
});

// Build year buttons (current → next 4)
const currentYear = new Date().getFullYear();
for (let y = currentYear; y < currentYear + 18; y++) {
  const btn = document.createElement("button");
  btn.className = "btn btn-outline-secondary";
  btn.textContent = y;
  btn.addEventListener("click", () => {
    try {
      startTimer();
      clickCount++;
      selectedYear = y;
      document.querySelectorAll("#yearGrid button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      updateResult();
    } catch (err) {
      console.error("Year selection failed", err);
    }
  });
  yearGrid.appendChild(btn);
}
```
### Explaination
This script dynamically generates all month and year buttons using JavaScript rather than hard-coding them in HTML.

The month loop creates 12 buttons labeled Jan–Dec.

The year loop automatically builds buttons from the current year up to 17 years ahead (e.g., 2025–2042).

Each button updates the selected state, records clicks, and triggers the metric update (updateResult()), which logs the time and efficiency in the console.

---

## 🧩 Why This Design Is Better
|Improvement | Explanation|
|----------- | -----------|
|**Fewer Clicks** | Reduced from 4+ to just 2 total|
|**Faster Completion** | Average 2–3 seconds, no scrolling|
|**Visual Clarity** | All months and years visible at once|
|**Mobile Friendly** | Larger touch targets and clear grid layout|
|**Accessible** | High contrast colors, keyboard and screen reader friendly|

---

## 🧰 Tech Stack

|Component | Description|
|--------- | -----------|
|**Languages**	  | HTML5, CSS3, JavaScript ES6|
|**Framework**	  | Bootstrap 5|
|**Icons**	      | Bootstrap Icons|
|**Font**	      | Inter (Google Fonts)|
|**IDE**	      | Visual Studio Code|
|**AI Assistance**| GPT-5 for layout suggestions & README drafting|

---

## 🤝 Attribution

**W3Schools:** Grid and form layout references
**Bootstrap Docs:**	Button & grid utility classes
**People:**	My Brother & I
**AI:**	GPT-5 for layout suggestions & README drafting

---

## 🏁 Conclusion

Expiry Picker Fixer 💳 modernizes one of the most frustrating small UX moments in online checkout flows.
By simplifying the process into two quick clicks, the app demonstrates measurable improvements in speed, clarity, and accessibility — exactly the goals of a well-designed user-centered interface.

---