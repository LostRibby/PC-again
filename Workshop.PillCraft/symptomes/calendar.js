//! evenements stockés 
let events = JSON.parse(localStorage.getItem("events")) || {};

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

//var pour suppression 
let selectedDate = null;
let selectedTitle = null;


//! Afficher le calendrier 


function generateCalendar(year, month) {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";

    document.getElementById("current-month").textContent =
        new Date(year, month).toLocaleString("fr-FR", {
            month: "long",
            year: "numeric"
        });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        calendar.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr =
            `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        const dayDiv = document.createElement("div");
        dayDiv.className = "day";

        // Vérifier si c'est aujourd'hui
        const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

        if (isToday) {
            dayDiv.classList.add("today");
        }

        const number = document.createElement("div");
        number.className = "day-number";
        number.textContent = day;
        dayDiv.appendChild(number);

        if (events[dateStr]) {
            events[dateStr].forEach(ev => {
                const evDiv = document.createElement("div");
                evDiv.className = "event";
                evDiv.textContent = ev;
                evDiv.onclick = () => showEvent(dateStr, ev);
                dayDiv.appendChild(evDiv);
            });
        }

        calendar.appendChild(dayDiv)
    }
}


//!ajout d'evenements 


  function addEvent() {
    const date = document.getElementById("event-date").value;
    const title = document.getElementById("event-title").value;

    if (!date || !title) {
      alert("Veillez à remplir tous les champs.");
      return;
    }

    if (!events[date]) events[date] = [];
    events[date].push(title);

    localStorage.setItem("events", JSON.stringify(events));
    generateCalendar(currentYear, currentMonth);

    document.getElementById("event-title").value = "";
  }


//!Afficher l'evenement


function showEvent(date, title) {
    selectedDate = date;
    selectedTitle = title;

    document.getElementById("event-viewer-date").textContent = date;
    document.getElementById("event-viewer-title").textContent = title;

    document.getElementById("event-viewer").style.display = "block";

    //btn supp 
    document.getElementById("delete-Btn").onclick = deleteEvent;
}

//!Suppression

function deleteEvent() {
    if (!selectedDate || !selectedTitle) return;

    events[selectedDate] = events[selectedDate].filter(ev => ev !== selectedTitle);

    if (events[selectedDate].length === 0) {
        delete events[selectedDate];
    }

    localStorage.setItem("events", JSON.stringify(events));

    generateCalendar(currentYear, currentMonth);
    closeEventViewer();
}

function closeEventViewer() {
    document.getElementById("event-viewer").style.display = "none";
}


//!Navigation


function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
}

generateCalendar(currentYear, currentMonth); 