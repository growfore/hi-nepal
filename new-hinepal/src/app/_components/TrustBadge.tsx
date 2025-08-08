"use client"

import { ThumbsUp } from 'lucide-react'

export default function TrustBadge() {
return (
  <div className="w-full flex items-center justify-center gap-4 md:gap-6">
    <div
      aria-hidden
      className="hidden sm:block h-0.5 w-28 md:w-56 lg:w-72 bg-gradient-to-r from-transparent to-sky-200/60 rounded-full"
    />
    {/* Pill */}
    <div className="flex w-full max-w-5xl items-center rounded-full border border-sky-200 bg-sky-50/70 md:divide-x md:divide-sky-200 shadow-[0_0_0_1px_rgba(14,165,233,0.08)]">
      {/* Left section */}
      <div className="flex min-w-0 items-center gap-2 md:gap-4 px-3 py-2 md:px-6 md:py-3">
        <ul className="flex items-center gap-2" aria-label="Rated 5 out of 5 on TripAdvisor">
          <li className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-emerald-600" />
          <li className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-emerald-600" />
          <li className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-emerald-600" />
          <li className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-emerald-600" />
          <li className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-emerald-600" />
        </ul>
        <p className="truncate whitespace-nowrap text-sm md:text-lg text-slate-800">
          <a
            href="#"
            className="underline decoration-2 underline-offset-4 decoration-slate-800 hover:decoration-emerald-600"
          >
            1359 Reviews
          </a>{" "}
          {" in TripAdvisor"}
        </p>
      </div>

      {/* Right section */}
      <div className="flex min-w-0 items-center gap-2 md:gap-4 px-3 py-2 md:px-6 md:py-3">
        <span
          aria-hidden
          className="inline-flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-emerald-600 ring-2 ring-emerald-200"
        >
          <ThumbsUp className="h-3 w-3 md:h-4 md:w-4 text-white" />
        </span>
        <p className="truncate whitespace-nowrap text-sm md:text-lg text-slate-800">
          Recommended by 99% of travelers
        </p>
      </div>
    </div>
    <div
      aria-hidden
      className="hidden sm:block h-0.5 w-28 md:w-56 lg:w-72 bg-gradient-to-l from-transparent to-sky-200/60 rounded-full"
    />
  </div>
)
}
