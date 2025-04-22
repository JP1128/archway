import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ["birejeyjfeqjibpq.public.blob.vercel-storage.com"],
  },
};

export default withFlowbiteReact(nextConfig);
