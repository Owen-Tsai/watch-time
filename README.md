<h1 align=center> Watch Time </h1>

<p align=center>
<img src="https://github.com/Owen-Tsai/watch-time/blob/master/logo/pinterest_profile_image.png?raw=true" height="200" width="200")
</p>

<p align=center>
<img src="https://img.shields.io/badge/version-0.0.1-red.svg"> <img src="https://img.shields.io/badge/founder-%E8%94%A1%E4%BB%B2%E6%99%A8-orange.svg"> <img src="https://img.shields.io/badge/%E5%9B%9B%E5%B7%9D%E8%BD%BB%E5%8C%96%E5%B7%A5-AAIT-brightgreen.svg"> <img src=https://img.shields.io/badge/status-Unfinished-lightgrey.svg">
</p>

<p align=center><strong>注意, 这仍是一个未完成版本。</strong></p>

> Watch Time is a time/task management tool as well as a community where people share ideas and inspirations about how to manage life and make it more better.

**By reading through this documentation you will:**
- Get a copy of this project;
- Running the development version of the project on your machine;
- Get to know how the project works, and write your first line of code;
- Contribute to the project.

## 1 Getting Started

> 这一部分文档将会指引你搭建本地开发环境，并初步了解如何使用 Vuetify 框架进行前端开发.

Watch Time 在服务器端使用纯 PHP, 而在客户端使用 **vuetify** 框架. 

In order to run this project in development environment, you'll need **a virtual server, vue.js framework, and vuetify framework** installed on your machine. 

一个最快捷的部署前端开发环境的方式就是通过`npm`安装所需的包。

### 1.1 Install NPM

One way to quickly get all things prepared is to install them via `npm`. If you have `npm` installed on your machine, skip this section.

If you haven't installed `npm` yet, following the link below to download and install `node.js` with `npm` : [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).

Follow the instruction you will easily get things done. But be advised, `npm` is **not** your only option. You can use other pakage management tools such as `yarn`. Vue.js and vuetify ***DO*** provide other ways of installation, you can easily find solutons online or at [vuetify official website](https://vuetifyjs.com/zh-Hans/getting-started/quick-start).
### 1.2 Install vue.js and vuetify

When you have `npm` installed on your machine, you need to install `vue.js` and `vuetify`. Launch your CLI (Command Line Interface, 命令行交互界面), and type:

```
> npm install @vue/cli -g
```

This command will download and install vue.js CLI. After that, install vuetify with another similar command

```
> npm install vuetify --save
```

当上述步骤完成后，你就可以准备创建一个新的应用了. 但要注意的是，这只是前端开发环境. 由于项目的服务器端采用了PHP语言，你必须在本地搭建一个用于PHP开发的环境和虚拟服务器，才能正常运行项目工程. 请参见`section 1.3`.

**If you have any problmes, refer to this link for help: [https://vuetifyjs.com/zh-Hans/getting-started/quick-start](https://vuetifyjs.com/zh-Hans/getting-started/quick-start)**

### 1.3 Install local virtual server

~~因为我比较懒的原因~~，我不想再重复如何在本地部署PHP开发环境和虚拟服务器了，因为依赖于**WAMP**，这一切可谓是傻瓜式操作. 

Just go to [this site](http://www.wampserver.com/) and download WAMP, which stands for *Apache, MySQL, and PHP on Wndows*. 

Once you download and install it, change language settings to Chinese, and launch it. Open your browser, type

```
localhost/
```

in your URL address bar, you will see the welcome page if things go well.

但是我们并**不是**真正使用wamp来预览项目，因为`npm`内置了用于开发的虚拟服务器，假如你只进行前端开发，那么在大多数情况下你只需要在`npm`的built-in server中运行项目。而假如你需要进行后端开发，则你必须具备PHP、Apache、MySQL，因为这是AAIT服务器的现有环境。

**If you have any problem with it, ask **[@黄强](#)** for help.** 

### 1.4 Creating new application

Once you have done all the prepare work, you should create a new application. In you CLI, type: 

```
> cd xxx          #切换到你的项目路径
> vue create xxx  #xxx为项目名称

# 选择几个选项，并等待创建结束

> vue add vuetify #添加vuetify到项目目录
```

Then, `cd` to your project folder, and excute

```
npm run serve
```

to run the developement server. Open your browser, type:

```
localhost:8080
```

to preview your application. You can also preview mobile version on your mobile phone browser. Make sure that your mobile device is connected to the same LAN, and launch browser, type the following address:

```
your.dev.machine.ip:8080    #e.g. 192.168.1.100:8080
```

### 1.5 Merge project

You can get familiar with the application you have just created, do some modification for testing purpose, and try to make something new with the help of [vuetify official guide](https://vuetifyjs.com/zh-Hans/getting-started/quick-start).

当你熟悉了基本的操作流程和**vuetify**之后，你就可以参与开发了。在本地创建一个新项目后，在本Github仓库中下载`.zip`压缩包，解压后得到的文件复制到项目目录中即可。

**[To Be Continued]**
