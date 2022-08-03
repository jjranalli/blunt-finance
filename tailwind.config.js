const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.js",
    "./components/**/*.tsx",
    "./components/**/*.js",
    "./components/**/*.css",
    "./components/**/*.scss",
    "./styles/**/*.scss",
    "./utils/**/*.ts",
    "./lib/**/*.ts",
    "./lib/**/*.tsx",
    "./styles/jit-hack.txt"
  ],

  theme: {
    nightwind: {
      transitionDuration: "150ms",
      colorClasses: ["gradient", "placeholder"],
      typography: {
        strong: {
          color: colors.white
        }
      },
      colors: {
        black: "gray.50",
        sky: {
          50: "#001928"
        }
      }
    },
    extend: {
      screens: {
        xs: "560px"
      },
      colors: {
        black: "#0F1115",
        gray: colors.gray,
        sky: colors.sky,
        cyan: colors.cyan
      },
      zIndex: {
        "-10": "-10"
      }
    }
  },
  variants: {
    // nightwind: ["group-hover"],
  },

  plugins: [require("@tailwindcss/typography"), require("nightwind")]
}
