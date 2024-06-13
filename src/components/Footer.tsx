import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const Links = {
  Home: "/",
  Shop: "/shop",
  About: "/about",
  Contact: "/contact",
};
const Help = {
  "Payment Options": "/",
  Returns: "/shop",
  "Privacy Policy": "/about",
};

const Footer = () => {
  return (
    <div className="container flex flex-col pb-4 text-gray-400">
      <div className="flex px-2 items-start w-full justify-between">
        <div className="flex flex-col gap-20 justify-around pb-8">
          <Image
            src="/images/logo-long.png"
            alt="Onestore Logo"
            width={150}
            height={100}
            priority={true}
          />
          <p className="">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Links</h2>
          <div className="flex flex-col gap-4">
            {Object.entries(Links).map(([name, url]) => (
              <Link key={name} href={url}>
                <span className="text-white cursor-pointer">{name}</span>
              </Link>
            ))}
          </div>
        </div>{" "}
        <div className="flex flex-col gap-6">
          <h2>Help</h2>
          <div className="flex flex-col gap-4">
            {Object.entries(Help).map(([name, url]) => (
              <Link key={name} href={url}>
                <span className="text-white cursor-pointer">{name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Newsletter</h2>
          <Input
            type="email"
            label="Email"
            className=""
            endContent={<Button variant="light">Subscribe</Button>}
          />
        </div>
      </div>
      <Separator />
      <div>
        <span className="flex items-center justify-start pt-6 px-2">
          2024 OneStore. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
