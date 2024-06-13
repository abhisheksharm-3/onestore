import { Button } from "@nextui-org/react";

const HeroComponent = () => {
  return (
    <div className="bg-[url('/images/hero-page.png')] w-full h-full bg-center bg-cover bg-no-repeat flex justify-end items-center container brightness-90">
      <div className="bg-[#FFF3E3] flex flex-col p-10 rounded-md gap-3">
        <p className="text-black font-semibold">New Arrival</p>
        <span className="font-bold text-[#B88E2F] text-6xl tracking-tight leading-16">Disocver Our<br /> New Collection</span>
        <p className="text-black font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit<br /> tellus, luctus nec ullamcorper mattis.</p>
        <Button className="w-max px-20 py-7 rounded-none mt-8 bg-[#B88E2F] uppercase font-semibold ease-in-out duration-400">Buy Now</Button>
      </div>
    </div>
  );
};

export default HeroComponent;
