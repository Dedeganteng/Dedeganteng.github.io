import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import c1 from './Hazard.jpg';

const Deskripsi = () => {
    return (
        <div className="container">
        <img
          className="container__image"
          src="https://mtdata.ru/u7/photo53A0/20946911428-0/original.jpg#20946911428"
        />
        <div className="container__text">
          <h2>Why Do Cats Like Boxes?</h2>
          <p>
            "Cats like boxes because they are cryptic animals; they like to hide,"
            Stephen Zawistowski, science adviser for the American Society for the
            Prevention of Cruelty to Animals, told Business Insider. "And a box gives
            them a place of safety and security."
          </p>
          <p>
            While inside a box, cats feel that they cannot be snuck up on from behind
            or the side — anything that wants to approach them must come directly into
            their field of vision. In effect, such hiding spaces allow them to watch
            the world around them without being seen.
          </p>
        </div>
      </div>
      
    )
}
export default Deskripsi