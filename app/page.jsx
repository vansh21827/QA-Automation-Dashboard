"use client";

import DashboardHeader from "../components/layout/DashboardHeader";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

import StatsCard from "../components/ui/StatsCard";
import SectionCard from "../components/ui/SectionCard";
import CoverageCard from "../components/ui/CoverageCard";
import ThemeToggle from "../components/ui/ThemeToggle";

import Counter from "../components/features/Counter";
import MovieList from "../components/features/MovieList";
import TestingPanel from "../components/features/TestingPanel";
import ActivityLog from "../components/features/ActivityLog";
import TestResults from "../components/features/TestResults";

export default function Home() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-content">
        <DashboardHeader />

        {/* Statistics */}

        <div className="stats-grid">
          <StatsCard
            icon="🧩"
            title="Components"
            value="12"
            color="#2563eb"
          />

          <StatsCard
            icon="🧪"
            title="Tests"
            value="15"
            color="#22c55e"
          />

          <StatsCard
            icon="📈"
            title="Coverage"
            value="75%"
            color="#f59e0b"
          />

          <StatsCard
            icon="✅"
            title="Status"
            value="Passed"
            color="#16a34a"
          />
        </div>

        {/* Component Testing */}

        <SectionCard
          title="Component Testing"
          subtitle="Reusable UI Components"
        >
          <TestingPanel />
        </SectionCard>

        {/* Counter */}

        <SectionCard
          title="State Management Testing"
          subtitle="Interactive Counter Component"
        >
          <Counter />
        </SectionCard>

        {/* Movies */}

        <SectionCard
          title="Network Mock Testing"
          subtitle="Movie Search Demo"
        >
          <MovieList />
        </SectionCard>

        {/* Coverage */}

        <SectionCard
          title="Coverage Report"
          subtitle="Current QA Metrics"
        >
          <CoverageCard
            title="Statements"
            percentage={75}
            color="#2563eb"
          />

          <CoverageCard
            title="Functions"
            percentage={92}
            color="#16a34a"
          />

          <CoverageCard
            title="Branches"
            percentage={100}
            color="#9333ea"
          />
        </SectionCard>

        {/* Results */}

        <div
          className="dashboard-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          <SectionCard
            title="Test Results"
            subtitle="Executed Jest Suites"
          >
            <TestResults />
          </SectionCard>

          <SectionCard
            title="Activity Log"
            subtitle="Live User Activity"
          >
            <ActivityLog />
          </SectionCard>
        </div>

        <Footer />
      </main>

      <ThemeToggle />
    </div>
  );
}