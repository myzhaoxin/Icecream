---
layout: page
title: Start
---

## 指南

Hi~ 我是定制版的 Jekyll 博客迷你指南。嗯哼~

希望透过一篇文章，可以将一些基本概念，以及使用博客的基本技能都掌握，而后就能开始自己动手尝试啦。

###  博客搭建

这个博客是基于 GitHub 平台，由 Jekyll 博客引擎生成，用 Git 工具管理和发布，使用 Markdown 语法书写，并运用到很多的插件（包括代码高亮、分享、评论、分页等插件）来完善就好。

更详尽的说明（可以不看）：

* [Jekyll 博客主题精选 - Microdust](http://azeril.me/blog/Selected-Collection-of-Jekyll-Themes.html) 
* [打造你的 GitHub Pages 专属博客（小白教程） - Microdust](http://azeril.me/blog/Build-Your-First-GitHub-Pages-Blog.html)

### 博文发布途径
 
在 Jekyll 博客（也就是这样的博客）发布一篇文章，简单说，通常可以通过 3 个途径：

1. GitHub 网页版 ## 通过浏览器直接访问，在博客仓库添加新的博文文件即可。没什么学习成本，但网页版有时修改会繁琐一点。；
2. GitHub Desktop + Markdown 编辑器 ## 在本地写作然后添加文件，直接用图形客户端发布到网站（这个过程不开浏览器也没关系，当然咯，网络还是得有）。优点是修改各种方便；
3. Git + Markdown ## 命令行模式，熟悉了会用起来很顺手，不懂暂时关系也不大。

这一次，主要介绍 1 & 2 两个方式具体是怎么做的。

*** 

## GitHub

GitHub 知名代码托管平台。博客的所有文档都存放在 GitHub 的个人项目里。博客是用了其中的一个服务：GitHub Pages

我们需要注册并登陆 GitHub 账号，并建立好自己的博客仓库。具体可以是下载模板来修改后自己上传也可以是通过 GitHub 特有的 Fork 机制，完成复制后再 Git Clone 到本地来修改，再进行同步（上传）。

对于博客，或者说 GitHub 的仓库除了使用网页版，还可以利用 GitHub for Desktop 和 Git 命令行工具来管理。

### GitHub 图形客户端

下载和安装好 [图形客户端](https://desktop.github.com/)，并完成账户的登录。

打开 GitHub 的菜单（如果是 Mac，先切换到 GitHub 界面，左上角的应用菜单，选择 Preference 偏好选项），点选 Account 登录个人 GitHub 账户。

登录后，将已经 Fork 或已经存在的 GitHub Pages 项目从 GitHub （云端）中， Clone（相当于下载，不过是通过图形客户端或 Git 命令） 到本地来，以便于修改。

![](http://dreamofbook.qiniudn.com/GitHubDesktopUseClone.png)

一般情况下，博客项目命名都是「个人 ID + GitHub.io」形式。不然无法正常使用博客服务。

### 提交和同步博客的修改

下载完项目后，可以在任务管理器（Mac 为 Finder）里打开，做进一步的查看、修改文档、添加博文之类的操作。

在修改文件（修改文件和添加博文的方法，将在后边说明。）完成后，GitHub 客户端会将文件的修改细节（包括位置和次数）显示出来。由于文件是在本地修改的，因而还需要提交到 GitHub 的服务器上，修改才会最终生效。

![](http://dreamofbook.qiniudn.com/GitHubDesktopUseCommitAndSync.png)

提交的流程：

    0. 选择相应的项目（这是是博客项目）；
    1. 如有修改，在 Description 填写说明（可以非常简要，但不能省略）；
    2. 点击「Commit to master」，提交修改；
    3. 点击右上角的「Sync」；
    4. 文件同步完成，片刻后更新生效。

图形客户端也支持查看历史记录并对特定操作进行恢复。

![](http://dreamofbook.qiniudn.com/GitHubDesktopUseViewHistory.png)

了解 GitHub 图形客户端的使用后，后续在本地修改博客设定或添加博文时，我们就可以方便地将任何与博客相关的更改同步到远程的仓库。而同步也就意味着，在网页端查看博客时的更新，比如，在同步添加一篇新博文的操作后，几秒钟后刷新网页，新博文就会出现在我们的博客里了。

***

## 博客构成

嗯，接下来我们要了解一下 关于 Jekyll 博客的相关知识，以及具体可以做哪些自定义修改。

基础目录结构：

    |-- _config.yml
    |-- index.html
    |-- _includes
    |-- _layouts
    |   |-- default.html
    |   `-- post.html
    |-- assets
    |-- _posts
    |   `-- 2010-10-04-TVB.md
    |-- images
    |   `-- Yvonne.png 
    |-- CNAME
    |-- _404.html
    |-- About.md
    |—— feed.xml
    `-- README.md

目录文档详细说明：    

* _config.yml **博客配置**文档（包括博客标题、favicon、博主 ID、头像、描述、联系方式等基本信息都在这个文档修改）；
* index.html 博客架构文档；
* _includes 存放博客调用的模块文件（比如导航栏、底栏、博文内容显示、评论模块等）的文件夹，一般不需要管；
* _layouts 存放博客调用的页面模板文件（比如博客主页、具体博文页）的文件夹；
* assets 博客系统的相关程序文档；
* _posts **博客正文**存放的文件夹。命名有规定，必须为「日期 + 标题」的模式，即「2010-10-04-TVB.md」，才能发布到博客里；
* images 图片文件夹，存放博客相关素材，包括博客 favicon、博主头像等图片及博文贴图素材；
* CNAME **绑定个人域名**配置文档；
* 404.html 「404 Not Found.」，站点链接无法访问时的展示页。
* About.md 博客中的个人说明文档（About Me）；
* feed.xml 博客的 RSS 订阅工具；
* README.md 项目说明文档。用于 GitHub 个人项目主页的说明（描述）。

### 常用文档

自定义修改中，需要自己修改的文档包括：_config.yml、About.me、CNAME，以及 images 文件夹下的存放的 Logo、头像一类。一些博客还需要（看具体需求）修改_includes 下的 sidebar 文件，当然这个博客可以不管。

编辑器(用于打开及修改上述的文档)：

* [TextMate](https://macromates.com/)  Mac 平台
* Sublime Text Win/Mac 平台
* [Notepad+](https://notepad-plus-plus.org/) Windows 平台

Markdown 编辑器（写博文时用到的写作应用）：

* [MacDown](http://macdown.uranusjr.com/) Mac 平台
* [Mou](http://25.io/mou/) Mac 平台
* [Cmd Markdown 编辑阅读器](https://www.zybuluo.com/cmd/) Win 平台
* [MarkdownPad](http://markdownpad.com/) Win 平台

### 常用博文模板

博文存放在主目录下的 _posts 文件夹中。格式必须为 「日期 + 英文标题」，不然无法识别和发布。

博文的文件格式一般为 md(Markdown )格式。

每一篇 Markdown 文档的开头（第一行都为「 ---」）都必须添加一段代码，

### YAML 语法

每一篇博文的开头都有用「---」包裹的几段编码，这在 Jekyll 博客中被称为 YAML 编码。方便博客引擎将相关文档收录到博客以及标签系统中，转化为我们日常在浏览器里看到的博客网页的形态。没有编码，博客显示就会出问题。不同的博客模板，编码也会有些区别。

以下为一个具体栗子：

```
---
layout: post
title: 最完美的離婚觀後
categories: [blog ]
tags: [life, ]
description: 剛開始在光生身上，我看到了自己。
---
```
* `---` 第一行及编码格式的最后都必须为「---」。不然无法识别文档
* `layout` 用于定义页面的样式，默认
* `title` 标题，每一篇文章都有各自的标题
* `tags` 标签。用于对文章归类。虽然目前用不到，但考虑到未来可能的迁移，还是每次创建新博文时添加一下相应的标签
 * read
 * life 
 * travel
 * think 
 * view
* `description` 摘要，显示在主页，概述一篇文章的内容

所以，偷懒一下，简化的方式开头编码填写可以是这样的：


### Tips

几个小 tips：

1. 这些编码模式不需要记，平时存一个模板就好，用的时候直接在模板基础上修改，或者也可以直接打开 _posts 下「template」开头的文件开始编辑。

2. 还是记得，先把文件修改为 date+title.md 的格式。标题注意使用英文，英文首字母大写，并且不要重复用同样的标题（以前用的不要再次出现），不然页面会导致冲突。

3. 首行开头必须为「---」，不能空格，不然会导致无法转化。

4. Markdown 语法还是用起来咯。

5. 如果想要每篇换不同的大图，那还是记得添加 images 的编码。

***

## 网页端在线发布博文

除了利用 GitHub 客户端以外，我们还可以通过 GitHub 网站发布博文。（如果博文使用图片，得借助图床，因为网页端无法上传图片。）

登录 GitHub 网站。

找到自己的博客项目主页（对，就是 ID.gitHub.io 命名的那只）。

点击主目录中的 _posts 文件夹。然后点击「+」，创建新博文。

博文结构还是一样：

* 标题
* 博文代码
* 正文

![](http://dreamofbook.qiniudn.com/GithubWebCommitNewFile.png)

写完后，为本次创建文档的操作输入一段描述，确认提交（commit）就发布啦。

***

## 添加图片

有两种途径：

1. 存放于 GitHub 博客仓库中并调用；
2. 托管于专门的图床服务并生成直链（Direct Link）进行调用；

前者，可以进入仓库主目录，把图片存放在 `images` 文件夹下的 `miao` 下，然后，在撰写博客的 markdown 文件中，使用 `![PicName](PicLink)` 的语法添加图片。

针对此博客，存放于 `images/miao` 目录下，比如是一个名为 `Cat.png` 的图片，添加的语法为：

```
![](http://movyery.me/images/miao/Cat.png)
```  

就是说，在那个 `Cat.png` 文件的文件名之前，还要加上这个路径 `http://movyery.me/images/miao/` 这样就可以为博客添加图片了。

注意点：

1. 图片文件名在调用时需要是唯一的，才能不相互冲突，所以对于图片一般不要命名太简单。
2. 注意图片命名方式，可以采取[驼峰命名法](https://zh.wikipedia.org/zh/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB)，例如，对于《风之影》这本书，可以命名为：`TheShadowOfTheWind.png`。另外的栗子：
  * ImageOfTheUniversity.jpg
  * GithubWebCommitNewFile.png
  * WorkflowyCardsMakingGuide.png

针对后者，可以使用 [七牛云](http://www.qiniu.com/)/[Imgur](http://imgur.com/)/[Photobucket](Photobucket) 等图床的服务。

使用的流程一般是上传图片，获取该图片的直链，添加到 Markdown 文件中，完成。具体不再赘述。

如果日常在写博客的过程中，需要使用的图片量不大，可以只考虑用 GitHub 的仓库来存放图片。

## 写作风格 

日常行文的注意点。包括空格、标点符号、段落以及拼写和中文语法的一些注意点。

扩展阅读：[中文书写风格清单 - Microdust](http://azeril.me/blog/The-Rule-of-Chinese-Writing-Style.html)

推荐一读。未来写作，完成后，也记得尽量参照清单进行相应的修改。