import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Used as the "today" value during prerender; the browser swaps in the real date.
    BUILD_DATE: new Date().toISOString().slice(0, 10),
  },
};

export default nextConfig;
