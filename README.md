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
![clean](https://github.com/user-attachments/assets/7f931baf-8181-4a33-93bc-9c8fbedb0029)

### Cohesive design
![cohesion](https://github.com/user-attachments/assets/d802d3fd-0705-459f-a463-0a57d00f613c)
<br>credit: [Cohesion](https://github.com/TheBigWazz/ZenThemes/tree/main/Cohesion)

### Minimal search bar
![search](https://github.com/user-attachments/assets/908f5b9f-1a62-421a-a667-ba7e29fd75a3)

### Blurred UI
![blur](https://github.com/user-attachments/assets/c1273834-c075-415c-b498-aad5baefe7f7)

### Better PDF reader UI
![pdfreader](https://github.com/user-attachments/assets/bdb20a89-b21f-4a2e-b42f-28bd5dec1c1c)
<br>credit: [Natsumi](https://github.com/greeeen-dev/natsumi-browser)


## Installation
#### 1. Installing css
- If you have not already, follow the [Zen Live Editing](https://docs.zen-browser.app/guides/live-editing) guide to first create your **chrome** folder.
- Download this repository and copy the contents of the `css/` folder into your `chrome` folder.

> [!Note]
> This will **replace** your previous `userChrome.css`.
> Back up your previous userChrome.css and paste its contents below Lacuna's userChrome.css.

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

#### 3. Miscellaneous setup
##### **Setting up Bonjourr new tab**
  - Install [Bonjourr](https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/) from the Firefox Add-ons Store
  - Import the config file [bonjourr.json](./misc/bonjourr.json)

##### **Setting up Short URL**

  > [!Warning]
  > Installing a userChrome js loader makes your browser vulnerable to **external malicious code** running without elevated permissions. <br>
  > Unless you are confident in your technical knowledge, **do not proceed**.
    
  - Follow the detailed steps provided in the [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig) repository to configure custom scripts in your browser.
  - Copy the files in `./js/` folder to your `chrome/JS/` folder.
  - Clear your zen's startup cache and restart the browser.

#### 4. Recommended configs
| Config                                    | Value |
|-------------------------------------------|-------|
| `zen.theme.color-prefs.amoled`            | true  |
| `zen.theme.essentials-favicon-bg`         | true  |
| `zen.theme.pill-button`                   | true  |
| `zen.themes.disable-all`                  | false |
| `zen.urlbar.behavior`                     | float |
| `zen.view.compact.hide-toolbar`           | true  |
| `zen.view.grey-out-inactive-windows`      | false |
| `zen.workspaces.natural-scroll`           | true  |
| `zen.workspaces.show-workspace-indicator` | false |

## Lacuna configs
These are a few configs which will allow you to control certain features of lacuna
`lacuna.sidebar.compact-transparent`  : Enables transparent compact mode sidebar
`lacuna.tab.default-audio-indicator`  : Disables custom audio indicator in favour of the default one

> [!Note]
> You'd have to create these configs yourself in about:config. All configs are of type `boolean` unless mentioned otherwise
 

## Credits
Thank you to:
- [greeeen-dev](https://github.com/greeeen-dev) for the amazing work in [Natsumi Browser](https://github.com/greeeen-dev/natsumi-browser)
- [TheBigWazz](https://github.com/TheBigWazz) for the incredible work in [Cohesion](https://github.com/TheBigWazz/ZenThemes/tree/main/Cohesion)
- [vicky5124](https://github.com/vicky5124) for the Tab Groups CSS
- [mr-cheff](https://github.com/mr-cheff) and Zen's [contributors](https://github.com/zen-browser/desktop/graphs/contributors) for creating Zen Browser
