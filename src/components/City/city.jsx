import './city.css';

export const City = ({ name, population, area, district, photo }) => {
    return (
      <div className="city">
        <h2>{name}</h2>
        <img className="photo" src={photo} />
        <p>Population: {population}</p>
        <p>Area: {area} km²</p>
        <p>District: {district}</p>
      </div>
    );
  }