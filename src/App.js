import './App.css';

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="nav">
        <div className="logo">Little Lemon</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p style={{marginTop:'10px'}} >
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>

        <div className="hero-image">
          <img src="/hero.jpg" alt="Food" />
        </div>
      </header>

      {/* SPECIALS */}
      <section className="specials">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </div>

        <div className="cards">
          <article className="card">
            <img src="/greek-salad.jpg" alt="Greek Salad" />
            <div className="card-content">
              <h3>Greek Salad <span>$12.99</span></h3>
              <p>
                Crispy lettuce, peppers, olives and our Chicago style feta cheese.
              </p>
              <p className="order">Order a delivery 🚴</p>
            </div>
          </article>

          <article className="card">
            <img src="/bruchetta.jpg" alt="Bruchetta" />
            <div className="card-content">
              <h3>Bruchetta <span>$5.99</span></h3>
              <p>
                Grilled bread smeared with garlic and seasoned with salt and olive oil.
              </p>
              <p className="order">Order a delivery 🚴</p>
            </div>
          </article>

          <article className="card">
            <img src="/lemon-dessert.jpg" alt="Lemon Dessert" />
            <div className="card-content">
              <h3>Lemon Dessert <span>$5.00</span></h3>
              <p>
                Authentic recipe passed down for generations.
              </p>
              <p className="order">Order a delivery 🚴</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
