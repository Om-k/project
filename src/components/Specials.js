function Specials() {
  return (
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
  );
}

export default Specials;
