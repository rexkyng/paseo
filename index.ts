import type { PluginContext } from "@getpaseo/plugin";

export default function contribute(plugin: PluginContext) {
	plugin.addTheme({
		id: "dracula",
		name: "Dracula",
		appearance: "dark",
		colors: {
			background: "#21222C", // main bg
			foreground: "#F8F8F2", // primary text + terminal fg/cursor
			raised: "#343746", // cards / popovers / hover
			control: "#282A36", // inputs / secondary fills
			border: "#6272A4", // borders + highest surface tint (visible)
			accent: "#BD93F9", // buttons / selection / focus
			mutedForeground: "#FFFFFF", // secondary text
			ring: "#BD93F9", // focus rings + scrollbars + terminal bright black
		},
	});

	plugin.addTheme({
		id: "alucard",
		name: "Alucard",
		appearance: "light",
		colors: {
			background: "#FFFBEB",
			foreground: "#1F1F1F",
			raised: "#EFEDDC",
			control: "#CFCFDE",
			border: "#ECE9DF",
			accent: "#644AC9",
			mutedForeground: "#1F1F1F",
			ring: "#6C664B",
		},
	});

	return () => {};
}
