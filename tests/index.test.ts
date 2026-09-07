import { describe, expect, test } from "bun:test";
import type { PluginContext } from "@getpaseo/plugin";
import contribute from "../index";

type ThemeDefinition = Parameters<PluginContext["addTheme"]>[0];

describe("theme contributions", () => {
  test("registers both variants exactly and returns callable cleanup", () => {
    const registrations: ThemeDefinition[] = [];
    const plugin = {
      addTheme(theme: ThemeDefinition) {
        registrations.push(theme);
      },
    } as unknown as PluginContext;

    const cleanup = contribute(plugin);

    expect(registrations).toEqual([
      {
        id: "dracula",
        name: "Dracula",
        appearance: "dark",
        colors: {
          background: "#21222C",
          foreground: "#F8F8F2",
          raised: "#343746",
          control: "#282A36",
          border: "#6272A4",
          accent: "#BD93F9",
          mutedForeground: "#FFFFFF",
          ring: "#BD93F9",
        },
      },
      {
        id: "alucard",
        name: "Alucard",
        appearance: "light",
        colors: {
          background: "#CECCC0",
          foreground: "#1F1F1F",
          raised: "#EFEDDC",
          control: "#FFFBEB",
          border: "#6C664B",
          accent: "#644AC9",
          mutedForeground: "#2C2B31",
          ring: "#644AC9",
        },
      },
    ]);
    expect(typeof cleanup).toBe("function");
    expect(cleanup()).toBeUndefined();
  });
});
