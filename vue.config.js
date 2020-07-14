module.exports = {
  publicPath: './',
  // 修改webpack 配置可以通过两种方式
  // chainWebpack 通过链式编程得方式修改
  // configureWebpack 通过操作对象得方式修改
  // 开发模式得入口文件 src/main-dev.js
  // 发布模式得入口文件为 src/main-prod.js
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main.js')
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main.js')
    })
  }
}
