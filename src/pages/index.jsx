import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../components/City/city.jsx';
import { cities } from '../cz-cities.js';

document.querySelector('#root').innerHTML = render(
  <div className="container">
{
   cities.map(city => <div key={city.name} className="city">
    <City name={city.name} population={city.population} area={city.area} district={city.district} photo={city.photo} />
   </div>)
}
  </div>
);
