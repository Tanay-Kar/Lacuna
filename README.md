<h1 align="center">
  Lacuna
</h1>

<p align="center">
  <a href="https://zen-browser.app"><img height="40" src="https://github.com/heyitszenithyt/zen-browser-badges/blob/fb14dcd72694b7176d141c774629df76af87514e/light/zen-badge-light.png"></a>
  <br>
  A Minimal Customization Pack for Zen Browser
</p>

## What is Lacuna ?
**_Lacuna_** (_/ləˈkjuːnə/_) is a Latin word meaning "empty space" or "void." This customization pack embodies minimalism and clean design, creating a peaceful and tranquil browsing experience.

## Features

### Clean look
![clean](https://github.com/user-attachments/assets/4bba9ff8-12e0-4796-ad22-f8d4d14a9b71)

### Cohesive design
![cohesive](https://github.com/user-attachments/assets/4b047fc5-0ff2-455f-bfb6-fec145807541)
<br>credit: [Cohesion](https://github.com/TheBigWazz/ZenThemes/tree/main/Cohesion)

### Minimal search bar
![search](https://github.com/user-attachments/assets/9d7bba5a-589b-4892-97e4-1516a39c77d7)

### Blurred UI
![Screenshot From 2025-02-21 17-13-10](https://github.com/user-attachments/assets/0d379129-bfbe-4b7e-8434-3db5d76e7545)

## Better toolbar customization UI
![Screenshot From 2025-02-21 16-35-35](https://github.com/user-attachments/assets/a15dae8c-ba55-41f8-bd8b-4904b56796e1)

### Better PDF reader UI
![pdfreader](https://github.com/user-attachments/assets/bdb20a89-b21f-4a2e-b42f-28bd5dec1c1c)
<br>credit: [Natsumi](https://github.com/greeeen-dev/natsumi-browser)


## Installation
#### 1. Installing css
- If you have not already, follow the [Zen Live Editing](https://docs.zen-browser.app/guides/live-editing) guide to first create your **chrome** folder.
- Copy the `lacuna` folder to the chrome folder and add the following snippet to the top of your `userChrome.css`

  ```css
  @import "lacuna/lacuna.css";
  ```

  **or** Paste the provided `userChrome.css` in the chrome folder
  
- Copy the `css/userContent.css` to the same folder.
- Restart the browser

#### 2. Recommended Mods
<b>
  
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

#### 3. Miscellaneous setup
##### **Setting up Bonjourr new tab**
  - Install [Bonjourr](https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/) from the Firefox Add-ons Store
  - Import the config file [bonjourr.json](./misc/bonjourr.json)


#### 4. Recommended configs
| Config                                    | Value |
|-------------------------------------------|-------|
| `zen.theme.color-prefs.amoled`            | true  |
| `zen.theme.essentials-favicon-bg`         | true  |
| `zen.themes.disable-all`                  | false |
| `zen.urlbar.behavior`                     | float |
| `zen.view.compact.hide-toolbar`           | true  |
| `zen.view.grey-out-inactive-windows`      | false |
| `zen.workspaces.natural-scroll`           | true  |

## Lacuna configs
These are a few configs which will allow you to control certain features of lacuna
- `lacuna.sidebar.compact-transparent`  : Enables transparent compact mode sidebar
- `lacuna.tab.default-audio-indicator`  : Disables custom audio indicator in favour of the default one
- `lacuna.tab.pinned-tabs-bg` : Makes pinned tabs background look similar to essentials
- `lacuna.urlbar.smaller-compact-mode` : Fixes url bar blur with *Smaller Compact Mode* mod
- `lacuna.ui.default-font` : Applies default zen font settings
- `lacuna.ui.disable-dancing-notes` : Disables dancing notes animation on media control ui
- `lacuna.pdfjs.transparent` : Adds a transparent background to the pdf viewer

> [!Note]
> You'd have to create these configs yourself in about:config. All configs are of type `boolean` unless mentioned otherwise
 

## Credits
Thank you to:
- [greeeen-dev](https://github.com/greeeen-dev) for the amazing work in [Natsumi Browser](https://github.com/greeeen-dev/natsumi-browser)
- [TheBigWazz](https://github.com/TheBigWazz) for the incredible work in [Cohesion](https://github.com/TheBigWazz/ZenThemes/tree/main/Cohesion)
- [mr-cheff](https://github.com/mr-cheff) and Zen's [contributors](https://github.com/zen-browser/desktop/graphs/contributors) for creating Zen Browser
