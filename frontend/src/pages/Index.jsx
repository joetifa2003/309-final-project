import HeroImg from "../assets/hero.png";
import Button from "../components/Button";

function IndexPage() {
  return (
    <div>
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <section className="container flex h-screen flex-col lg:justify-center">
      <div className="flex h-full flex-col items-center gap-8 lg:flex-row">
        <div className="w-full lg:w-6/12">
          <img src={HeroImg} />
        </div>
        <div className="w-full lg:w-6/12">
          <h1 className="font-brand text-6xl font-black leading-none lg:text-8xl">
            Furniture
          </h1>
          <p className="mt-8 text-2xl font-semibold leading-none">
            For minimalist & modern with affordable price.
          </p>
          <Button className="mt-8 lg:mt-16">Featured Products</Button>
        </div>
      </div>
    </section>
  );
}

export default IndexPage;
