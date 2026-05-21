
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProductRange from './components/ProductRange';
import ValueProposition from './components/ValueProposition';
import ManufacturerBacking from './components/ManufacturerBacking';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductRange />
        <ValueProposition />
        <ManufacturerBacking />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
