import BaseLayout from "@/components/BaseLayout";
import Browse from "@/components/Browse";
import HeroComponent from "@/components/HeroComponent";
import LandingPage from "@/components/LandingPage";
import { Button } from "@nextui-org/react";

const Home = () => {
  return (
    <BaseLayout active="">
    <LandingPage />
    </BaseLayout>
  );
};

export default Home;
