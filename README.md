## 使用gulp4.0快速构建静态网站

本项目旨在快速构建静态切图项目，如公司官网、广告宣传页、活动策划页等等，使用gulp4.0最新的写法。

### 如何使用

#### 安装依赖

```shell
npm install
```

#### 启用服务

```shell
npm start
```

### 注意事项

#### 依赖包的版本问题（版本错误会导致报错）

##### 如果你的电脑使用babel7版本，请下载gulp-babel 8版本

```shell
npm install --save-dev gulp-babel @babel/core @babel/preset-env
```

##### 如果你使用babel是6版本，请下载gulp-babel 7版本

```shell
npm install --save-dev gulp-babel@7 babel-core babel-preset-env
```





