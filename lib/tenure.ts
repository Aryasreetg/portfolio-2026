'use client';

import { useSyncExternalStore } from 'react';

const noopSubscribe = () => () => {};
const today = () => new Date().toISOString().slice(0, 10);
const buildDay = () => process.env.BUILD_DATE ?? today();

/** Today's date (YYYY-MM-DD). Uses the build date on the server, the real date in the browser. */
export function useToday() {
  return useSyncExternalStore(noopSubscribe, today, buildDay);
}

export function monthsBetween(startISO: string, endISO: string) {
  const s = new Date(startISO);
  const e = new Date(endISO);
  let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  if (e.getDate() < s.getDate()) months -= 1;
  return Math.max(0, months);
}

export function formatDuration(totalMonths: number) {
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`);
  return parts.join(' ') || '< 1 mo';
}

/** Live tenure since a start date, e.g. { years: 3, label: "3 yrs 4 mos" }. */
export function useTenure(startISO: string) {
  const months = monthsBetween(startISO, useToday());
  return { years: Math.floor(months / 12), months, label: formatDuration(months) };
}
