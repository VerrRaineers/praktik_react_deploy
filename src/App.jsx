import { useState } from "react";

function App() {
  const [doorOpen, setDoorOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const toggleDoor = () => {
    setDoorOpen((current) => !current);
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setMessage("Isi email dan password terlebih dahulu.");
      return;
    }

    setMessage("Selamat datang kembali. 🏠");
  };

  return (
    <main className={`scene ${doorOpen ? "is-open" : ""}`}>

      {/* =========================
          BACKGROUND LANGIT
      ========================== */}

      <div className="sky">
        <div className="moon" />

        <div className="star star-1" />
        <div className="star star-2" />
        <div className="star star-3" />
        <div className="star star-4" />
        <div className="star star-5" />
      </div>

      <div className="ambient-glow" />


      {/* =========================
          RUMAH
      ========================== */}

      <section className="house" aria-label="Rumah">

        {/* Atap */}
        <div className="roof">
          <span className="chimney" />
        </div>


        <div className="wall">

          {/* Jendela kiri */}
          <div className="upper-window window-left">
            <span />
            <span />
            <span />
            <span />
          </div>


          {/* Jendela kanan */}
          <div className="upper-window window-right">
            <span />
            <span />
            <span />
            <span />
          </div>


          {/* Teras */}
          <div className="porch">

            {/* Lampu teras */}
            <div className="porch-light">
              <span />
            </div>


            {/* Frame pintu */}
            <div className="door-frame">

              {/* Bagian dalam rumah */}
              <div className="inside-room">

                <div className="warm-light" />

                <div className="hallway-table">
                  <span className="plant" />
                  <span className="table-top" />
                </div>

              </div>


              {/* PINTU */}
              <button
                className="door"
                onClick={toggleDoor}
                aria-label={
                  doorOpen
                    ? "Tutup pintu"
                    : "Buka pintu"
                }
                aria-expanded={doorOpen}
              >

                <span className="door-panel panel-top" />

                <span className="door-panel panel-bottom" />

                <span className="door-handle">
                  <i />
                </span>

              </button>

            </div>

          </div>


          {/* Tangga */}
          <div className="step step-one" />
          <div className="step step-two" />

        </div>

      </section>


      {/* =========================
          TAMAN
      ========================== */}

      <div className="garden garden-left">
        <span className="bush b1" />
        <span className="bush b2" />
        <span className="bush b3" />
      </div>


      <div className="garden garden-right">
        <span className="bush b1" />
        <span className="bush b2" />
        <span className="bush b3" />
      </div>


      {/* =========================
          JALAN
      ========================== */}

      <div className="path">
        <span className="path-light p1" />
        <span className="path-light p2" />
      </div>


      {/* =========================
          TEKS
      ========================== */}

      <div className="welcome-copy">

        <p className="eyebrow">
          {doorOpen
            ? "DOOR UNLOCKED"
            : "A QUIET EVENING"}
        </p>

        <h1>
          {doorOpen
            ? "Welcome home."
            : "Coming home?"}
        </h1>

        <p className="hint">
          {doorOpen
            ? "The light is on. Come in and make yourself comfortable."
            : "Open the door to continue."}
        </p>

      </div>


      {/* =========================
          BUTTON PEMBUKA PINTU
      ========================== */}

      {!doorOpen && (
        <button
          className="open-door-hint"
          onClick={toggleDoor}
        >
          <span className="key-icon">
            ↳
          </span>

          Open the door
        </button>
      )}


      {/* =========================
          LOGIN
      ========================== */}

      <div
        className={`login-card ${
          doorOpen ? "visible" : ""
        }`}
      >

        <div className="card-top">

          <div>

            <span className="tiny-label">
              WELCOME BACK
            </span>

            <h2>
              Come on in.
            </h2>

          </div>

          <div className="home-icon">
            ⌂
          </div>

        </div>


        <form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <label>

            Email

            <div className="input-wrap">

              <span className="input-icon">
                @
              </span>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                autoComplete="email"
              />

            </div>

          </label>


          {/* PASSWORD */}

          <label>

            Password

            <div className="input-wrap">

              <span className="input-icon">
                ●
              </span>

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                autoComplete="current-password"
              />


              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(
                    (value) => !value
                  )
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

          </label>


          {/* OPTIONS */}

          <div className="form-options">

            <label className="remember">

              <input type="checkbox" />

              <span>
                Remember me
              </span>

            </label>


            <button
              type="button"
              className="forgot"
            >
              Forgot?
            </button>

          </div>


          {/* LOGIN BUTTON */}

          <button
            className="login-button"
            type="submit"
          >

            <span>
              Enter home
            </span>

            <span className="arrow">
              →
            </span>

          </button>


          {/* MESSAGE */}

          {message && (
            <p className="form-message">
              {message}
            </p>
          )}

        </form>


        {/* FOOTER */}

        <div className="card-footer">

          <span>
            New here?
          </span>

          <button type="button">
            Create an account
          </button>

        </div>

      </div>


      {/* =========================
          FOOTER
      ========================== */}

      <div className="bottom-credit">

        <span>
          GOOD EVENING
        </span>

        <span>
          •
        </span>

        <span>
          Your little place on the web
        </span>

      </div>

    </main>
  );
}

export default App;