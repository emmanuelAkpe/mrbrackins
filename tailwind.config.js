module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
        "dzoma-blue-black": "#1F032C",
        "dzoma-yellow": "#ffb703",
        "dzoma-red": "#B13636",
        "tutor-bg": "#051B11",
        "tutor-bg1": "#ffb703",
        "tutor-bg2": "#ffb4a2",
        "tutor-bg3": "#84a98c",
        "tutor-bg4": "#0d3b66",
        "tutor-yellow": "#ffb703",
        "tutor-testimonial": "#f4f5f7",
      },
      backgroundImage: {
        "hero-background": "url('/images/hero/hero__background.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
