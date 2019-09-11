const request = require('request');
const QueryString = require("querystring");

// 云函数入口文件
const cloud = require('wx-server-sdk')
// 获取腾讯云NodeJS API
const tencentcloud = require('./tencentcloud-sdk-nodejs')

cloud.init()

// 声明客户端和参数模型
const { Client: TBPClient, Models: TBPModels } = tencentcloud.tbp.v20190311


/**
 * 机器人对话
 * @param {string} query 用户说法
 * @public
*/
async function handleTextMsgWithTBPBot(query) {
  // 初始化客户端
  const client = new TBPClient(
    new tencentcloud.common.Credential(
      process.env.TENCENTCLOUD_SECRETID,
      process.env.TENCENTCLOUD_SECRETKEY,
      process.env.TENCENTCLOUD_SESSIONTOKEN))

  console.log('Get query: ' + query)

  if (query == 'reset') {
    return new Promise(function (resolve, reject) {
      var textResetParam = new TBPModels.TextResetRequest()
      // 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}
      textResetParam.BotEnv = "dev"
      // 机器人ID
      textResetParam.BotId = "042bd746-0f1c-4aed-994d-2680fb15c8ec"
      // 终端标识，每个终端(或线程)对应一个，区分并发多用户, 可以考虑传入小程序用户ID
      textResetParam.TerminalId = "user_001"
      console.log('Req param: ' + JSON.stringify(textResetParam))

      client.TextReset(textResetParam, (err, rsp) => {
        if (err != null) {
          console.log(err)
        } else {
          console.log(rsp)
          rsp.ResponseText = '重置会话成功!'
          resolve(rsp)
        }
      })
    })
  }

  return new Promise(function (resolve, reject) {
    var textProcessParam = new TBPModels.TextProcessRequest()
    // 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}
    textProcessParam.BotEnv = "dev"
    // 机器人ID
    textProcessParam.BotId = "042bd746-0f1c-4aed-994d-2680fb15c8ec"
    textProcessParam.InputText = query
    // 终端标识，每个终端(或线程)对应一个，区分并发多用户, 可以考虑传入小程序用户ID
    textProcessParam.TerminalId = "user_001"
    console.log('Req param: ' + JSON.stringify(textProcessParam))

    client.TextProcess(textProcessParam, (err, rsp) => {
      if (err != null) {
        console.log(err)
      } else {
        resolve(rsp)
      }
    })
  })
}

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const wxContext = cloud.getWXContext()
  if (event.Event === 'user_enter_tempsession') {
    await cloud.openapi.customerServiceMessage.send({
      touser: wxContext.OPENID,
      msgtype: 'text',
      text: {
        content: '您好，请问有什么可以帮助您的？\n 您可以回复以下内容寻求帮助：\n重置会话请回复：reset\n订机票可回复：订机票',
      },
    })

    return 'success'
  }
  
  let result = await handleTextMsgWithTBPBot(event.Content)
  console.dir(result)
  await cloud.openapi.customerServiceMessage.send({
    touser: wxContext.OPENID,
    msgtype: 'text',
    text: {
      content: result.ResponseText,
    },
  })
  return 'success'
}