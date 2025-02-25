import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/19256987*',
            },
        ],
    },
};

export default nextConfig;
