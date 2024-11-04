"use client";
import "../styles/Header.css"

export default function Header() {
  return (
    <main>
      <header>
        <container>
          <nav class="navbar navbar-expand-sm nav-bar navbar-dark px-5">
            <a class="navbar-brand mb0 text-white " 
            href="#">
              PUP HYGEARS
            </a>
            <button type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            class="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toogle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end"
            id="navbarNav">
              <ul class="navbar-nav text-white">
                <li class="nav-item active">
                    <a href="#" class="nav-link">
                      About Us
                    </a>
                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link">
                      News and Events
                    </a>
                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link">
                      Contact Us
                    </a>
                </li>
              </ul>
            </div>
          </nav>
        </container>
      </header>
    </main>
  )
}