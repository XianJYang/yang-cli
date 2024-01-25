#! /usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')

 // 配置创建命令和参数
program
  .command('create <app-name>')     // 增加创建指令
  .description('create a new project')  // 添加描述信息
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .version(`zc-cli ${require("../package.json").version}`)  // 版本号 
  .action((name, options) => {
     // 在 create.js 中执行创建任务
     require('../lib/create.js')(name, options)
    // 打印执行结果
    console.log('name:',name,'options:',options)
  })

  // 配置 config 命令
program
.command('config [value]')
.description('inspect and modify the config')
.option('-g, --get <path>', 'get value from option')
.option('-s, --set <path> <value>')
.option('-d, --delete <path>', 'delete option from config')
.action((value, options) => {
  console.log(value, options)
})

// 配置 ui 命令
program
  .command('ui')
  .description('start add open roc-cli ui')
  .option('-p, --port <port>', 'Port used for the UI Server')
  .action((option) => {
    console.log(option)
  })

//   配置 rask
  program
  // 监听 --help 执行
  .on('--help', () => {
    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`yang <command> --help`)} for detailed usage of given command\r\n`)
  })

//   add logo
  program
  .on('--help', () => {
    // 使用 figlet 绘制 Logo
    console.log('\r\n' + figlet.textSync('MeTa', {
    //   font: 'Art',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));
    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`Meta <command> --help`)} show details\r\n`)
  })

 
// 解析用户执行命令传入参数
program.parse(process.argv);


// console.log('meta-cli working ~')
