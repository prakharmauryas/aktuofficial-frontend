import { Routes, Route, Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkClass =
    "px-3 py-1 rounded-md text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors";
  const activeClass = "bg-slate-800 text-white";

  return (
    <header className="bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-lg">AKTUOfficial</span>
        </Link>
        <nav className="flex gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pyq"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            PYQs
          </NavLink>

          <NavLink
            to="/colleges"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Colleges
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-3">Welcome to AKTUOfficial</h1>
      <p className="text-slate-300 mb-6">
        One platform for AKTU Previous Year Papers, Solutions, Colleges, and University
        Resources.
      </p>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2>Papers (PYQs)</h2>
          <p>Browse question papers by branch, semester & subject.</p>
        </div>
        <div className="card">
          <h2>Solutions</h2>
          <p>High-quality answers and student-submitted solutions.</p>
        </div>
        <div className="card">
          <h2>Colleges</h2>
          <p>Search AKTU colleges with location, contact & details.</p>
        </div>
      </section>
    </main>
  );
}

function PyqPage() {
  return (
    <main className="page">
      <h1>PYQ Section</h1>
      <p>Filters for branch, semester, subject and year will appear here.</p>
    </main>
  );
}

function CollegesPage() {
  return (
    <main className="page">
      <h1>Colleges Directory</h1>
      <p>This page will list AKTU affiliated colleges with filters.</p>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page">
      <h1>About</h1>
      <p>Created by Prakhar Maurya for AKTU students.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs mt-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between">
        <span>© {new Date().getFullYear()} AKTUOfficial</span>
        <span>Made with ❤️</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pyq" element={<PyqPage />} />
        <Route path="/colleges" element={<CollegesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
