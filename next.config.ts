import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false, // Disables the "X-Powered-By" header for security
  reactStrictMode: true, // Enables React's strict mode for better development practices
  trailingSlash: true, // Ensures all paths have trailing slashes
};

export default nextConfig;
