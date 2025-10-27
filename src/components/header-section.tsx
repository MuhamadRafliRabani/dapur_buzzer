import Link from "next/link";

const HeaderSection = ({
  text,
  link = "#",
}: {
  text: string;
  link?: string;
}) => {
  return (
    <div className="px-2 flex items-center justify-between text-md sm:py-2 sm:text-lg ">
      <h1 className="font-semibold tracking-wide lg:tracking-normal lg:font-bold">
        {text}
      </h1>
      {link != "#" && (
        <Link
          href={link}
          className="text-primary text-sm sm:text-md lg:font-medium"
        >
          Lihat lainnya
        </Link>
      )}
    </div>
  );
};

export default HeaderSection;
