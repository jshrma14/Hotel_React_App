import "./styles.css";

function Header(props) {
  return (
    <div>
      <h1>Welcome to {props.name}'s Hotel</h1>
      <img src="https://c4.wallpaperflare.com/wallpaper/360/515/601/night-in-las-vegas-bellagio-luxury-hotel-casino-hd-wallpapers-for-mobile-phones-laptops-and-pc-1920%C3%971080-wallpaper-preview.jpg" />
    </div>
  );
}

const dishes = [
  "Paneer Tikka Masala",
  "Malai Chaap",
  "Pastries",
  "Paneer Kathi rolls",
  "Pineapple Shake"
];

const dishesObj = dishes.map((dish, i) => ({ id: i, title: dish }));

function Main(props) {
  return (
    <div>
      <h2>We make delicious food</h2>
      <div className="parent">
        <ul>
          {props.dish.map((d) => (
            <li key={d.id}>{d.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Footer(props) {
  return <h6>Copyright @ {props.year}</h6>;
}

var date = new Date();
var year = date.getUTCFullYear();

export default function App() {
  return (
    <div className="App">
      <Header name="Jatin" />
      <Main dish={dishesObj} />
      <Footer year={year} />
    </div>
  );
}
