import BaseLayout from "@/components/BaseLayout";
import Browse from "@/components/Browse";
import HeroComponent from "@/components/HeroComponent";
import { Button } from "@nextui-org/react";

const Home = () => {
  return (
    <BaseLayout active="">
      <HeroComponent />
      <Browse />
    </BaseLayout>
  );
};

export default Home;
