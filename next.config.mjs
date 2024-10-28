/** @type {import('next').NextConfig} */
import nextPwa from 'next-pwa';
const nextConfig = {};
const withPWA = nextPwa({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
})

export default withPWA(nextConfig);
