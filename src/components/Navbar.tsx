"use client"
import { useEffect, useRef } from "react";
import { Tooltip } from "@nextui-org/react";
import { gsap } from "gsap";
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

const Navbar = ({ active }: { active?: string }) => {
  const linkRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    linkRefs.current.forEach((link, index) => {
      if (link) {
        const underline = link.querySelector(".underline");
        const tl = gsap.timeline({ paused: true });
        tl.to(underline, {
          scaleX: 1,
          transformOrigin: "bottom left",
          ease: "power1.inOut",
        });

        link.addEventListener("mouseenter", () => tl.play());
        link.addEventListener("mouseleave", () => tl.reverse());
      }
    });
  }, []);

  return (
    <div className="flex flex-row items-center justify-between h-24 w-screen container mx-auto px-4">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/images/logo-long.png"
          alt="Onestore Logo"
          width={200}
          height={100}
          priority={true}
        />
      </Link>
      <div className="flex flex-row items-center justify-around gap-20">
        {Object.entries(Links).map(([name, url], index) => (
          <Link key={name} href={url}>
            <span
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              className={`relative ${
                active === name ? "text-white" : "text-gray-400"
              } hover:text-white ease-in-out duration-400 cursor-pointer font-medium text-lg`}
            >
              {name}
              <span
                className="underline absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0"
                style={{ transformOrigin: "bottom left", transition: "transform 0.25s ease-out" }}
              ></span>
            </span>
          </Link>
        ))}
      </div>
      <div className="flex gap-10 text-gray-400">
        {Icons.map(({ icon: IconComponent, url, label }, index) => (
          <Link key={index} href={url}>
            <Tooltip
              content={label}
              placement="top"
              delay={1000}
              closeDelay={1000}
            >
              <IconComponent className="hover:text-white ease-in-out duration-400" />
            </Tooltip>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

