import AgeForm from "./AgeForm";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Age Calculator</h1>
        <p>Calculate your exact age from your date of birth</p>
      </header>

      <AgeForm />
    </div>
  );
}

export default Home;

