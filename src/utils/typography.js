import Typography from 'typography';
import doelgerTheme from 'typography-theme-doelger';

doelgerTheme.googleFonts = [
	{
      name: "Corben",
      styles: ["700"],
    },
    {
      name: "Cabin",
      styles: ["400", "400i", "700"],
    },
];
doelgerTheme.headerFontFamily = ["Corben", "sans-serif"];
doelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	'a': {
    	"color" : "#6C63FF",
    	"text-shadow" : "none",
    	"background-image" : "none",
    },
})

const typography = new Typography(doelgerTheme);

export default typography;