// Available color themes for the portfolio
export const themes = {
  purple: {
    name: "Purple Dream",
    primary: "#667eea",
    secondary: "#764ba2",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    highlight: "linear-gradient(120deg, #ffd89b 0%, #19547b 100%)"
  },
  blue: {
    name: "Ocean Blue",
    primary: "#4facfe",
    secondary: "#00f2fe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    highlight: "linear-gradient(120deg, #ffd89b 0%, #19547b 100%)"
  },
  sunset: {
    name: "Sunset Orange",
    primary: "#fa709a",
    secondary: "#fee140",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    highlight: "linear-gradient(120deg, #ffeaa7 0%, #fd79a8 100%)"
  },
  forest: {
    name: "Forest Green",
    primary: "#11998e",
    secondary: "#38ef7d",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    highlight: "linear-gradient(120deg, #ffeaa7 0%, #38ef7d 100%)"
  },
  crimson: {
    name: "Crimson Red",
    primary: "#eb3349",
    secondary: "#f45c43",
    gradient: "linear-gradient(135deg, #eb3349 0%, #f45c43 100%)",
    highlight: "linear-gradient(120deg, #ffd89b 0%, #eb3349 100%)"
  },
  midnight: {
    name: "Midnight Blue",
    primary: "#2c3e50",
    secondary: "#3498db",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    highlight: "linear-gradient(120deg, #ffd89b 0%, #3498db 100%)"
  },
  sakura: {
    name: "Sakura Pink",
    primary: "#ff9a9e",
    secondary: "#fecfef",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    highlight: "linear-gradient(120deg, #ffeaa7 0%, #ff9a9e 100%)"
  },
  aurora: {
    name: "Aurora",
    primary: "#a8edea",
    secondary: "#fed6e3",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    highlight: "linear-gradient(120deg, #ffd89b 0%, #a8edea 100%)"
  },
  fire: {
    name: "Fire",
    primary: "#f12711",
    secondary: "#f5af19",
    gradient: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    highlight: "linear-gradient(120deg, #ffd89b 0%, #f12711 100%)"
  },
  lavender: {
    name: "Lavender Dream",
    primary: "#a044ff",
    secondary: "#6a3093",
    gradient: "linear-gradient(135deg, #a044ff 0%, #6a3093 100%)",
    highlight: "linear-gradient(120deg, #ffd89b 0%, #a044ff 100%)"
  }
};

// Apply theme to CSS variables
export const applyTheme = (themeName) => {
  const theme = themes[themeName] || themes.purple;
  
  document.documentElement.style.setProperty('--primary-color', theme.primary);
  document.documentElement.style.setProperty('--secondary-color', theme.secondary);
  document.documentElement.style.setProperty('--gradient', theme.gradient);
  document.documentElement.style.setProperty('--highlight-gradient', theme.highlight);
};

export default themes;

