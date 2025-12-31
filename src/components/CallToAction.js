import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <header className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className='subPara' >
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <Link to="/booking">
                    <button aria-label="Reserve a Table">Reserve a Table</button>
                </Link>
            </div>

            <div className="hero-image">
                <img src="/hero.jpg" alt="Delicious Mediterranean food" />
            </div>
        </header>
    );
}

export default CallToAction;
