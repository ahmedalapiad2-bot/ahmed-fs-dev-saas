"use client";

/**
 * DirProvider Component
 * 
 * This component is intentionally minimal to avoid DOM manipulation conflicts.
 * 
 * Direction handling is managed by:
 * 1. Server-side layout setting lang and dir attributes
 * 2. i18n middleware setting proper language context
 * 3. No dynamic language detection (prevents crashes with browser translation)
 * 
 * Rationale: Dynamic language detection causes removeChild errors when:
 * - Browser translates page (Chrome Translate modifies DOM)
 * - React tries to reconcile state with modified DOM structure
 * - Framer Motion animations conflict with DOM changes
 */

export default function DirProvider() {
  // Rendered as a no-op to maintain backward compatibility
  return null;
}
