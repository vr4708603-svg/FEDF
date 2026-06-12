// Shared Database State Controller for Vanilla Portals

const initialDoctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialization: "Cardiologist",
    experience: 10,
    fee: 500,
    email: "john.smith@medicare.com",
    rating: 4.8,
    availability: { Monday: true, Tuesday: true, Wednesday: true, Thursday: false, Friday: true, Saturday: false, Sunday: false },
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Dr. Sarah Lee",
    specialization: "Dermatologist",
    experience: 8,
    fee: 400,
    email: "sarah.lee@medicare.com",
    rating: 4.9,
    availability: { Monday: true, Tuesday: false, Wednesday: true, Thursday: true, Friday: false, Saturday: true, Sunday: false },
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Dr. David Wilson",
    specialization: "Neurologist",
    experience: 12,
    fee: 700,
    email: "david.wilson@medicare.com",
    rating: 4.7,
    availability: { Monday: false, Tuesday: true, Wednesday: false, Thursday: true, Friday: true, Saturday: false, Sunday: false },
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    name: "Dr. Emily Taylor",
    specialization: "Pediatrician",
    experience: 15,
    fee: 600,
    email: "emily.taylor@medicare.com",
    rating: 5.0,
    availability: { Monday: true, Tuesday: true, Wednesday: true, Thursday: true, Friday: true, Saturday: false, Sunday: false },
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    name: "Dr. Robert Carter",
    specialization: "Neurologist",
    experience: 14,
    fee: 800,
    email: "robert.carter@medicare.com",
    rating: 4.8,
    availability: { Monday: true, Tuesday: true, Wednesday: false, Thursday: true, Friday: false, Saturday: true, Sunday: false },
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    name: "Dr. Lisa Adams",
    specialization: "Cardiologist",
    experience: 9,
    fee: 450,
    email: "lisa.adams@medicare.com",
    rating: 4.6,
    availability: { Monday: false, Tuesday: true, Wednesday: true, Thursday: false, Friday: true, Saturday: false, Sunday: true },
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=200",
  }
];

const initialUsers = [
  {
    email: "patient@medicare.com",
    password: "password",
    name: "Jane Doe",
    role: "patient",
    age: 28,
    gender: "Female",
    bloodGroup: "O+",
    phone: "+1 (555) 019-2834",
    address: "123 Main St, New York, NY",
    history: ["Mild Asthma", "Seasonal Allergies"],
    healthScore: 78
  },
  { email: "john.smith@medicare.com", password: "password", name: "Dr. John Smith", role: "doctor", doctorId: 1 },
  { email: "sarah.lee@medicare.com", password: "password", name: "Dr. Sarah Lee", role: "doctor", doctorId: 2 },
  { email: "david.wilson@medicare.com", password: "password", name: "Dr. David Wilson", role: "doctor", doctorId: 3 },
  { email: "emily.taylor@medicare.com", password: "password", name: "Dr. Emily Taylor", role: "doctor", doctorId: 4 },
  { email: "robert.carter@medicare.com", password: "password", name: "Dr. Robert Carter", role: "doctor", doctorId: 5 },
  { email: "lisa.adams@medicare.com", password: "password", name: "Dr. Lisa Adams", role: "doctor", doctorId: 6 },
  { email: "admin@medicare.com", password: "password", name: "Super Admin", role: "admin" }
];

const initialAppointments = [
  {
    id: 101,
    doctorId: 1,
    doctorName: "Dr. John Smith",
    patientName: "Jane Doe",
    patientEmail: "patient@medicare.com",
    date: "2026-06-12",
    time: "10:30",
    reason: "Routine cardiac checkup, mild chest pressure when running",
    status: "Approved",
    prescription: null
  },
  {
    id: 102,
    doctorId: 2,
    doctorName: "Dr. Sarah Lee",
    patientName: "Jane Doe",
    patientEmail: "patient@medicare.com",
    date: "2026-06-15",
    time: "14:00",
    reason: "Follow-up for eczema treatment review",
    status: "Completed",
    prescription: {
      diagnosis: "Atopic Dermatitis - Improving",
      medicines: [
        { name: "Hydrocortisone Cream 1%", dosage: "Apply twice daily", duration: "7 days" },
        { name: "Cetirizine 10mg", dosage: "1 tablet at night", duration: "10 days" }
      ]
    }
  }
];

const initialReminders = [
  { id: 1, name: "Cetirizine 10mg", time: "21:00", dosage: "1 tablet", completed: false, patientEmail: "patient@medicare.com" },
  { id: 2, name: "Vitamin D3", time: "08:00", dosage: "1 drop", completed: true, patientEmail: "patient@medicare.com" }
];

const initialFamily = [
  { id: 1, name: "Tommy Doe", relation: "Son", age: 6, bloodGroup: "O+", patientEmail: "patient@medicare.com" },
  { id: 2, name: "Robert Doe", relation: "Spouse", age: 31, bloodGroup: "A-", patientEmail: "patient@medicare.com" }
];

const initialReports = [
  { id: 1, name: "Blood_Test_Report_May2026.pdf", date: "2026-05-14", size: "1.2 MB", patientEmail: "patient@medicare.com" },
  { id: 2, name: "ECG_Scan_JohnSmith.jpg", date: "2026-04-02", size: "2.4 MB", patientEmail: "patient@medicare.com" }
];

const initialVaccines = [
  { name: "COVID-19 Booster", date: "2025-11-10", status: "Completed", type: "Adult", patientEmail: "patient@medicare.com" },
  { name: "Influenza Vaccine", date: "2025-10-05", status: "Completed", type: "Adult", patientEmail: "patient@medicare.com" },
  { name: "Tetanus Shot", date: "Pending", status: "Due soon", type: "Adult", patientEmail: "patient@medicare.com" }
];

const initialSOS = [
  { id: 1, patientName: "John Adams", phone: "+1 (555) 902-8812", location: "Downtown Plaza, Sector 4", time: "2026-06-09 14:10", status: "Dispatched" }
];

// Initialize localStorage DB if missing
function initDB() {
  if (!localStorage.getItem("mc_doctors") || JSON.parse(localStorage.getItem("mc_doctors")).length < initialDoctors.length) {
    localStorage.setItem("mc_doctors", JSON.stringify(initialDoctors));
  }
  if (!localStorage.getItem("mc_users") || JSON.parse(localStorage.getItem("mc_users")).length < initialUsers.length) {
    localStorage.setItem("mc_users", JSON.stringify(initialUsers));
  }
  if (!localStorage.getItem("mc_appointments")) {
    localStorage.setItem("mc_appointments", JSON.stringify(initialAppointments));
  }
  if (!localStorage.getItem("mc_reminders")) {
    localStorage.setItem("mc_reminders", JSON.stringify(initialReminders));
  }
  if (!localStorage.getItem("mc_family")) {
    localStorage.setItem("mc_family", JSON.stringify(initialFamily));
  }
  if (!localStorage.getItem("mc_reports")) {
    localStorage.setItem("mc_reports", JSON.stringify(initialReports));
  }
  if (!localStorage.getItem("mc_vaccines")) {
    localStorage.setItem("mc_vaccines", JSON.stringify(initialVaccines));
  }
  if (!localStorage.getItem("mc_sos")) {
    localStorage.setItem("mc_sos", JSON.stringify(initialSOS));
  }
}

initDB();

// Getters and Setters
const db = {
  getDoctors: () => JSON.parse(localStorage.getItem("mc_doctors")),
  setDoctors: (data) => localStorage.setItem("mc_doctors", JSON.stringify(data)),

  getUsers: () => JSON.parse(localStorage.getItem("mc_users")),
  setUsers: (data) => localStorage.setItem("mc_users", JSON.stringify(data)),

  getAppointments: () => JSON.parse(localStorage.getItem("mc_appointments")),
  setAppointments: (data) => localStorage.setItem("mc_appointments", JSON.stringify(data)),

  getReminders: () => JSON.parse(localStorage.getItem("mc_reminders")),
  setReminders: (data) => localStorage.setItem("mc_reminders", JSON.stringify(data)),

  getFamily: () => JSON.parse(localStorage.getItem("mc_family")),
  setFamily: (data) => localStorage.setItem("mc_family", JSON.stringify(data)),

  getReports: () => JSON.parse(localStorage.getItem("mc_reports")),
  setReports: (data) => localStorage.setItem("mc_reports", JSON.stringify(data)),

  getVaccines: () => JSON.parse(localStorage.getItem("mc_vaccines")),
  setVaccines: (data) => localStorage.setItem("mc_vaccines", JSON.stringify(data)),

  getSOS: () => JSON.parse(localStorage.getItem("mc_sos")),
  setSOS: (data) => localStorage.setItem("mc_sos", JSON.stringify(data)),

  getCurrentUser: () => JSON.parse(localStorage.getItem("mc_current_user")),
  setCurrentUser: (user) => {
    if (user) localStorage.setItem("mc_current_user", JSON.stringify(user));
    else localStorage.removeItem("mc_current_user");
  }
};

// Global shared UI render helpers (Navbar & Footer)
function renderNavbar() {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  const currentUser = db.getCurrentUser();
  let rightSide = "";

  if (currentUser) {
    let dashLink = "";
    if (currentUser.role === "patient") dashLink = "patient.html";
    else if (currentUser.role === "doctor") dashLink = "doctor.html";
    else if (currentUser.role === "admin") dashLink = "admin.html";

    rightSide = `
      <a href="${dashLink}">Dashboard</a>
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="badge-role" style="text-transform: capitalize;">${currentUser.role}: ${currentUser.name.split(" ")[0]}</span>
        <button id="logout-btn" class="btn btn-outline" style="padding: 6px 12px; font-size: 0.85rem;">
          Log Out
        </button>
      </div>
    `;
  } else {
    rightSide = `
      <a href="login.html" class="btn btn-primary" style="padding: 8px 16px; color: white;">Log In</a>
    `;
  }

  container.innerHTML = `
    <nav class="navbar">
      <a href="index.html" class="nav-brand">
        <span style="font-size: 1.5rem; color: var(--primary); font-weight: 800; display: flex; align-items: center; gap: 6px;">🩺 MediCare+</span>
      </a>

      <div class="nav-links">
        <a href="index.html" id="nav-home">Home</a>
        <a href="doctors.html" id="nav-doctors">Find Doctors</a>
        ${rightSide}

        <!-- Dev Role Switcher -->
        <div class="dev-role-selector">
          <span>Dev Role:</span>
          <select id="dev-role-select">
            <option value="guest" ${!currentUser ? "selected" : ""}>Guest / Public</option>
            <option value="patient@medicare.com" ${currentUser?.email === "patient@medicare.com" ? "selected" : ""}>Patient (Jane)</option>
            <option value="john.smith@medicare.com" ${currentUser?.email === "john.smith@medicare.com" ? "selected" : ""}>Doctor (Dr. John)</option>
            <option value="admin@medicare.com" ${currentUser?.email === "admin@medicare.com" ? "selected" : ""}>Admin (Super)</option>
          </select>
        </div>
      </div>
    </nav>
  `;

  // Bind logout click
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      db.setCurrentUser(null);
      window.location.href = "index.html";
    });
  }

  // Bind dev role switcher
  const devSelect = document.getElementById("dev-role-select");
  if (devSelect) {
    devSelect.addEventListener("change", (e) => {
      const email = e.target.value;
      if (email === "guest") {
        db.setCurrentUser(null);
        window.location.href = "index.html";
      } else {
        const users = db.getUsers();
        const selected = users.find(u => u.email === email);
        if (selected) {
          db.setCurrentUser(selected);
          if (selected.role === "patient") window.location.href = "patient.html";
          else if (selected.role === "doctor") window.location.href = "doctor.html";
          else if (selected.role === "admin") window.location.href = "admin.html";
        }
      }
    });
  }
}

function renderFooter() {
  const container = document.getElementById("footer-container");
  if (!container) return;

  container.innerHTML = `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-col">
          <h3 style="display: flex; align-items: center; gap: 8px; color: white;">
            🩺 MediCare+
          </h3>
          <p style="margin-top: 12px; font-size: 0.9rem;">
            Connecting patients with top certified clinical doctors. Instantly book appointments, track prescriptions, and consult virtually.
          </p>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="index.html">Home Page</a></li>
            <li><a href="doctors.html">Find Clinical Doctors</a></li>
            <li><a href="login.html">Account Portal Login</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Specialties</h3>
          <ul style="font-size: 0.9rem;">
            <li>Cardiology (Heart Care)</li>
            <li>Dermatologist (Skin Care)</li>
            <li>Neurology (Brain & Nervous System)</li>
            <li>Pediatrician (Child Health)</li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Emergency Contact</h3>
          <ul style="font-size: 0.9rem;">
            <li style="display: flex; align-items: center; gap: 8px;">
              🚨 Hotline: 102 / 911
            </li>
            <li>✉️ support@medicare.com</li>
            <li>📍 123 Health Ave, NY</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 MediCare+ Appointment & Consultation System. All rights reserved.</p>
      </div>
    </footer>
  `;
}

// Auto render Navbar and Footer on document loaded
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
});
