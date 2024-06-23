import Link from "next/link";

type NavLinkProps = {
  title: string;
  href: string;
};

const NavLink = (props: NavLinkProps) => {
  const { title, href } = props;
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent  md:p-0 hover:text-white "
      aria-current="page"
    >
      {title}
    </Link>
  );
};

export default NavLink;
