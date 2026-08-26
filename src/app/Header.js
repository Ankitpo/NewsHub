"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-bottom bg-white">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold fs-4 mb-0" href="/">
            News<span className="hub">Hub</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
            aria-controls="navContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <Link className="nav-link text-dark fw-semibold fs-5" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fw-semibold fs-5"
                  href="/Category"
                >
                  Categories
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-dark" href="/Category/World">
                  World
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/Category/Politics">
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/Category/Business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  href="/Category/Technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/Category/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  href="/Category/Entertainment"
                >
                  Entertainment
                </Link>
              </li> */}
            </ul>

            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-link text-dark p-0"
                aria-label="Search"
              >
                <i className="bi bi-search fs-5"></i>
              </button>
              <button className="btn btn-live text-white rounded-pill px-4 fw-semibold">
                Live
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
