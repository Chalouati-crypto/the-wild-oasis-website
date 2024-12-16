"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.push(`?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex border border-primary-800">
      <Button
        handleFilter={handleFilter}
        filter="all"
        className="px-5 py-2 hover:bg-primary-700"
      >
        All cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="small"
        className="px-5 py-2 hover:bg-primary-700"
      >
        1&mdash;3 guests cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="medium"
        className="px-5 py-2 hover:bg-primary-700"
      >
        4&mdash;7 guests
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="large"
        className="px-5 py-2 hover:bg-primary-700"
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}
function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;
