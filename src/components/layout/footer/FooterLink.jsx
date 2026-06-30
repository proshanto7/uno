import Link from "next/link";

const FooterLink = ({ link , title }) => {
  return (
    <li className="text-sm leading-6 mb-4 ">
      <Link href="#" className="relative">
        <span className="cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-[80%]">
          {title}
        </span>
      </Link>
    </li>
  );
};

export default FooterLink;
