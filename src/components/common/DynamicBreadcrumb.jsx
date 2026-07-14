"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const formatLabel = (segment) =>
  segment.replace(/-/g, " ");

/**
 * @param {Object} props
 * @param {string} [props.homeLabel="Home"]
 * @param {Object.<string,string>} [props.labelMap] - e.g. { shop: "The Shop" }
 * @param {Array<{label:string, href?:string}>} [props.items] - manual override
 * @param {string} [props.className]
 */
const DynamicBreadcrumb = ({
  homeLabel = "Home",
  labelMap = {},
  items,
  className = "",
}) => {
  const pathname = usePathname();

  const crumbs =
    items ??
    (() => {
      const segments = pathname.split("/").filter(Boolean);

      let href = "";
      const auto = segments.map((seg) => {
        href += `/${seg}`;
        const label = labelMap[seg] ?? formatLabel(decodeURIComponent(seg));
        return { label, href };
      });

      return [{ label: homeLabel, href: "/" }, ...auto];
    })();

  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 text-sm font-medium uppercase tracking-wide text-secondary-text sm:text-sm">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.href ?? crumb.label} className="flex items-center gap-x-2">
              {isLast ? (
                <span aria-current="page" className="text-primary-text">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-primary-text">
                  {crumb.label}
                </Link>
              )}
              {!isLast && <span className="text-secondary-text">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default DynamicBreadcrumb;