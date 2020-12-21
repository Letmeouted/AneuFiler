# AneuFiler

[EN](README.md) | [🇨🇳中文](README.CN.md)

`AneuFiler` was used for "21, 18, 13 and sex chromosome genotype test kit" data analysis specifically:

- Based on [Electron](https://electronjs.org)
- Based on [electron-quick-start](https://github.com/electron/electron-quick-start) and [MDUI](https://github.com/zdhxiong/mdui) project
- core algorithm was not open source

Current release is [`v0.1.1`](https://github.com/NTLx/AneuFiler/releases/tag/v0.1.1), `Pre-release` was not recommended for actual production.

> Version introduction:
>
> For example: v X.Y.Z
>
> - X: means incompatible version
> - Y: indicates a major update version number (such as adding a new major feature)
> - Z: indicates cumulative version, optimization, bug fix, etc.

## Installation

Suitable for Mac OS X (x64 platform) and Windows.

> The package for Windows is ia32, will be functional both x86 and x64 platform.

### Windows

`Portable` package can run without installation.

[Download Portable for win](https://github.com/NTLx/AneuFiler/releases/download/v0.1.1/AneuFiler.v0.1.1.Win_Portable.exe)

[Download mirror](https://gitee.com/lx3325360/AneuFiler/releases/v0.1.1) for China user.

### Mac OS

Move app to `Application` :

![darwin install](https://lx-public-pic.oss-cn-shanghai.aliyuncs.com/PicGo/20190917162246.png)

[Download for Mac OS](https://github.com/NTLx/AneuFiler/releases/download/v0.1.1/AneuFiler.v0.1.1.MacOS.dmg)

## Usage

## Main window

![main window](https://lx-public-pic.oss-cn-shanghai.aliyuncs.com/PicGo/20190918134715.png)

Drag file(s) to process region (means `文件处理区`), or just click this region to select a file.

> input file format: only support `txt` and `csv`

By default, the output will be splited according to sample names, and the result file(s) will be output to the dir where the input file comes from.

### Manual

You may press the orange button `帮助` to check manual, it will simply open a browser window which link to this page.

### Exit

Press the blue button `退出` could exit the software.

### Settings

Several settings was offered in `设置面板` , defalut settings should be like this:

![each sample output](https://lx-public-pic.oss-cn-shanghai.aliyuncs.com/PicGo/20190918135907.png)

Switch the button `按样本输出` to grey (deactivate) will generate one result file according to one input file.

> The output dir will not change.

Mainly for windows users, the default encode was set to `GBK` so that `Excel` (from Microsoft Office) could be display rightfully. If you need ~~far~~ more widely used encode format, you can change `选择输出格式` to switch encode from `GBK` to `UTF-8` .

## Feedback

Welcome to [open issue](https://github.com/NTLx/AneuFiler/issues/new/choose) on this project to help us make improve for this software, or you can see the [existing issues](https://github.com/NTLx/AneuFiler/issues).

## More Feature

Suggest a new feature by [FeatHub](https://feathub.com/NTLx/AneuFiler)

[![Feature Requests](https://cloud.githubusercontent.com/assets/390379/10127973/045b3a96-6560-11e5-9b20-31a2032956b2.png)](https://feathub.com/NTLx/AneuFiler)

[![Feature Requests](https://feathub.com/NTLx/AneuFiler?format=svg)](https://feathub.com/NTLx/AneuFiler)

## Participate

Want to contribute to this project but do not know how/where to start? Please check [Open Source Guides](https://opensource.guide/).

## License

[GNU GPLv3](LICENSE.md)
