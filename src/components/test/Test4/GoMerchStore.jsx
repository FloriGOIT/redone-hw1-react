import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Team } from './Pages/Team';
import { Mission } from './Pages/Mission';
import { Products } from './Pages/Products';
import { ProductDetails } from './Pages/ProductDetails';
import { NotFound } from './Pages/NotFound';
import { SharedLayout } from './Pages/SharedLayout';
export const GoMerchStore = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="mission" element={<Mission />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

/*Routes <Home/><About/><Products/>
<SharedLayout>
<Home/> index
<About>
        <Team/>
        <Mission/>
<About/>
<Products>
<ProductDetails>
<SharedLayout/>
*/
