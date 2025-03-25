"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [checked, setChecked] = useState(currentLocale === "te");

  const toggleLocale = () => {
    const newLocale = currentLocale === "en" ? "te" : "en";
    const newPath = pathname.replace(/^\/(en|te)/, `/${newLocale}`);
    router.replace(newPath);
    setChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4">
      <label className="toggle text-base-content">
        <input type="checkbox" checked={checked} onChange={toggleLocale} />
        <svg
          aria-label="enabled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <text x="6" y="18" fontSize="14" fill="currentColor">
            TL
          </text>
        </svg>
        <svg
          aria-label="disabled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <text x="4" y="18" fontSize="14" fill="currentColor">
            EN
          </text>
        </svg>
      </label>
    </div>
  );
}
