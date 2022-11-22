import Link from "next/link";

function LinkButton({ href, className, children }) {
  return (
    <Link href={href} className={`btn ${className}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
