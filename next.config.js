/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desactivar React Strict Mode evita el doble montaje en dev
  // que provoca "Map container is already initialized" con react-leaflet.
  // No afecta al comportamiento en producción.
  reactStrictMode: false,
};

module.exports = nextConfig;
