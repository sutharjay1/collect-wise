import Link from "next/link";

const Annoucement = () => {
  return (
    <div className="relative z-[999] overflow-hidden bg-base px-4 py-3 text-center">
      <div className="relative z-10">
        <Link
          href="/dashboard"
          className="text-sm font-medium text-zinc-200 transition-colors hover:underline hover:underline-offset-2"
        >
          Check out our dashboard — Learn how we help to collect debts.
          <span className="ml-2 inline-block">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Annoucement;
