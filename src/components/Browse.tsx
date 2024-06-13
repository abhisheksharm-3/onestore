import Image from "next/image";

const Range = [
  { label: "Dining", image: "/images/dining.png" },
  { label: "Living", image: "/images/living.png" },
  { label: "Bedroom", image: "/images/bedroom.png" },
];

const Browse = () => {
  return (
    <div className="container flex flex-col items-center py-10">
      <div className="py-12 flex flex-col items-center gap-2">
        <h2 className="font-bold text-4xl">Browse The Range</h2>{" "}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex gap-4">
      {Range.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-6 cursor-pointer">
            <Image src={item.image} alt={item.label} width={380} height={480} className="rounded-md" />
            <p className="font-semibold text-2xl">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
