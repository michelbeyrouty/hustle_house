import Link from "next/link";

export default function HustleHouseLogo() {
  return (
    <Link href="/">
      <div className="flex items-center space-x-3">
        <img
          src="/hustle_house_logo_white.png"
          alt="Hustle House Logo"
          className="h-8 md:h-10 w-auto"
        />
      </div>
    </Link>
  );
}
