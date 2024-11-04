import Home from './Home/page.js';
import Uslugi from './Uslugi/page.js';
import Company from './Company/page.js';
import Novosti from './Novosti/page.js';
import Dogovor from './Dogovor/page.js';
import Zapros from './Zapros/page.js';

export default function HomeContainer() {
  return (
    <div>
      <Home />
      <Uslugi />
      <Company />
      <Novosti/>
      <Dogovor/>
      <Zapros/>
    </div>
  );
}
 