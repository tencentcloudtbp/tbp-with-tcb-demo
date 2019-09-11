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
const GetFeatureFlagsRequest = models.GetFeatureFlagsRequest;
const Group = models.Group;
const DescribeServiceOverviewResponse = models.DescribeServiceOverviewResponse;
const DescribeQueryPatternCountRequest = models.DescribeQueryPatternCountRequest;
const SlotDetailInfo = models.SlotDetailInfo;
const TextResetResponse = models.TextResetResponse;
const IntentChainItem = models.IntentChainItem;
const ResponseMessage = models.ResponseMessage;
const DownLoadQueryPatternResponse = models.DownLoadQueryPatternResponse;
const Sort = models.Sort;
const DescribeServiceOverviewRequest = models.DescribeServiceOverviewRequest;
const IntentInfoForUpdate = models.IntentInfoForUpdate;
const DescribeRequestIdCountRequest = models.DescribeRequestIdCountRequest;
const TextResetRequest = models.TextResetRequest;
const SlotForUpdateIntent = models.SlotForUpdateIntent;
const TextProcessResponse = models.TextProcessResponse;
const DescribeIntentCountRequest = models.DescribeIntentCountRequest;
const QueryPattern = models.QueryPattern;
const DownLoadQueryPatternRequest = models.DownLoadQueryPatternRequest;
const UpdateIntentResponse = models.UpdateIntentResponse;
const DescribeQuestionCountResponse = models.DescribeQuestionCountResponse;
const DescribeTerminalNumResponse = models.DescribeTerminalNumResponse;
const FeatureItem = models.FeatureItem;
const DescribeRequestIdCountResponse = models.DescribeRequestIdCountResponse;
const GetIntentRequest = models.GetIntentRequest;
const EntityInfo = models.EntityInfo;
const Filter = models.Filter;
const DescribeQueryPatternCountResponse = models.DescribeQueryPatternCountResponse;
const UpdateIntentRequest = models.UpdateIntentRequest;
const TextProcessRequest = models.TextProcessRequest;
const DescribeQuestionCountRequest = models.DescribeQuestionCountRequest;
const DescribeIntentCountResponse = models.DescribeIntentCountResponse;
const DescribeTerminalNumRequest = models.DescribeTerminalNumRequest;
const Overview = models.Overview;
const EntityInfoForUpdateIntent = models.EntityInfoForUpdateIntent;
const SlotInfo = models.SlotInfo;
const Unit = models.Unit;
const GetFeatureFlagsResponse = models.GetFeatureFlagsResponse;
const GetIntentResponse = models.GetIntentResponse;


/**
 * tbp client
 * @class
 */
class TbpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbp.tencentcloudapi.com", "2019-06-27", credential, region, profile);
    }
    
    /**
     * 会话重置接口。
     * @param {TextResetRequest} req
     * @param {function(string, TextResetResponse):void} cb
     * @public
     */
    TextReset(req, cb) {
        let resp = new TextResetResponse();
        this.request("TextReset", req, resp, cb);
    }

    /**
     * 查询当前账户下，指定日期、指定机器人的意图命中信息。
     * @param {DescribeIntentCountRequest} req
     * @param {function(string, DescribeIntentCountResponse):void} cb
     * @public
     */
    DescribeIntentCount(req, cb) {
        let resp = new DescribeIntentCountResponse();
        this.request("DescribeIntentCount", req, resp, cb);
    }

    /**
     * 查询用户说法命中信息
     * @param {DescribeQueryPatternCountRequest} req
     * @param {function(string, DescribeQueryPatternCountResponse):void} cb
     * @public
     */
    DescribeQueryPatternCount(req, cb) {
        let resp = new DescribeQueryPatternCountResponse();
        this.request("DescribeQueryPatternCount", req, resp, cb);
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
     * 查询当前账户下，指定日期的所有机器人调用次数信息。
     * @param {DescribeRequestIdCountRequest} req
     * @param {function(string, DescribeRequestIdCountResponse):void} cb
     * @public
     */
    DescribeRequestIdCount(req, cb) {
        let resp = new DescribeRequestIdCountResponse();
        this.request("DescribeRequestIdCount", req, resp, cb);
    }

    /**
     * 接收调用侧的文本输入，返回应答文本。
     * @param {TextProcessRequest} req
     * @param {function(string, TextProcessResponse):void} cb
     * @public
     */
    TextProcess(req, cb) {
        let resp = new TextProcessResponse();
        this.request("TextProcess", req, resp, cb);
    }

    /**
     * 下载用户说法列表
     * @param {DownLoadQueryPatternRequest} req
     * @param {function(string, DownLoadQueryPatternResponse):void} cb
     * @public
     */
    DownLoadQueryPattern(req, cb) {
        let resp = new DownLoadQueryPatternResponse();
        this.request("DownLoadQueryPattern", req, resp, cb);
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
     * 获取特性列表
     * @param {GetFeatureFlagsRequest} req
     * @param {function(string, GetFeatureFlagsResponse):void} cb
     * @public
     */
    GetFeatureFlags(req, cb) {
        let resp = new GetFeatureFlagsResponse();
        this.request("GetFeatureFlags", req, resp, cb);
    }

    /**
     * 查询当前账户下，指定日期的所有机器人服务人数信息。
     * @param {DescribeTerminalNumRequest} req
     * @param {function(string, DescribeTerminalNumResponse):void} cb
     * @public
     */
    DescribeTerminalNum(req, cb) {
        let resp = new DescribeTerminalNumResponse();
        this.request("DescribeTerminalNum", req, resp, cb);
    }

    /**
     * 查询当前账户下，指定日期、指定机器人的问答命中信息。
     * @param {DescribeQuestionCountRequest} req
     * @param {function(string, DescribeQuestionCountResponse):void} cb
     * @public
     */
    DescribeQuestionCount(req, cb) {
        let resp = new DescribeQuestionCountResponse();
        this.request("DescribeQuestionCount", req, resp, cb);
    }

    /**
     * 查询机器人服务人数与调用次数。
     * @param {DescribeServiceOverviewRequest} req
     * @param {function(string, DescribeServiceOverviewResponse):void} cb
     * @public
     */
    DescribeServiceOverview(req, cb) {
        let resp = new DescribeServiceOverviewResponse();
        this.request("DescribeServiceOverview", req, resp, cb);
    }


}
module.exports = TbpClient;
