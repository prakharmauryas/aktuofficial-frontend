import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useMemo, useState } from "react";

// ------- NAVBAR --------

const navLinkBase =
  "px-3 py-2 text-sm font-medium rounded-full border border-transparent transition-colors";
const navLinkActive = "bg-slate-900 text-white";
const navLinkIdle = "text-slate-600 hover:bg-slate-100";

function Navbar() {
  return (
    <header className="bg-[#F5F7FB] border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-[#16C1A3] flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-900 text-lg">
              AKTUOfficial
            </span>
            <span className="text-[11px] uppercase tracking-wide text-[#16C1A3]">
              Student hub
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/colleges"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`
            }
          >
            Colleges
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`
            }
          >
            About
          </NavLink>
        </nav>

        <Link
          to="/admin"
          className="ml-3 text-xs md:text-sm font-semibold px-3 py-2 rounded-full bg-[#16C1A3] text-white shadow-sm hover:bg-[#0ea58a]"
        >
          Admin Login
        </Link>
      </div>
    </header>
  );
}

// ------- HOME / HERO --------

function Hero() {
  return (
    <section className="bg-[#F5F7FB]">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#16C1A3] uppercase mb-3">
            For AKTU students
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            All your <span className="text-[#16C1A3]">AKTU</span> resources in
            one place.
          </h1>
          <p className="text-slate-600 text-sm md:text-base mb-6 max-w-xl">
            Quickly find PYQs, unit-wise notes, important questions, mind maps,
            college details and official links – structured by branch, year,
            semester and subject.
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            <Link
              to="/explore"
              className="inline-flex items-center px-4 py-2.5 rounded-full bg-[#16C1A3] text-white text-sm font-semibold shadow-md hover:bg-[#0ea58a]"
            >
              Start exploring resources
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-4 py-2.5 rounded-full border border-slate-300 text-sm font-medium text-slate-700 hover:bg-white"
            >
              How it works
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-500">
            <span className="pill">PYQs (UT / PUT / Final)</span>
            <span className="pill">Unit-wise notes</span>
            <span className="pill">Last-minute revision</span>
            <span className="pill">Mind maps</span>
          </div>
        </div>

        {/* phone mockups */}
        <div className="relative h-[320px] md:h-[360px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#16C1A3]/15 via-transparent to-[#16C1A3]/5 rounded-[32px] blur-2xl" />
          <div className="relative flex gap-4">
            <div className="phone phone-dark rotate-[-12deg] translate-y-6">
              <div className="phone-header" />
              <div className="phone-body">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="msg msg-dark" />
                ))}
              </div>
            </div>

            <div className="phone phone-light rotate-[10deg] -translate-y-4">
              <div className="phone-header" />
              <div className="phone-body">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="msg msg-light" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <section
        id="how-it-works"
        className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6"
      >
        <div className="home-card">
          <h3>1. Choose your branch</h3>
          <p>
            CSE, IT, ECE, ME, CE, B.Pharma, MBA and more – all mapped to the
            official AKTU structure.
          </p>
        </div>
        <div className="home-card">
          <h3>2. Pick year & semester</h3>
          <p>
            Navigate year → semester → subject to see every resource in one
            dashboard.
          </p>
        </div>
        <div className="home-card">
          <h3>3. Download & revise</h3>
          <p>
            PYQs, solutions, notes, last-minute revision sheets, mind maps and
            college information.
          </p>
        </div>
      </section>
    </>
  );
}

// ------- EXPLORE PAGE (with dummy filters + data) --------

// fake data for now – later this will come from backend
const branches = ["All branches", "CSE", "IT", "ECE"];
const years = ["All years", "1st", "2nd", "3rd", "4th"];
const semesters = ["All sems", "1", "2", "3", "4", "5", "6", "7", "8"];
const resourceTypes = [
  "All types",
  "PYQ",
  "Notes",
  "Important Questions",
  "Last Minute Notes",
  "Mind Map",
];

const dummyResources = [
  {
    id: 1,
    branch: "CSE",
    year: "2nd",
    sem: "3",
    subject: "Data Structures & Algorithms",
    code: "KCS-301",
    type: "PYQ",
    examType: "PUT",
    examYear: 2023,
    title: "DSA PUT PYQ 2023",
  },
  {
    id: 2,
    branch: "CSE",
    year: "2nd",
    sem: "3",
    subject: "Data Structures & Algorithms",
    code: "KCS-301",
    type: "Notes",
    examType: "NONE",
    examYear: null,
    title: "Unit-wise handwritten notes",
  },
  {
    id: 3,
    branch: "IT",
    year: "1st",
    sem: "1",
    subject: "Engineering Mathematics-I",
    code: "KAS-101",
    type: "Important Questions",
    examType: "FINAL",
    examYear: 2022,
    title: "Important questions set",
  },
  {
    id: 4,
    branch: "ECE",
    year: "3rd",
    sem: "6",
    subject: "Digital Communication",
    code: "KEC-603",
    type: "PYQ",
    examType: "FINAL",
    examYear: 2021,
    title: "Final exam PYQ with solutions",
  },
];

function ExplorePage() {
  const [branch, setBranch] = useState("All branches");
  const [year, setYear] = useState("All years");
  const [sem, setSem] = useState("All sems");
  const [type, setType] = useState("All types");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return dummyResources.filter((r) => {
      if (branch !== "All branches" && r.branch !== branch) return false;
      if (year !== "All years" && r.year !== year) return false;
      if (sem !== "All sems" && r.sem !== sem) return false;
      if (type !== "All types" && r.type !== type) return false;

      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !(
            r.subject.toLowerCase().includes(q) ||
            r.code.toLowerCase().includes(q) ||
            r.title.toLowerCase().includes(q)
          )
        ) {
          return false;
        }
      }
      return true;
    });
  }, [branch, year, sem, type, search]);

  return (
    <main className="page">
      <h1>Explore resources</h1>
      <p className="page-sub">
        Filter by branch, year, semester, resource type and subject. Later this
        will load live data from the Spring Boot backend.
      </p>

      <div className="filter-bar">
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          {branches.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value)}>
          {years.map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>

        <select value={sem} onChange={(e) => setSem(e.target.value)}>
          {semesters.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select value={type} onChange={(e) => setType(e.target.value)}>
          {resourceTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <input
          type="search"
          placeholder="Search subject / code / title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="page-sub">No resources match the current filters.</p>
      ) : (
        <div className="resource-grid">
          {filtered.map((r) => (
            <article key={r.id} className="resource-card">
              <h3>{r.title}</h3>
              <div className="resource-meta">
                {r.subject} ({r.code}) · {r.branch} · {r.year} year · Sem {r.sem}
              </div>
              <div className="resource-footer">
                <span className="badge">
                  {r.type}
                  {r.examType && r.examType !== "NONE"
                    ? ` · ${r.examType} ${r.examYear ?? ""}`
                    : ""}
                </span>
                <button className="btn-link">View / Download</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

// ------- OTHER SIMPLE PAGES --------

function CollegesPage() {
  return (
    <main className="page">
      <h1>AKTU Colleges</h1>
      <p className="page-sub">
        Later this page will list AKTU affiliated colleges with filters by
        district, type and branches.
      </p>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page">
      <h1>About AKTUOfficial</h1>
      <p className="page-sub">
        Built by Prakhar Maurya to create a single academic hub for AKTU
        students: PYQs, notes, colleges and official links.
      </p>
    </main>
  );
}

function AdminPage() {
  return (
    <main className="page">
      <h1>Admin Panel (MVP)</h1>
      <p className="page-sub">
        This will later connect to backend. For now we&apos;ll design the upload
        form after backend is ready.
      </p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} AKTUOfficial</span>
        <span>Made for AKTU students · aktuofficial.co.in</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] text-slate-900 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/colleges" element={<CollegesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
