/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const WechatPostAudioResponse = models.WechatPostAudioResponse;
const OATextResetRequest = models.OATextResetRequest;
const DeleteIntentsRequest = models.DeleteIntentsRequest;
const GetBotsRequest = models.GetBotsRequest;
const GetSampleQuestionsResponse = models.GetSampleQuestionsResponse;
const CreateQACategoryResponse = models.CreateQACategoryResponse;
const AppTextProcessResponse = models.AppTextProcessResponse;
const QueryTaskStatusRequest = models.QueryTaskStatusRequest;
const DeleteBotsRequest = models.DeleteBotsRequest;
const CreateBotResponse = models.CreateBotResponse;
const GetBuiltInEntitiesRequest = models.GetBuiltInEntitiesRequest;
const DescribeRelationSlotsRequest = models.DescribeRelationSlotsRequest;
const UpdateEntityBasicInfoResponse = models.UpdateEntityBasicInfoResponse;
const TextProcessResponse = models.TextProcessResponse;
const OAAudioProcessResponse = models.OAAudioProcessResponse;
const UpdateWechatWorkConfigRequest = models.UpdateWechatWorkConfigRequest;
const CreateEntityValueResponse = models.CreateEntityValueResponse;
const VadAudioProcessResponse = models.VadAudioProcessResponse;
const GetQACategoriesRequest = models.GetQACategoriesRequest;
const GetBotsResponse = models.GetBotsResponse;
const PostTextRequest = models.PostTextRequest;
const GetWxBotsResponse = models.GetWxBotsResponse;
const CreateEntityResponse = models.CreateEntityResponse;
const GetWechatWorkInfoRequest = models.GetWechatWorkInfoRequest;
const AudioProcessRequest = models.AudioProcessRequest;
const GetVersionStatusResponse = models.GetVersionStatusResponse;
const PostAudioResponse = models.PostAudioResponse;
const TextResetResponse = models.TextResetResponse;
const OnLineBotResponse = models.OnLineBotResponse;
const QADetailInfo = models.QADetailInfo;
const GetEntityValueResponse = models.GetEntityValueResponse;
const DeleteQARequest = models.DeleteQARequest;
const UpdateAppAccessStateRequest = models.UpdateAppAccessStateRequest;
const IdInfo = models.IdInfo;
const GetEntityRequest = models.GetEntityRequest;
const GetAccountInfoResponse = models.GetAccountInfoResponse;
const GetBotInfoResponse = models.GetBotInfoResponse;
const GetPatternDuplicateStatusResponse = models.GetPatternDuplicateStatusResponse;
const GetSentenceEntitiesResponse = models.GetSentenceEntitiesResponse;
const DeleteQACategoryRequest = models.DeleteQACategoryRequest;
const AddBuiltInEntitiesRequest = models.AddBuiltInEntitiesRequest;
const OAAudioProcessRequest = models.OAAudioProcessRequest;
const GetEntityValueRequest = models.GetEntityValueRequest;
const DeleteEntitiesResponse = models.DeleteEntitiesResponse;
const GetIntentChainResponse = models.GetIntentChainResponse;
const ExportBotRequest = models.ExportBotRequest;
const DeleteEntityValueResponse = models.DeleteEntityValueResponse;
const GetWxBotInfoRequest = models.GetWxBotInfoRequest;
const StateInfo = models.StateInfo;
const WechatPostTextResponse = models.WechatPostTextResponse;
const EntityValueInfo = models.EntityValueInfo;
const VadAudioProcessRequest = models.VadAudioProcessRequest;
const IntentInfo = models.IntentInfo;
const UpdateWechatWorkUserlistRequest = models.UpdateWechatWorkUserlistRequest;
const GetQAInfoRequest = models.GetQAInfoRequest;
const UpdateEntityBasicInfoRequest = models.UpdateEntityBasicInfoRequest;
const SearchEntityValueResponse = models.SearchEntityValueResponse;
const GetEntitiesRequest = models.GetEntitiesRequest;
const DescribeRelationSlotsResponse = models.DescribeRelationSlotsResponse;
const GetWxAccountInfoRequest = models.GetWxAccountInfoRequest;
const GetBuiltInEntitiesResponse = models.GetBuiltInEntitiesResponse;
const SlotInfo = models.SlotInfo;
const UpdateEntityRequest = models.UpdateEntityRequest;
const DescribeParsedQueriesRequest = models.DescribeParsedQueriesRequest;
const CreateQARequest = models.CreateQARequest;
const ImportBotResponse = models.ImportBotResponse;
const DescribeParsedQueriesResponse = models.DescribeParsedQueriesResponse;
const ImportBotRequest = models.ImportBotRequest;
const AppAudioProcessRequest = models.AppAudioProcessRequest;
const UpdateBotNameResponse = models.UpdateBotNameResponse;
const EntityDetailInfo = models.EntityDetailInfo;
const BotVersionInfo = models.BotVersionInfo;
const GetAppAccessStateRequest = models.GetAppAccessStateRequest;
const GetPatternDuplicateStatusRequest = models.GetPatternDuplicateStatusRequest;
const AppTextResetRequest = models.AppTextResetRequest;
const EntityInfo = models.EntityInfo;
const UpdateAccountInfoRequest = models.UpdateAccountInfoRequest;
const OffLineBotResponse = models.OffLineBotResponse;
const GetWxIntentsRequest = models.GetWxIntentsRequest;
const EntityValueInfoForCreate = models.EntityValueInfoForCreate;
const PostTextResponse = models.PostTextResponse;
const CreateIntentRequest = models.CreateIntentRequest;
const GetWxIntentRequest = models.GetWxIntentRequest;
const UpdateBotChitchatTypeRequest = models.UpdateBotChitchatTypeRequest;
const UpdateQARequest = models.UpdateQARequest;
const QueryAnswerResponse = models.QueryAnswerResponse;
const QACategoryInfo = models.QACategoryInfo;
const AppAudioProcessResponse = models.AppAudioProcessResponse;
const BotInfo = models.BotInfo;
const GetIntentsRequest = models.GetIntentsRequest;
const UpdateQACategoryResponse = models.UpdateQACategoryResponse;
const UpdateEntityResponse = models.UpdateEntityResponse;
const SetIntentCallbackInterfaceResponse = models.SetIntentCallbackInterfaceResponse;
const RemoveBuiltInEntitiesResponse = models.RemoveBuiltInEntitiesResponse;
const UpdateAccountInfoResponse = models.UpdateAccountInfoResponse;
const BuildBotRequest = models.BuildBotRequest;
const QAAnswer = models.QAAnswer;
const AppTextResetResponse = models.AppTextResetResponse;
const UpdateQAResponse = models.UpdateQAResponse;
const GetWxBotsRequest = models.GetWxBotsRequest;
const GetAppAccessStateResponse = models.GetAppAccessStateResponse;
const GetEntitiesResponse = models.GetEntitiesResponse;
const UpdateWechatWorkUserlistResponse = models.UpdateWechatWorkUserlistResponse;
const UpdateQACategoryRequest = models.UpdateQACategoryRequest;
const QueryTaskStatusResponse = models.QueryTaskStatusResponse;
const SyncBotResponse = models.SyncBotResponse;
const CreateEntityRequest = models.CreateEntityRequest;
const GetQAInfoResponse = models.GetQAInfoResponse;
const AddBuiltInEntitiesResponse = models.AddBuiltInEntitiesResponse;
const CreateIntentResponse = models.CreateIntentResponse;
const GetWxBotInfoResponse = models.GetWxBotInfoResponse;
const CreateEntityValueRequest = models.CreateEntityValueRequest;
const GetQACategoriesResponse = models.GetQACategoriesResponse;
const UpdateBotChitchatTypeResponse = models.UpdateBotChitchatTypeResponse;
const TextProcessRequest = models.TextProcessRequest;
const SearchEntityValueRequest = models.SearchEntityValueRequest;
const RtsAdapterRequest = models.RtsAdapterRequest;
const GetQACountRequest = models.GetQACountRequest;
const RemoveBuiltInEntitiesRequest = models.RemoveBuiltInEntitiesRequest;
const AnswerList = models.AnswerList;
const UpdateIntentBasicInfoResponse = models.UpdateIntentBasicInfoResponse;
const UpdateBotNameRequest = models.UpdateBotNameRequest;
const OATextResetResponse = models.OATextResetResponse;
const OnLineBotRequest = models.OnLineBotRequest;
const DeleteIntentsResponse = models.DeleteIntentsResponse;
const SlotDetailInfo = models.SlotDetailInfo;
const RtsAdapterResponse = models.RtsAdapterResponse;
const GetBotInfoRequest = models.GetBotInfoRequest;
const ExportBotResponse = models.ExportBotResponse;
const QAQueryPattern = models.QAQueryPattern;
const GetWxIntentsResponse = models.GetWxIntentsResponse;
const UpdateAppAccessStateResponse = models.UpdateAppAccessStateResponse;
const GetWechatWorkInfoResponse = models.GetWechatWorkInfoResponse;
const GetWxAccountInfoResponse = models.GetWxAccountInfoResponse;
const GetQACountResponse = models.GetQACountResponse;
const OffLineBotRequest = models.OffLineBotRequest;
const AppTextProcessRequest = models.AppTextProcessRequest;
const GetSampleQuestionsRequest = models.GetSampleQuestionsRequest;
const GetEntityResponse = models.GetEntityResponse;
const CreateQAResponse = models.CreateQAResponse;
const EntityValue = models.EntityValue;
const MatchEntity = models.MatchEntity;
const TextResetRequest = models.TextResetRequest;
const IntentChain = models.IntentChain;
const ResetRequest = models.ResetRequest;
const DeleteEntitiesRequest = models.DeleteEntitiesRequest;
const SyncBotRequest = models.SyncBotRequest;
const GetSentenceEntitiesRequest = models.GetSentenceEntitiesRequest;
const UpdateEntityValueResponse = models.UpdateEntityValueResponse;
const OATextProcessRequest = models.OATextProcessRequest;
const ResetResponse = models.ResetResponse;
const CreateBotRequest = models.CreateBotRequest;
const GetIntentChainRequest = models.GetIntentChainRequest;
const BuildBotResponse = models.BuildBotResponse;
const SubIntentChain = models.SubIntentChain;
const OATextProcessResponse = models.OATextProcessResponse;
const WechatPostTextRequest = models.WechatPostTextRequest;
const DeleteQACategoryResponse = models.DeleteQACategoryResponse;
const DeleteQAResponse = models.DeleteQAResponse;
const UpdateIntentRequest = models.UpdateIntentRequest;
const QueryAnswerRequest = models.QueryAnswerRequest;
const DeleteBotsResponse = models.DeleteBotsResponse;
const CreateQACategoryRequest = models.CreateQACategoryRequest;
const WechatPostAudioRequest = models.WechatPostAudioRequest;
const GetVersionStatusRequest = models.GetVersionStatusRequest;
const UpdateIntentResponse = models.UpdateIntentResponse;
const UpdateEntityValueRequest = models.UpdateEntityValueRequest;
const QABasicInfo = models.QABasicInfo;
const DeleteEntityValueRequest = models.DeleteEntityValueRequest;
const AudioProcessResponse = models.AudioProcessResponse;
const UpdateWechatWorkConfigResponse = models.UpdateWechatWorkConfigResponse;
const GetAccountInfoRequest = models.GetAccountInfoRequest;
const PostAudioRequest = models.PostAudioRequest;


/**
 * tbp client
 * @class
 */
class TbpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbp.tencentcloudapi.com", "2019-03-11", credential, region, profile);
    }
    
    /**
     * 提供用户获取单个机器人的详细信息。
     * @param {GetWxBotInfoRequest} req
     * @param {function(string, GetWxBotInfoResponse):void} cb
     * @public
     */
    GetWxBotInfo(req, cb) {
        let resp = new GetWxBotInfoResponse();
        this.request("GetWxBotInfo", req, resp, cb);
    }

    /**
     * 提供用户用来查询某个意图的回调地址。
     * @param {GetIntentCallbackInterfaceRequest} req
     * @param {function(string, GetIntentCallbackInterfaceResponse):void} cb
     * @public
     */
    GetIntentCallbackInterface(req, cb) {
        let resp = new GetIntentCallbackInterfaceResponse();
        this.request("GetIntentCallbackInterface", req, resp, cb);
    }

    /**
     * 提供用户获取单个机器人的意图列表。
     * @param {GetIntentsRequest} req
     * @param {function(string, GetIntentsResponse):void} cb
     * @public
     */
    GetIntents(req, cb) {
        let resp = new GetIntentsResponse();
        this.request("GetIntents", req, resp, cb);
    }

    /**
     * 更新企业微信配置信息
     * @param {UpdateWechatWorkConfigRequest} req
     * @param {function(string, UpdateWechatWorkConfigResponse):void} cb
     * @public
     */
    UpdateWechatWorkConfig(req, cb) {
        let resp = new UpdateWechatWorkConfigResponse();
        this.request("UpdateWechatWorkConfig", req, resp, cb);
    }

    /**
     * 用来提供用户添加内置词典
     * @param {AddBuiltInEntitiesRequest} req
     * @param {function(string, AddBuiltInEntitiesResponse):void} cb
     * @public
     */
    AddBuiltInEntities(req, cb) {
        let resp = new AddBuiltInEntitiesResponse();
        this.request("AddBuiltInEntities", req, resp, cb);
    }

    /**
     * 设置意图回调
     * @param {SetIntentCallbackInterfaceRequest} req
     * @param {function(string, SetIntentCallbackInterfaceResponse):void} cb
     * @public
     */
    SetIntentCallbackInterface(req, cb) {
        let resp = new SetIntentCallbackInterfaceResponse();
        this.request("SetIntentCallbackInterface", req, resp, cb);
    }

    /**
     * 批量上传query
     * @param {DescribeParsedQueriesRequest} req
     * @param {function(string, DescribeParsedQueriesResponse):void} cb
     * @public
     */
    DescribeParsedQueries(req, cb) {
        let resp = new DescribeParsedQueriesResponse();
        this.request("DescribeParsedQueries", req, resp, cb);
    }

    /**
     * 获取企业微信信息
     * @param {GetWechatWorkInfoRequest} req
     * @param {function(string, GetWechatWorkInfoResponse):void} cb
     * @public
     */
    GetWechatWorkInfo(req, cb) {
        let resp = new GetWechatWorkInfoResponse();
        this.request("GetWechatWorkInfo", req, resp, cb);
    }

    /**
     * 会话重置接口。已废弃，推荐使用最新版TextReset接口。
     * @param {TextResetRequest} req
     * @param {function(string, TextResetResponse):void} cb
     * @public
     */
    TextReset(req, cb) {
        let resp = new TextResetResponse();
        this.request("TextReset", req, resp, cb);
    }

    /**
     * 全量更新实体
     * @param {UpdateEntityRequest} req
     * @param {function(string, UpdateEntityResponse):void} cb
     * @public
     */
    UpdateEntity(req, cb) {
        let resp = new UpdateEntityResponse();
        this.request("UpdateEntity", req, resp, cb);
    }

    /**
     * 仅供微信公众号、小程序调用，接收音频信息，传递给后台机器人
     * @param {WechatPostAudioRequest} req
     * @param {function(string, WechatPostAudioResponse):void} cb
     * @public
     */
    WechatPostAudio(req, cb) {
        let resp = new WechatPostAudioResponse();
        this.request("WechatPostAudio", req, resp, cb);
    }

    /**
     * 接收调用侧的音频输入，返回应答文本。
     * @param {AudioProcessRequest} req
     * @param {function(string, AudioProcessResponse):void} cb
     * @public
     */
    AudioProcess(req, cb) {
        let resp = new AudioProcessResponse();
        this.request("AudioProcess", req, resp, cb);
    }

    /**
     * 获取意图串联链
     * @param {GetIntentChainRequest} req
     * @param {function(string, GetIntentChainResponse):void} cb
     * @public
     */
    GetIntentChain(req, cb) {
        let resp = new GetIntentChainResponse();
        this.request("GetIntentChain", req, resp, cb);
    }

    /**
     * 更新意图基本信息
     * @param {UpdateIntentBasicInfoRequest} req
     * @param {function(string, UpdateIntentBasicInfoResponse):void} cb
     * @public
     */
    UpdateIntentBasicInfo(req, cb) {
        let resp = new UpdateIntentBasicInfoResponse();
        this.request("UpdateIntentBasicInfo", req, resp, cb);
    }

    /**
     * 机器人会话接口，接收音频信息，传递给后台机器人
     * @param {PostAudioRequest} req
     * @param {function(string, PostAudioResponse):void} cb
     * @public
     */
    PostAudio(req, cb) {
        let resp = new PostAudioResponse();
        this.request("PostAudio", req, resp, cb);
    }

    /**
     * 提供用户获取单个机器人的意图列表。
     * @param {GetWxIntentsRequest} req
     * @param {function(string, GetWxIntentsResponse):void} cb
     * @public
     */
    GetWxIntents(req, cb) {
        let resp = new GetWxIntentsResponse();
        this.request("GetWxIntents", req, resp, cb);
    }

    /**
     * 提供用户进行机器人编译
     * @param {BuildBotRequest} req
     * @param {function(string, BuildBotResponse):void} cb
     * @public
     */
    BuildBot(req, cb) {
        let resp = new BuildBotResponse();
        this.request("BuildBot", req, resp, cb);
    }

    /**
     * 提供用户获取单个机器人的详细信息。
     * @param {GetBotInfoRequest} req
     * @param {function(string, GetBotInfoResponse):void} cb
     * @public
     */
    GetBotInfo(req, cb) {
        let resp = new GetBotInfoResponse();
        this.request("GetBotInfo", req, resp, cb);
    }

    /**
     * 提供用户用来创建意图
     * @param {CreateIntentRequest} req
     * @param {function(string, CreateIntentResponse):void} cb
     * @public
     */
    CreateIntent(req, cb) {
        let resp = new CreateIntentResponse();
        this.request("CreateIntent", req, resp, cb);
    }

    /**
     * 获取用户账号信息(小程序)
     * @param {GetWxAccountInfoRequest} req
     * @param {function(string, GetWxAccountInfoResponse):void} cb
     * @public
     */
    GetWxAccountInfo(req, cb) {
        let resp = new GetWxAccountInfoResponse();
        this.request("GetWxAccountInfo", req, resp, cb);
    }

    /**
     * 会话重置接口。已废弃，推荐使用最新版TextReset接口。
     * @param {AppTextResetRequest} req
     * @param {function(string, AppTextResetResponse):void} cb
     * @public
     */
    AppTextReset(req, cb) {
        let resp = new AppTextResetResponse();
        this.request("AppTextReset", req, resp, cb);
    }

    /**
     * 更新实体基本信息
     * @param {UpdateEntityBasicInfoRequest} req
     * @param {function(string, UpdateEntityBasicInfoResponse):void} cb
     * @public
     */
    UpdateEntityBasicInfo(req, cb) {
        let resp = new UpdateEntityBasicInfoResponse();
        this.request("UpdateEntityBasicInfo", req, resp, cb);
    }

    /**
     * 删除QA类型
     * @param {DeleteQACategoryRequest} req
     * @param {function(string, DeleteQACategoryResponse):void} cb
     * @public
     */
    DeleteQACategory(req, cb) {
        let resp = new DeleteQACategoryResponse();
        this.request("DeleteQACategory", req, resp, cb);
    }

    /**
     * 提供用户进行拉取机器人编译过的版本信息
     * @param {GetVersionStatusRequest} req
     * @param {function(string, GetVersionStatusResponse):void} cb
     * @public
     */
    GetVersionStatus(req, cb) {
        let resp = new GetVersionStatusResponse();
        this.request("GetVersionStatus", req, resp, cb);
    }

    /**
     * 提供用户进行意图删除。
     * @param {DeleteIntentsRequest} req
     * @param {function(string, DeleteIntentsResponse):void} cb
     * @public
     */
    DeleteIntents(req, cb) {
        let resp = new DeleteIntentsResponse();
        this.request("DeleteIntents", req, resp, cb);
    }

    /**
     * 获取标准问题总数
     * @param {GetQACountRequest} req
     * @param {function(string, GetQACountResponse):void} cb
     * @public
     */
    GetQACount(req, cb) {
        let resp = new GetQACountResponse();
        this.request("GetQACount", req, resp, cb);
    }

    /**
     * 创建机器人
     * @param {CreateBotRequest} req
     * @param {function(string, CreateBotResponse):void} cb
     * @public
     */
    CreateBot(req, cb) {
        let resp = new CreateBotResponse();
        this.request("CreateBot", req, resp, cb);
    }

    /**
     * 删除QA
     * @param {DeleteQARequest} req
     * @param {function(string, DeleteQAResponse):void} cb
     * @public
     */
    DeleteQA(req, cb) {
        let resp = new DeleteQAResponse();
        this.request("DeleteQA", req, resp, cb);
    }

    /**
     * 提供用户用来创建词条
     * @param {CreateEntityValueRequest} req
     * @param {function(string, CreateEntityValueResponse):void} cb
     * @public
     */
    CreateEntityValue(req, cb) {
        let resp = new CreateEntityValueResponse();
        this.request("CreateEntityValue", req, resp, cb);
    }

    /**
     * 提供用户对已经上线的机器人进行下线操作。
     * @param {OffLineBotRequest} req
     * @param {function(string, OffLineBotResponse):void} cb
     * @public
     */
    OffLineBot(req, cb) {
        let resp = new OffLineBotResponse();
        this.request("OffLineBot", req, resp, cb);
    }

    /**
     * 接收音频流输入并进行VAD语音识别，对识别获得每一个用户输入语句调用对话接口实时返回结果。适用于通话等场景。
     * @param {VadAudioProcessRequest} req
     * @param {function(string, VadAudioProcessResponse):void} cb
     * @public
     */
    VadAudioProcess(req, cb) {
        let resp = new VadAudioProcessResponse();
        this.request("VadAudioProcess", req, resp, cb);
    }

    /**
     * 仅供微信公众号、小程序调用，接收文本信息，传递给后台机器人
     * @param {WechatPostTextRequest} req
     * @param {function(string, WechatPostTextResponse):void} cb
     * @public
     */
    WechatPostText(req, cb) {
        let resp = new WechatPostTextResponse();
        this.request("WechatPostText", req, resp, cb);
    }

    /**
     * 提供接口用来让用户移除内置词典
     * @param {RemoveBuiltInEntitiesRequest} req
     * @param {function(string, RemoveBuiltInEntitiesResponse):void} cb
     * @public
     */
    RemoveBuiltInEntities(req, cb) {
        let resp = new RemoveBuiltInEntitiesResponse();
        this.request("RemoveBuiltInEntities", req, resp, cb);
    }

    /**
     * 接收调用侧的文本输入，返回应答文本。已废弃，推荐使用最新版TextProcess接口。
     * @param {TextProcessRequest} req
     * @param {function(string, TextProcessResponse):void} cb
     * @public
     */
    TextProcess(req, cb) {
        let resp = new TextProcessResponse();
        this.request("TextProcess", req, resp, cb);
    }

    /**
     * 更新机器人闲聊设置，允许开启或者关闭是否使用闲聊作为兜底返回。
     * @param {UpdateBotChitchatTypeRequest} req
     * @param {function(string, UpdateBotChitchatTypeResponse):void} cb
     * @public
     */
    UpdateBotChitchatType(req, cb) {
        let resp = new UpdateBotChitchatTypeResponse();
        this.request("UpdateBotChitchatType", req, resp, cb);
    }

    /**
     * 提供用户用来创建词典
     * @param {CreateEntityRequest} req
     * @param {function(string, CreateEntityResponse):void} cb
     * @public
     */
    CreateEntity(req, cb) {
        let resp = new CreateEntityResponse();
        this.request("CreateEntity", req, resp, cb);
    }

    /**
     * 机器人会话接口，接收文本信息，传递给后台机器人
     * @param {PostTextRequest} req
     * @param {function(string, PostTextResponse):void} cb
     * @public
     */
    PostText(req, cb) {
        let resp = new PostTextResponse();
        this.request("PostText", req, resp, cb);
    }

    /**
     * 更新企业微信客服列表
     * @param {UpdateWechatWorkUserlistRequest} req
     * @param {function(string, UpdateWechatWorkUserlistResponse):void} cb
     * @public
     */
    UpdateWechatWorkUserlist(req, cb) {
        let resp = new UpdateWechatWorkUserlistResponse();
        this.request("UpdateWechatWorkUserlist", req, resp, cb);
    }

    /**
     * 提供用户用来进行词典删除，可以同时删除多个
     * @param {DeleteEntitiesRequest} req
     * @param {function(string, DeleteEntitiesResponse):void} cb
     * @public
     */
    DeleteEntities(req, cb) {
        let resp = new DeleteEntitiesResponse();
        this.request("DeleteEntities", req, resp, cb);
    }

    /**
     * UpdateAccountInfo
     * @param {UpdateAccountInfoRequest} req
     * @param {function(string, UpdateAccountInfoResponse):void} cb
     * @public
     */
    UpdateAccountInfo(req, cb) {
        let resp = new UpdateAccountInfoResponse();
        this.request("UpdateAccountInfo", req, resp, cb);
    }

    /**
     * 对当前机器人的会话状态进行复位
     * @param {ResetRequest} req
     * @param {function(string, ResetResponse):void} cb
     * @public
     */
    Reset(req, cb) {
        let resp = new ResetResponse();
        this.request("Reset", req, resp, cb);
    }

    /**
     * 提供用户进行会话机器人删除，可以同时删除多个。
     * @param {DeleteBotsRequest} req
     * @param {function(string, DeleteBotsResponse):void} cb
     * @public
     */
    DeleteBots(req, cb) {
        let resp = new DeleteBotsResponse();
        this.request("DeleteBots", req, resp, cb);
    }

    /**
     * 导出机器人信息，支持全量/部分导出
     * @param {ExportBotRequest} req
     * @param {function(string, ExportBotResponse):void} cb
     * @public
     */
    ExportBot(req, cb) {
        let resp = new ExportBotResponse();
        this.request("ExportBot", req, resp, cb);
    }

    /**
     * 接收调用侧的文本输入，返回应答文本。鉴权通过后，用PrivateAppId替换AppId。已废弃，推荐使用最新版TextProcess接口。
     * @param {AppTextProcessRequest} req
     * @param {function(string, AppTextProcessResponse):void} cb
     * @public
     */
    AppTextProcess(req, cb) {
        let resp = new AppTextProcessResponse();
        this.request("AppTextProcess", req, resp, cb);
    }

    /**
     * 提供用户进行词条更新接口。
     * @param {UpdateEntityValueRequest} req
     * @param {function(string, UpdateEntityValueResponse):void} cb
     * @public
     */
    UpdateEntityValue(req, cb) {
        let resp = new UpdateEntityValueResponse();
        this.request("UpdateEntityValue", req, resp, cb);
    }

    /**
     * 提供用户获取词条
     * @param {GetEntityValueRequest} req
     * @param {function(string, GetEntityValueResponse):void} cb
     * @public
     */
    GetEntityValue(req, cb) {
        let resp = new GetEntityValueResponse();
        this.request("GetEntityValue", req, resp, cb);
    }

    /**
     * 获取标准问题列表
     * @param {GetSampleQuestionsRequest} req
     * @param {function(string, GetSampleQuestionsResponse):void} cb
     * @public
     */
    GetSampleQuestions(req, cb) {
        let resp = new GetSampleQuestionsResponse();
        this.request("GetSampleQuestions", req, resp, cb);
    }

    /**
     * 同步机器人给算法平台
     * @param {SyncBotRequest} req
     * @param {function(string, SyncBotResponse):void} cb
     * @public
     */
    SyncBot(req, cb) {
        let resp = new SyncBotResponse();
        this.request("SyncBot", req, resp, cb);
    }

    /**
     * 提供用户进行词条删除。
     * @param {DeleteEntityValueRequest} req
     * @param {function(string, DeleteEntityValueResponse):void} cb
     * @public
     */
    DeleteEntityValue(req, cb) {
        let resp = new DeleteEntityValueResponse();
        this.request("DeleteEntityValue", req, resp, cb);
    }

    /**
     * 查询与当前文本直接关联的槽位，文本属于槽位内的词典则认为被关联
     * @param {DescribeRelationSlotsRequest} req
     * @param {function(string, DescribeRelationSlotsResponse):void} cb
     * @public
     */
    DescribeRelationSlots(req, cb) {
        let resp = new DescribeRelationSlotsResponse();
        this.request("DescribeRelationSlots", req, resp, cb);
    }

    /**
     * 全量更新意图
     * @param {UpdateIntentRequest} req
     * @param {function(string, UpdateIntentResponse):void} cb
     * @public
     */
    UpdateIntent(req, cb) {
        let resp = new UpdateIntentResponse();
        this.request("UpdateIntent", req, resp, cb);
    }

    /**
     * 获取用户账号信息
     * @param {GetAccountInfoRequest} req
     * @param {function(string, GetAccountInfoResponse):void} cb
     * @public
     */
    GetAccountInfo(req, cb) {
        let resp = new GetAccountInfoResponse();
        this.request("GetAccountInfo", req, resp, cb);
    }

    /**
     * 查询异步任务状态
     * @param {QueryTaskStatusRequest} req
     * @param {function(string, QueryTaskStatusResponse):void} cb
     * @public
     */
    QueryTaskStatus(req, cb) {
        let resp = new QueryTaskStatusResponse();
        this.request("QueryTaskStatus", req, resp, cb);
    }

    /**
     * 创建QA
     * @param {CreateQARequest} req
     * @param {function(string, CreateQAResponse):void} cb
     * @public
     */
    CreateQA(req, cb) {
        let resp = new CreateQAResponse();
        this.request("CreateQA", req, resp, cb);
    }

    /**
     * RTS服务适配层接口
     * @param {RtsAdapterRequest} req
     * @param {function(string, RtsAdapterResponse):void} cb
     * @public
     */
    RtsAdapter(req, cb) {
        let resp = new RtsAdapterResponse();
        this.request("RtsAdapter", req, resp, cb);
    }

    /**
     * 游云南项目机器人回复接口
     * @param {QueryAnswerRequest} req
     * @param {function(string, QueryAnswerResponse):void} cb
     * @public
     */
    QueryAnswer(req, cb) {
        let resp = new QueryAnswerResponse();
        this.request("QueryAnswer", req, resp, cb);
    }

    /**
     * 更新机器人名称
     * @param {UpdateBotNameRequest} req
     * @param {function(string, UpdateBotNameResponse):void} cb
     * @public
     */
    UpdateBotName(req, cb) {
        let resp = new UpdateBotNameResponse();
        this.request("UpdateBotName", req, resp, cb);
    }

    /**
     * 提供用户进行用户话术查重接口。
     * @param {GetPatternDuplicateStatusRequest} req
     * @param {function(string, GetPatternDuplicateStatusResponse):void} cb
     * @public
     */
    GetPatternDuplicateStatus(req, cb) {
        let resp = new GetPatternDuplicateStatusResponse();
        this.request("GetPatternDuplicateStatus", req, resp, cb);
    }

    /**
     * 提供用户获取词典列表
     * @param {GetEntitiesRequest} req
     * @param {function(string, GetEntitiesResponse):void} cb
     * @public
     */
    GetEntities(req, cb) {
        let resp = new GetEntitiesResponse();
        this.request("GetEntities", req, resp, cb);
    }

    /**
     * 获取用户说法中匹配的实体
     * @param {GetSentenceEntitiesRequest} req
     * @param {function(string, GetSentenceEntitiesResponse):void} cb
     * @public
     */
    GetSentenceEntities(req, cb) {
        let resp = new GetSentenceEntitiesResponse();
        this.request("GetSentenceEntities", req, resp, cb);
    }

    /**
     * 接收调用侧的文本输入，返回应答文本。仅限微信公众号使用。已废弃，推荐使用最新版TextProcess接口。
     * @param {OATextProcessRequest} req
     * @param {function(string, OATextProcessResponse):void} cb
     * @public
     */
    OATextProcess(req, cb) {
        let resp = new OATextProcessResponse();
        this.request("OATextProcess", req, resp, cb);
    }

    /**
     * 提供用户进行获取机器人列表
     * @param {GetBotsRequest} req
     * @param {function(string, GetBotsResponse):void} cb
     * @public
     */
    GetBots(req, cb) {
        let resp = new GetBotsResponse();
        this.request("GetBots", req, resp, cb);
    }

    /**
     * 获取所有QA类型
     * @param {GetQACategoriesRequest} req
     * @param {function(string, GetQACategoriesResponse):void} cb
     * @public
     */
    GetQACategories(req, cb) {
        let resp = new GetQACategoriesResponse();
        this.request("GetQACategories", req, resp, cb);
    }

    /**
     * 提供用户进行获取意图信息
     * @param {GetWxIntentRequest} req
     * @param {function(string, GetWxIntentResponse):void} cb
     * @public
     */
    GetWxIntent(req, cb) {
        let resp = new GetWxIntentResponse();
        this.request("GetWxIntent", req, resp, cb);
    }

    /**
     * 提供用户对单个已编译通过的机器人进行上线操作
     * @param {OnLineBotRequest} req
     * @param {function(string, OnLineBotResponse):void} cb
     * @public
     */
    OnLineBot(req, cb) {
        let resp = new OnLineBotResponse();
        this.request("OnLineBot", req, resp, cb);
    }

    /**
     * 获取QA详细信息
     * @param {GetQAInfoRequest} req
     * @param {function(string, GetQAInfoResponse):void} cb
     * @public
     */
    GetQAInfo(req, cb) {
        let resp = new GetQAInfoResponse();
        this.request("GetQAInfo", req, resp, cb);
    }

    /**
     * 更新QA类型
     * @param {UpdateQACategoryRequest} req
     * @param {function(string, UpdateQACategoryResponse):void} cb
     * @public
     */
    UpdateQACategory(req, cb) {
        let resp = new UpdateQACategoryResponse();
        this.request("UpdateQACategory", req, resp, cb);
    }

    /**
     * 接收调用侧的音频输入，返回应答文本。仅限微信公众号使用。
     * @param {OAAudioProcessRequest} req
     * @param {function(string, OAAudioProcessResponse):void} cb
     * @public
     */
    OAAudioProcess(req, cb) {
        let resp = new OAAudioProcessResponse();
        this.request("OAAudioProcess", req, resp, cb);
    }

    /**
     * 提供接口供用户接入状态更新。
     * @param {UpdateAppAccessStateRequest} req
     * @param {function(string, UpdateAppAccessStateResponse):void} cb
     * @public
     */
    UpdateAppAccessState(req, cb) {
        let resp = new UpdateAppAccessStateResponse();
        this.request("UpdateAppAccessState", req, resp, cb);
    }

    /**
     * 获取机器人列表
     * @param {GetWxBotsRequest} req
     * @param {function(string, GetWxBotsResponse):void} cb
     * @public
     */
    GetWxBots(req, cb) {
        let resp = new GetWxBotsResponse();
        this.request("GetWxBots", req, resp, cb);
    }

    /**
     * 接收调用侧的音频输入，返回应答文本。鉴权通过后，用PrivateAppId替换AppId。
     * @param {AppAudioProcessRequest} req
     * @param {function(string, AppAudioProcessResponse):void} cb
     * @public
     */
    AppAudioProcess(req, cb) {
        let resp = new AppAudioProcessResponse();
        this.request("AppAudioProcess", req, resp, cb);
    }

    /**
     * 获取实习详细信息
     * @param {GetEntityRequest} req
     * @param {function(string, GetEntityResponse):void} cb
     * @public
     */
    GetEntity(req, cb) {
        let resp = new GetEntityResponse();
        this.request("GetEntity", req, resp, cb);
    }

    /**
     * 提供用户用来搜索词条
     * @param {SearchEntityValueRequest} req
     * @param {function(string, SearchEntityValueResponse):void} cb
     * @public
     */
    SearchEntityValue(req, cb) {
        let resp = new SearchEntityValueResponse();
        this.request("SearchEntityValue", req, resp, cb);
    }

    /**
     * 创建QA类型
     * @param {CreateQACategoryRequest} req
     * @param {function(string, CreateQACategoryResponse):void} cb
     * @public
     */
    CreateQACategory(req, cb) {
        let resp = new CreateQACategoryResponse();
        this.request("CreateQACategory", req, resp, cb);
    }

    /**
     * 提供用户进行获取意图信息
     * @param {GetIntentRequest} req
     * @param {function(string, GetIntentResponse):void} cb
     * @public
     */
    GetIntent(req, cb) {
        let resp = new GetIntentResponse();
        this.request("GetIntent", req, resp, cb);
    }

    /**
     * 更新QA
     * @param {UpdateQARequest} req
     * @param {function(string, UpdateQAResponse):void} cb
     * @public
     */
    UpdateQA(req, cb) {
        let resp = new UpdateQAResponse();
        this.request("UpdateQA", req, resp, cb);
    }

    /**
     * 提供用户获取内置词典
     * @param {GetBuiltInEntitiesRequest} req
     * @param {function(string, GetBuiltInEntitiesResponse):void} cb
     * @public
     */
    GetBuiltInEntities(req, cb) {
        let resp = new GetBuiltInEntitiesResponse();
        this.request("GetBuiltInEntities", req, resp, cb);
    }

    /**
     * 提供用户获取应用接入状态接口
     * @param {GetAppAccessStateRequest} req
     * @param {function(string, GetAppAccessStateResponse):void} cb
     * @public
     */
    GetAppAccessState(req, cb) {
        let resp = new GetAppAccessStateResponse();
        this.request("GetAppAccessState", req, resp, cb);
    }

    /**
     * 会话重置接口。已废弃，推荐使用最新版TextReset接口。
     * @param {OATextResetRequest} req
     * @param {function(string, OATextResetResponse):void} cb
     * @public
     */
    OATextReset(req, cb) {
        let resp = new OATextResetResponse();
        this.request("OATextReset", req, resp, cb);
    }

    /**
     * 导入机器人信息，可局部导入，可全量导入
     * @param {ImportBotRequest} req
     * @param {function(string, ImportBotResponse):void} cb
     * @public
     */
    ImportBot(req, cb) {
        let resp = new ImportBotResponse();
        this.request("ImportBot", req, resp, cb);
    }


}
module.exports = TbpClient;
