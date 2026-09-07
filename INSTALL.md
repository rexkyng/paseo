### [Paseo](https://paseo.sh)

Requires Paseo 0.7.2 or later. This theme is a data-only plugin: it registers themes and nothing
else — no surfaces, commands, RPCs, filesystem, process, or network access. As with all Paseo
plugins (trusted code), review the source before installing on the daemon host.

#### Install using Git

If you are a Git user, you can install the theme and keep it up to date by cloning the repo:

```bash
git clone https://github.com/dracula/paseo.git
```

Or add it directly from Git:

```bash
paseo plugin add dracula/paseo
```

#### Install manually

Download using the [GitHub `.zip` download](https://github.com/dracula/paseo/archive/refs/heads/main.zip) option and unzip it.

#### Activating theme

1. Go to Settings;
2. Navigate to Host, Plugins;
3. Input the path to the theme plugin directory, enable plugins.
4. Navigate to App, Appearance;
5. Select the Theme `Dracula` (dark) or `Alucard` (light) from the Theme dropdown.
6. Syntax highlighting is configured separately: select the built-in Highlight theme `Dracula` for
   the dark variant, or any light-capable highlight theme for Alucard.
7. Boom! It's working ✨

#### Update

```bash
paseo plugin update paseo
```

#### Remove

```bash
paseo plugin remove paseo
```

#### Local development

Requires [Bun](https://bun.sh).

```bash
git clone https://github.com/dracula/paseo.git
cd paseo
bun install
bun run check && bun run typecheck && bun run test
paseo plugin install "$PWD"
```
