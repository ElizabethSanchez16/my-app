/* /** @type {import('next').NextConfig} */ 
/*const nextConfig = {};

export default nextConfig; */

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['localhost'],
    }
  };
  
  // Usar export default en lugar de module.exports
  export default nextConfig;

/*
/** @type {import('next').NextConfig} */
/*const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['localhost'],
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Acepta múltiples extensiones
  };
  
  module.exports = nextConfig;*/