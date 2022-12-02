import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

const Header = () => {
  const session = false;
  const items = useSelector(selectBasketItems);

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#ebebeb] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100 ">
            <Image
              src="/Apple_logo_black.png"
              alt="logo"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <Link href="" className="headerLink">
          Product
        </Link>
        <Link href="" className="headerLink">
          Explore
        </Link>
        <Link href="" className="headerLink">
          Support
        </Link>
        <Link href="" className="headerLink">
          Business
        </Link>
      </div>
      <div className="flex item-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex w-4 h-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src="/avatar.png"
            alt="avatar"
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
          />
        ) : (
          <UserIcon className="headerIcon" />
        )}
      </div>
    </header>
  );
};

export default Header;
