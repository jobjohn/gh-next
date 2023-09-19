import Link from "next/link";

export function Navlink(props: any) {
  return (
    <>
      <Link href={props.link} className="flex space-x-4">
        <span className="material-symbols-outlined md-32">{props.icon}</span>
        <span className="hidden sm:inline-block">{props.name}</span>
      </Link>
    </>
  );
}
