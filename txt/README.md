### cordova + vue打包（将vue文件打包到Cordova项目里面去）
```
在vue项目下vue.config.js文件下 修改outputDir，配置npm run build 打包生成的文件直接放到cordova项目的www目录下
  outputDir: '../cordova项目/www',

在vue项目index.html文件里面导入 Cordova内容

在vue项目目录下
运行  npm install     加载资源包
运行  npm run build   将打包生成的文件直接放到cordova项目www目录下

在cordova项目目录下
运行  npm install               加载资源包
运行  cordova build ios/android         构建项目
运行  cordova run ios/android           运行项目

```

### cordova Android打包离线apk
```
在项目/platforms/android目录下

生成签名文件（签名文件生成一次就行了，放在项目中，后面打包只需要输入打包命令就可以了） 
keytool -genkey -v -keystore release.keystore -alias release -keyalg RSA -validity 10000

参数解释:
-genkey     产生证书文件
-keystore   指定密钥库的.keystore文件中
-alias      产生别名
-keyalg     指定密钥的算法,这里指定为RSA(非对称密钥算法)
-validity   为证书有效天数，这里我们写的是10000天

查看签名文件命令（查看MD5、SHA1等信息）
keytool -list -v -keystore release.keystore

新建release-signing.properties文件，内容为

//密码是生成.keystore的时输入的密码

storeFile=release.keystore
storePassword=******    
storeType=jks
keyAlias=release
keyPassword=******

在项目cordova路径下
运行 cordova build --release android 生成离线apk

检测apk是否签名成功
jarsigner  -verbose -certs -verify platforms/android/app/build/outputs/apk/release/app-release.apk

```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
