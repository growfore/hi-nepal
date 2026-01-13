"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "lucide-react";
import { TPackage } from "@/types/types";
import { useState, useEffect, useMemo } from "react";

export default function SearchBox({
  packages = [],
}: Readonly<{ packages?: TPackage[] }>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPackages, setFilteredPackages] = useState<TPackage[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setShowLoading] = useState(false);

  const computedFiltered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (term.length > 2) {
      return packages.filter((pkg) => pkg.title.toLowerCase().includes(term));
    }
    return [];
  }, [searchTerm, packages]);

  useEffect(() => {
    const delay = setTimeout(() => {
      const term = searchTerm.trim().toLowerCase();
      if (term.length > 2) {
        setIsSearching(true);
        setFilteredPackages(computedFiltered);
      } else {
        setFilteredPackages([]);
        setIsSearching(false);
      }
    }, 250);

    return () => clearTimeout(delay);
  }, [computedFiltered, searchTerm]);
  return (
    <div className="mt-8 w-11/12 md:w-1/2 relative">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-white opacity-65 px-6 py-6 md:py-8 text-black text-base md:text-lg shadow-lg placeholder:text-gray-400 focus-visible:ring-green-600 rounded-full"
        placeholder="Search for destinations..."
      />
      <div className="bg-orange-500 rounded-full p-2 md:p-4 text-white absolute top-1 md:top-[5px] right-2">
        <Search />
      </div>

      {(isSearching || filteredPackages.length > 0) && (
        <div className="absolute left-0 right-0 mt-1 bg-white rounded-xl shadow-xl max-h-60 overflow-y-auto z-10 text-black">
            {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <Link key={pkg.slug} href={pkg.slug} prefetch={false}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left p-4 md:p-6 cursor-pointer hover:bg-green-50"
                  // onClick={() => setShowLoading(true)}
                >
                  {pkg.title.split(":")[0]}
                </Button>
              </Link>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-600 text-left">
              No results found for <strong>{searchTerm}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
