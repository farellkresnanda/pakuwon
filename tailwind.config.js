/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], // Pastikan menggunakan var(--font-poppins)
        playfair: ['"Playfair Display"', 'serif'],
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
