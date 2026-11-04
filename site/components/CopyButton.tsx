"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function CopyButton({ value, label }: { value: string; label?: string }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
      {copied ? t("common.copied") : label ?? t("common.copy")}
    </button>
  );
}
