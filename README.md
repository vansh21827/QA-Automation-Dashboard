# 🧪 QA Automation Dashboard

A modern **QA Automation Dashboard** built with **Next.js 15**, **Jest**, and **React Testing Library (RTL)** to demonstrate **Unit Testing**, **Component Testing**, **State Management Testing**, **Network Mocking**, and **Coverage Reporting**.

This project was developed as part of **Sprint 11 – Unit & Component Testing (Track A: Frontend Specialists)**.

---

## 🚀 Live Demo

**Vercel:** https://qa-automation-dashboard-84tv.vercel.app

---

# 📌 Features

### ✅ Modern QA Dashboard
- Professional responsive UI
- Dashboard statistics
- Testing summary cards
- Coverage report
- Activity log
- Test results panel

---

### ✅ Component Testing

Reusable UI Components

- Button
- Card
- Search Input
- Stats Card
- Section Card
- Coverage Card
- Theme Toggle

All components are independently testable.

---

### ✅ State Management

Implemented using **React Context API**

Stores

- Search state
- Counter state
- Button clicks
- Theme
- Activity log
- Dashboard statistics

---

### ✅ Event Simulation

Interactive testing includes

- Counter Increment
- Counter Decrement
- Counter Reset
- Search Input updates
- Button click tracking

Implemented using

- userEvent
- fireEvent

---

### ✅ Network Mock Testing

Movie search component demonstrates

- Async data loading
- Mocked API calls
- Search filtering
- No internet dependency during testing

---

### ✅ Coverage Report

Project includes automated coverage reporting.

Coverage achieved:

| Metric | Coverage |
|----------|-----------|
| Statements | 75% |
| Functions | 91% |
| Branches | 100% |

---
# Preview
<img width="1080" height="497" alt="Screenshot 2026-07-25 181344" src="https://github.com/user-attachments/assets/c0ba0edf-7fd4-45bf-ab2a-2c389f7fa033" />
<img width="1266" height="680" alt="Screenshot 2026-07-25 181354" src="https://github.com/user-attachments/assets/1f1b0ad6-4b66-4e9a-8b79-69b5f466fe66" />
<img width="1878" height="905" alt="Screenshot 2026-07-27 140649" src="https://github.com/user-attachments/assets/0a696adf-38ef-4f34-97bb-c4c56f057b57" />
<img width="1897" height="902" alt="Screenshot 2026-07-27 140708" src="https://github.com/user-attachments/assets/09833d08-9262-4a46-8ed0-9a4ffa99245c" />
<img width="1893" height="906" alt="Screenshot 2026-07-27 140726" src="https://github.com/user-attachments/assets/ffb6ec03-6325-44bf-8f2a-a2a243cf322e" />
<img width="1887" height="906" alt="Screenshot 2026-07-27 140742" src="https://github.com/user-attachments/assets/db22e183-d427-4322-8e16-b24755de9a16" />

# 🧪 Test Suites

Implemented test files

- ✅ Button.test.jsx
- ✅ Card.test.jsx
- ✅ SearchInput.test.jsx
- ✅ Counter.test.jsx
- ✅ MovieList.test.jsx

All tests pass successfully.

---

# 📂 Project Structure

```
app/
│
├── globals.css
├── layout.jsx
└── page.jsx

components/
│
├── layout/
│   ├── DashboardHeader.jsx
│   ├── Sidebar.jsx
│   └── Footer.jsx
│
├── ui/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── SearchInput.jsx
│   ├── StatsCard.jsx
│   ├── SectionCard.jsx
│   ├── CoverageCard.jsx
│   └── ThemeToggle.jsx
│
└── features/
    ├── Counter.jsx
    ├── MovieCard.jsx
    ├── MovieList.jsx
    ├── TestingPanel.jsx
    ├── ActivityLog.jsx
    └── TestResults.jsx

context/
└── DashboardContext.jsx

data/
└── movies.js

hooks/
└── useLocalStorage.js

__tests__/
├── Button.test.jsx
├── Card.test.jsx
├── Counter.test.jsx
├── MovieList.test.jsx
└── SearchInput.test.jsx
```

---

# ⚙️ Tech Stack

- Next.js 15
- React 19
- JavaScript
- Jest
- React Testing Library
- Context API
- CSS3
- Vercel

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/qa-automation-dashboard.git
```

Navigate to project

```bash
cd qa-automation-dashboard
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🧪 Running Tests

Run all tests

```bash
npm test
```

Run Jest

```bash
npx jest
```

Run coverage

```bash
npm test -- --coverage
```

---

# 🎯 Learning Outcomes

This project demonstrates

- Unit Testing
- Component Testing
- Mock Functions
- Event Simulation
- Async Testing
- Network Mocking
- Coverage Reporting
- React Context API
- Component Architecture
- Responsive Dashboard Design

---

# 📸 Dashboard Preview

The dashboard includes

- Dashboard Header
- Sidebar Navigation
- Statistics Cards
- Component Testing Section
- Interactive Counter
- Movie Search
- Coverage Metrics
- Test Results
- Activity Log
- Footer

---

# 🚀 Deployment

Deploy to **Vercel**

```bash
npm run build
```

Then

- Push project to GitHub
- Import repository into Vercel
- Deploy

---

# 👨‍💻 Author

**Vansh Bansal**


---

# 📄 License

This project is developed for educational purposes as part of **Sprint 11 – Unit & Component Testing**.
