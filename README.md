<h1 align="center">
  Lacuna
</h1>

<p align="center">
  <a href="https://zen-browser.app"><img height="40" src="https://github.com/heyitszenithyt/zen-browser-badges/blob/fb14dcd72694b7176d141c774629df76af87514e/light/zen-badge-light.png"></a>
  <br>
  A minimal customiztion pack for zen browser
</p>

## What is Lacuna ?
Lacuna (`/ləˈkjuːnə/`) is a latin word which symbolises an empty space or void. This customization pack embodies blank space and minimalism to create a peacefull and tranquil browsing experiance.

## Features
### Clean look

### Cohesive design
credit: Wazz

### Minimal search bar

### Blurred UI

### Better PDF reader ui
credit: Natsumi

## Installation
#### 1. Installing css
- If you have not already, follow the [Zen Live Editing](https://docs.zen-browser.app/guides/live-editing) guide to first make your own **chrome** folder.
- Download this repository and copy the contents of the `css/` folder to your `chrome` folder.

> [!Note]
> This will **replace** your previous `userChrome.css`.
> Copy your previous userChrome css and paste it below Lacuna's userChrome css

- Restart the browser

#### 2. Required Mods
<b>
  
- [Animations Plus](https://zen-browser.app/mods/f4866f39-cfd6-4498-ab92-54213b8279dc)

- [Better Find Bar](https://zen-browser.app/mods/a6335949-4465-4b71-926c-4a52d34bc9c0)
  
- [Load Bar](https://zen-browser.app/mods/ae7868dc-1fa1-469e-8b89-a5edf7ab1f24)
  
- [Floating Status Bar](https://zen-browser.app/mods/906c6915-5677-48ff-9bfc-096a02a72379)

- [Hide Extension Name](https://zen-browser.app/mods/cb15abdb-0514-4e09-8ce5-722cf1f4a20f)

- [No Search Shortcut Icons](https://zen-browser.app/mods/d7076c31-f6c1-4f28-b2e8-15b95f5a3d6f)

- [SuperPins](https://zen-browser.app/mods/ad97bb70-0066-4e42-9b5f-173a5e42c6fc)
<p align="center">
<img src="https://github.com/user-attachments/assets/468238ab-3aa6-4dc6-84d5-1bffcdf466d9">
</p>
</b>

#### 3. Miscellaneous
##### **Setting up Bonjourr new tab**
  - Install [Bonjourr](https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/) from the firefox addons store
  - Import the config file [bonjourr.json](./misc/bonjourr.json)

##### **Setting up Short URL**

  > [!Warning]
  > Installing a userChrome js loader makes your browser vulnerable to **external malicious code** running without elevated permissions. <br>
  > Unless you know what you are doing , **Do not proceed**.
    
  - Follow the detailed steps provided in the [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig) repository to configure custom scripts in your browser.
  - Copy the files in `./js/` folder to your `chrome/JS/` folder.
  - Clear your zen's startup cache and restart the browser.

#### 4. Recommended configs
| config                                  | value |
|-----------------------------------------|-------|
| `zen.theme.color-prefs.amoled`            | true  |
| `zen.theme.essentials-favicon-bg`         | true  |
| `zen.theme.pill-button`                   | true  |
| `zen.themes.disable-all`                  | false |
| `zen.urlbar.behavior`                     | float |
| `zen.view.compact.hide-toolbar`           | true  |
| `zen.view.grey-out-inactive-windows`      | false |
| `zen.workspaces.natural-scroll`           | true  |
| `zen.workspaces.show-workspace-indicator` | false |

