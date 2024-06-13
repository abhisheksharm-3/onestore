import { Tooltip } from "@nextui-org/react";
import {
  RiHeart3Line,
  RiSearchLine,
  RiShoppingCart2Line,
  RiUser5Fill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const Links = {
  Home: "/",
  Shop: "/shop",
  About: "/about",
  Contact: "/contact",
};

const Icons = [
  { icon: RiUser5Fill, url: "/profile", label: "Profile" },
  { icon: RiSearchLine, url: "/", label: "Search" },
  { icon: RiHeart3Line, url: "/wishlist", label: "Wishlist" },
  { icon: RiShoppingCart2Line, url: "/cart", label: "Cart" },
];

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between h-[100px] w-screen container">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/images/logo-long.png"
          alt="Onestore Logo"
          width={200}
          height={100}
          priority={true}
        />
      </Link>
      <div className=" flex flex-row items-center justify-around gap-20">
        {Object.entries(Links).map(([name, url]) => (
          <Link key={name} href={url}>
            <span className="text-gray-400 hover:text-white ease-in-out duration-400 cursor-pointer">
              {name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex gap-10 text-gray-400">
        {Icons.map(({ icon: IconComponent, url, label }, index) => (
          <Link key={index} href={url}>
            <Tooltip content={label} placement="top" delay={1000} closeDelay={1000}>
              <IconComponent className="hover:text-white ease-in-out duration-400" />
            </Tooltip>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
