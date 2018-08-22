# Watch Time

![](https://github.com/Owen-Tsai/watch-time/blob/master/logo/pinterest_profile_image.png?raw=true)

![当前版本](https://img.shields.io/badge/version-0.0.1-red.svg) ![创建者](https://img.shields.io/badge/founder-%E8%94%A1%E4%BB%B2%E6%99%A8-orange.svg) ![人工智能技术协会](https://img.shields.io/badge/%E5%9B%9B%E5%B7%9D%E8%BD%BB%E5%8C%96%E5%B7%A5-AAIT-brightgreen.svg) ![当前状态](https://img.shields.io/badge/status-Unfinished-lightgrey.svg)

**BE ADVISED, This is still an unfinished version.**

> Watch Time is a time/task management tool as well as a community where people share ideas and inspirations about how to manage life and make it more better.

**By reading through this documentation you will:**
- Get a copy of this project;
- Running the development version of the project on your machine;
- Get to know how the project works, and write your first line of code;
- Contribute to the project.

## 1 Getting Started

Watch Time is developed using pure PHP as server-side language, and **vuetify** as front-side framework.

In order to run this project, you need to install **a virtual server, vue.js framework, and vuetify framework**. We will talk about how to build a local virtual server in `section 1.3`. And as for front-side, a quick way to get all things prepared is to install them via `npm`.

### 1.1 Install NPM

One way to quickly get all things prepared is to install them via `npm`. If you have `npm` installed on your machine, skip this section.

If you haven't installed `npm` yet, following the link below to download and install `node.js` with `npm` : [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).

Follow the instruction you will easily get things done. But be advised, `npm` is **not** your only option. You can use other pakage management tools such as `yarn`, you can also search for more online. 

### 1.2 Install vue.js and vuetify

When you have `npm` installed on your machine, you need to install `vue.js` and `vuetify`. Launch your CLI, and type:

```
> npm install @vue/cli -g
```

This command will download and install vue.js CLI. After that, install vuetify with another similar command

```
> npm install vuetify --save
```

After that, you are ready to create an APP. **If you have any issues, refer to this link for help: [https://vuetifyjs.com/zh-Hans/getting-started/quick-start](https://vuetifyjs.com/zh-Hans/getting-started/quick-start)**

### 1.3 Install local virtual server

I'm not going to repeat this section *AGIAN*. Just go to [this site](http://www.wampserver.com/) and download WAMP, which stands for *Apache, MySQL, and PHP on Wndows*. 

Once you download and install it, change language settings to Chinese, and launch it. Open your browser, type

```
localhost/
```

in your URL address bar, you will see the welcome page if things go well.

**If you have any problem with it, ask **[@黄强](#)** for help. And be advised, the virtual server is only used to develope on server side. You can skip this step and continue the following sections if you like, and the front-side framework will work as well**

### 1.4 Creating new application

Once you have done all the prepare work, you should create a new application. In you CLI, type: 

```
> cd xxx					#切换到你的项目路径
> vue create xxx			#xxx为项目名称
> # 选择几个选项，并等待创建结束
> vue add vuetify		   #添加vuetify到项目目录
```

Then, `cd` to your project folder, and excute

```npm run serve```

to run the developement server. Open your browser, type:

```
localhost:8080
```

to preview your application.

### 1.5 Merge project

You can get familiar with the application you have just created, do some modification for testing purpose, and try to make something new with the help of [vuetify official guide](https://vuetifyjs.com/zh-Hans/getting-started/quick-start).

After that, you can download all the files hosted here, and create a new project, copy and paste the files you download to your newly created app folder, and run the npm server.

[To Be Continued]
