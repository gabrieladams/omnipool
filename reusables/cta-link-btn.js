import Link from "next/link";

function CtaBtnLink({ className }) {
  if (className) {
    return (
      <Link href="#" className={`site-btn site-btn-md ${className}`}>
        Invest Now
      </Link>
    );
  }

  return (
    <Link href="#" className="site-btn site-btn-md">
      Invest Now
    </Link>
  );
}

export default CtaBtnLink;
