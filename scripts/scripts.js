// Credit Card Expiry Picker Prototype
let clickCount = 0;
let selectedMonth = null;
let selectedYear = null;
let startTime = null;
let endTime = null;

const monthGrid = document.getElementById("monthGrid");
const yearGrid = document.getElementById("yearGrid");
const resultBox = document.getElementById("resultBox");
const clickCountSpan = document.getElementById("clickCount");

// Start timing when user begins interacting
function startTimer() {
  // only start if not running
  if (!startTime) {
    startTime = Date.now();
    console.log("⏱️ Timer started...");
  }
}

// Update displayed result and metrics
function updateResult() {
  clickCountSpan.textContent = clickCount;

  // both month and year selected
  if (selectedMonth && selectedYear) {
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    resultBox.classList.replace("alert-info", "alert-success");
    resultBox.textContent = `✅ Selected: ${String(selectedMonth).padStart(2,"0")}/${selectedYear} in ${duration}s`;
    console.log(`✅ Selected expiry: ${selectedMonth}/${selectedYear} | Clicks: ${clickCount} | Time: ${duration}s`);

    // reset for next run
    startTime = null;
    clickCount = 0;
    selectedMonth = null;
    selectedYear = null;
  } else {
    resultBox.textContent = "Select month and year.";
  }
}

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

export { updateResult };
