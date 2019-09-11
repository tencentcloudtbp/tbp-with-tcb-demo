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
const AbstractModel = require("../../common/abstract_model");

/**
 * WechatPostAudio返回参数结构体
 * @class
 */
class WechatPostAudioResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态。取值:"start"/"continue"/"complete"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 机器人应答文本
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 语义解析的槽位结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 用户说法。该说法是用户原生说法或ASR识别结果，未经过语义优化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Question = null;

        /**
         * tts合成pcm音频存储链接。仅当请求参数NeedTts=true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveUrl = null;

        /**
         * tts合成pcm音频
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.WaveUrl = 'WaveUrl' in params ? params.WaveUrl : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OATextReset请求参数结构体
 * @class
 */
class OATextResetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;

    }
}

/**
 * DeleteIntents请求参数结构体
 * @class
 */
class DeleteIntentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 意图标识Id数组
         * @type {Array.<string> || null}
         */
        this.IntentIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.IntentIds = 'IntentIds' in params ? params.IntentIds : null;

    }
}

/**
 * GetBots请求参数结构体
 * @class
 */
class GetBotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取页面下标
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 拉取页机器人个数
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * GetSampleQuestions返回参数结构体
 * @class
 */
class GetSampleQuestionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * QA信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QABasicInfo> || null}
         */
        this.QAList = null;

        /**
         * 总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.QAList) {
            this.QAList = new Array();
            for (let z in params.QAList) {
                let obj = new QABasicInfo();
                obj.deserialize(params.QAList[z]);
                this.QAList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateQACategory返回参数结构体
 * @class
 */
class CreateQACategoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppTextProcess返回参数结构体
 * @class
 */
class AppTextProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 机器人对话的应答文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryTaskStatus请求参数结构体
 * @class
 */
class QueryTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;

    }
}

/**
 * DeleteBots请求参数结构体
 * @class
 */
class DeleteBotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话机器人Id数组
         * @type {Array.<string> || null}
         */
        this.BotIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotIds = 'BotIds' in params ? params.BotIds : null;

    }
}

/**
 * CreateBot返回参数结构体
 * @class
 */
class CreateBotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 任务信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBuiltInEntities请求参数结构体
 * @class
 */
class GetBuiltInEntitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 获取页面下标
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 获取页面容量个数
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeRelationSlots请求参数结构体
 * @class
 */
class DescribeRelationSlotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询是否与槽位关联的文本
         * @type {string || null}
         */
        this.QueryText = null;

        /**
         * 槽位列表
         * @type {Array.<SlotDetailInfo> || null}
         */
        this.SlotList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueryText = 'QueryText' in params ? params.QueryText : null;

        if (params.SlotList) {
            this.SlotList = new Array();
            for (let z in params.SlotList) {
                let obj = new SlotDetailInfo();
                obj.deserialize(params.SlotList[z]);
                this.SlotList.push(obj);
            }
        }

    }
}

/**
 * UpdateEntityBasicInfo返回参数结构体
 * @class
 */
class UpdateEntityBasicInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 异步任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextProcess返回参数结构体
 * @class
 */
class TextProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 机器人对话的应答文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OAAudioProcess返回参数结构体
 * @class
 */
class OAAudioProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人回答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 透传字段，由endpoint服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateWechatWorkConfig请求参数结构体
 * @class
 */
class UpdateWechatWorkConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * CorpId
         * @type {string || null}
         */
        this.CorpId = null;

        /**
         *  接口secret
         * @type {string || null}
         */
        this.CorpSecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.CorpSecret = 'CorpSecret' in params ? params.CorpSecret : null;

    }
}

/**
 * CreateEntityValue返回参数结构体
 * @class
 */
class CreateEntityValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VadAudioProcess返回参数结构体
 * @class
 */
class VadAudioProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 2秒/5秒不说话事件可能触发多次，客户端根据该ID去重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseId = null;

        /**
         * 当前会话状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 机器人回答
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * ASR识别文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResponseId = 'ResponseId' in params ? params.ResponseId : null;
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.UserText = 'UserText' in params ? params.UserText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetQACategories请求参数结构体
 * @class
 */
class GetQACategoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * GetBots返回参数结构体
 * @class
 */
class GetBotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人列表List
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BotInfo> || null}
         */
        this.BotList = null;

        /**
         * 总共机器人个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BotList) {
            this.BotList = new Array();
            for (let z in params.BotList) {
                let obj = new BotInfo();
                obj.deserialize(params.BotList[z]);
                this.BotList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PostText请求参数结构体
 * @class
 */
class PostTextRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 请求的文本
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 子账户id，每个终端对应一个
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 机器人版本号。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 透传字段，传递给后台
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 是否将机器人回答合成音频并返回url
         * @type {boolean || null}
         */
        this.NeedTts = null;

        /**
         * 音量大小，范围：[0，10]。默认值为0，代表正常音量
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 语速，范围：[-2，2]。0代表1.0倍
         * @type {number || null}
         */
        this.Speed = null;

        /**
         * 音色,{0：女声,1:男声}
         * @type {number || null}
         */
        this.VoiceType = null;

        /**
         * 返回音频的采样率{8k,16k}。默认16k
         * @type {string || null}
         */
        this.SampleRate = null;

        /**
         * 机器人环境{dev:测试;release:线上}。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * TTS合成音频格式，{0：wav}。该字段在当前版本仅支持取值为0。
         * @type {number || null}
         */
        this.TtsVoiceFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.NeedTts = 'NeedTts' in params ? params.NeedTts : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.TtsVoiceFormat = 'TtsVoiceFormat' in params ? params.TtsVoiceFormat : null;

    }
}

/**
 * GetWxBots返回参数结构体
 * @class
 */
class GetWxBotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人列表List
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BotInfo> || null}
         */
        this.BotList = null;

        /**
         * 总共机器人个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BotList) {
            this.BotList = new Array();
            for (let z in params.BotList) {
                let obj = new BotInfo();
                obj.deserialize(params.BotList[z]);
                this.BotList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEntity返回参数结构体
 * @class
 */
class CreateEntityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行请求标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWechatWorkInfo请求参数结构体
 * @class
 */
class GetWechatWorkInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * UpdateIntentBasicInfo请求参数结构体
 * @class
 */
class UpdateIntentBasicInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 意图ID
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 意图中文名
         * @type {string || null}
         */
        this.IntentCnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.IntentCnName = 'IntentCnName' in params ? params.IntentCnName : null;

    }
}

/**
 * AudioProcess请求参数结构体
 * @class
 */
class AudioProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * ASR语音请求标识，每段音频对应一个，16位字符串。
         * @type {string || null}
         */
        this.VoiceId = null;

        /**
         * 音频二进制分片的base64编码，二进制分片大小建议8000~12000字节。（当前版本仅支持识别16k mp3格式音频。）
         * @type {string || null}
         */
        this.AudioData = null;

        /**
         * 当前语音分片的序数，必须从0开始递增，更换VoiceId后从头开始。
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 当前请求的语音分片是否是尾包。
         * @type {boolean || null}
         */
        this.IsEnd = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 透传字段，透传给endpoint服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.VoiceId = 'VoiceId' in params ? params.VoiceId : null;
        this.AudioData = 'AudioData' in params ? params.AudioData : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;

    }
}

/**
 * GetVersionStatus返回参数结构体
 * @class
 */
class GetVersionStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人版本信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BotVersionInfo> || null}
         */
        this.VersionList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VersionList) {
            this.VersionList = new Array();
            for (let z in params.VersionList) {
                let obj = new BotVersionInfo();
                obj.deserialize(params.VersionList[z]);
                this.VersionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PostAudio返回参数结构体
 * @class
 */
class PostAudioResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态。取值:"start"/"continue"/"complete"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 机器人应答文本
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 语义解析的槽位结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 用户说法。该说法是用户原生说法或ASR识别结果，未经过语义优化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Question = null;

        /**
         * tts合成pcm音频存储链接。仅当请求参数NeedTts=true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveUrl = null;

        /**
         * tts合成pcm音频
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.WaveUrl = 'WaveUrl' in params ? params.WaveUrl : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextReset返回参数结构体
 * @class
 */
class TextResetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 机器人对话的应答文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OnLineBot返回参数结构体
 * @class
 */
class OnLineBotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 机器人上线任务执行标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QA的详细信息
 * @class
 */
class QADetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * QA类型ID
         * @type {string || null}
         */
        this.QACategoryId = null;

        /**
         * 标准问题
         * @type {string || null}
         */
        this.StandardQuestion = null;

        /**
         * 用户说法列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QAQueryPattern> || null}
         */
        this.QueryPatternList = null;

        /**
         * 回答列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QAAnswer> || null}
         */
        this.AnswerList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QACategoryId = 'QACategoryId' in params ? params.QACategoryId : null;
        this.StandardQuestion = 'StandardQuestion' in params ? params.StandardQuestion : null;

        if (params.QueryPatternList) {
            this.QueryPatternList = new Array();
            for (let z in params.QueryPatternList) {
                let obj = new QAQueryPattern();
                obj.deserialize(params.QueryPatternList[z]);
                this.QueryPatternList.push(obj);
            }
        }

        if (params.AnswerList) {
            this.AnswerList = new Array();
            for (let z in params.AnswerList) {
                let obj = new QAAnswer();
                obj.deserialize(params.AnswerList[z]);
                this.AnswerList.push(obj);
            }
        }

    }
}

/**
 * SetIntentCallbackInterface请求参数结构体
 * @class
 */
class SetIntentCallbackInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图ID
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 回调地址
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * 回调类型
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetEntityValue返回参数结构体
 * @class
 */
class GetEntityValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EntityValueInfo> || null}
         */
        this.EntityValueList = null;

        /**
         * 总共个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实体名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EntityValueList) {
            this.EntityValueList = new Array();
            for (let z in params.EntityValueList) {
                let obj = new EntityValueInfo();
                obj.deserialize(params.EntityValueList[z]);
                this.EntityValueList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteQA请求参数结构体
 * @class
 */
class DeleteQARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * QA的ID
         * @type {string || null}
         */
        this.QAId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.QAId = 'QAId' in params ? params.QAId : null;

    }
}

/**
 * 更新意图请求中的实体信息
 * @class
 */
class EntityInfoForUpdateIntent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体ID
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 实体名称
         * @type {string || null}
         */
        this.EntityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

    }
}

/**
 * UpdateAppAccessState请求参数结构体
 * @class
 */
class UpdateAppAccessStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 状态信息
         * @type {StateInfo || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

        if (params.State) {
            let obj = new StateInfo();
            obj.deserialize(params.State)
            this.State = obj;
        }

    }
}

/**
 * GetWxIntent返回参数结构体
 * @class
 */
class GetWxIntentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 意图中文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentCnName = null;

        /**
         * 用户请求话术
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.QueryPatterns = null;

        /**
         * 自动回复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Responses = null;

        /**
         * 自动回复是否有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnableResponse = null;

        /**
         * 槽位信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotDetailInfo> || null}
         */
        this.SlotList = null;

        /**
         * 服务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ServiceType = null;

        /**
         * 服务地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceAddress = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.IntentCnName = 'IntentCnName' in params ? params.IntentCnName : null;
        this.QueryPatterns = 'QueryPatterns' in params ? params.QueryPatterns : null;
        this.Responses = 'Responses' in params ? params.Responses : null;
        this.EnableResponse = 'EnableResponse' in params ? params.EnableResponse : null;

        if (params.SlotList) {
            this.SlotList = new Array();
            for (let z in params.SlotList) {
                let obj = new SlotDetailInfo();
                obj.deserialize(params.SlotList[z]);
                this.SlotList.push(obj);
            }
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceAddress = 'ServiceAddress' in params ? params.ServiceAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建类操作后台生成的ID信息
 * @class
 */
class IdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 意图ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 实体ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 槽位ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlotId = null;

        /**
         * 词条ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityValueId = null;

        /**
         * QAID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QAId = null;

        /**
         * QA目录ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QACategoryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.SlotId = 'SlotId' in params ? params.SlotId : null;
        this.EntityValueId = 'EntityValueId' in params ? params.EntityValueId : null;
        this.QAId = 'QAId' in params ? params.QAId : null;
        this.QACategoryId = 'QACategoryId' in params ? params.QACategoryId : null;

    }
}

/**
 * GetEntity请求参数结构体
 * @class
 */
class GetEntityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体ID
         * @type {string || null}
         */
        this.EntityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityId = 'EntityId' in params ? params.EntityId : null;

    }
}

/**
 * GetAccountInfo返回参数结构体
 * @class
 */
class GetAccountInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账号AccountId
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 用户账号AccountKey
         * @type {string || null}
         */
        this.AccountKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.AccountKey = 'AccountKey' in params ? params.AccountKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBotInfo返回参数结构体
 * @class
 */
class GetBotInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BotInfo || null}
         */
        this.BotInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BotInfo) {
            let obj = new BotInfo();
            obj.deserialize(params.BotInfo)
            this.BotInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPatternDuplicateStatus返回参数结构体
 * @class
 */
class GetPatternDuplicateStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetSentenceEntities返回参数结构体
 * @class
 */
class GetSentenceEntitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MatchEntity> || null}
         */
        this.MatchEntityList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MatchEntityList) {
            this.MatchEntityList = new Array();
            for (let z in params.MatchEntityList) {
                let obj = new MatchEntity();
                obj.deserialize(params.MatchEntityList[z]);
                this.MatchEntityList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetIntents返回参数结构体
 * @class
 */
class GetIntentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntentInfo> || null}
         */
        this.IntentList = null;

        /**
         * 总共意图个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IntentList) {
            this.IntentList = new Array();
            for (let z in params.IntentList) {
                let obj = new IntentInfo();
                obj.deserialize(params.IntentList[z]);
                this.IntentList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteQACategory请求参数结构体
 * @class
 */
class DeleteQACategoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * QA类型ID
         * @type {string || null}
         */
        this.QACategoryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.QACategoryId = 'QACategoryId' in params ? params.QACategoryId : null;

    }
}

/**
 * AddBuiltInEntities请求参数结构体
 * @class
 */
class AddBuiltInEntitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 内置词典Id列表
         * @type {Array.<string> || null}
         */
        this.EntityIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityIds = 'EntityIds' in params ? params.EntityIds : null;

    }
}

/**
 * OAAudioProcess请求参数结构体
 * @class
 */
class OAAudioProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * ASR语音请求标识，每段音频对应一个，16位字符串。
         * @type {string || null}
         */
        this.VoiceId = null;

        /**
         * 音频二进制分片的base64编码，二进制分片大小建议8000~12000字节。（当前版本仅支持识别16k mp3格式音频。）
         * @type {string || null}
         */
        this.AudioData = null;

        /**
         * 当前语音分片的序数，必须从0开始递增，更换VoiceId后从头开始。
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 当前请求的语音分片是否是尾包。
         * @type {boolean || null}
         */
        this.IsEnd = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 透传字段，透传给endpoint服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.VoiceId = 'VoiceId' in params ? params.VoiceId : null;
        this.AudioData = 'AudioData' in params ? params.AudioData : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;

    }
}

/**
 * GetEntityValue请求参数结构体
 * @class
 */
class GetEntityValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典Id
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 获取页面下标
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 获取页面容量个数
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DeleteEntities返回参数结构体
 * @class
 */
class DeleteEntitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetIntentChain返回参数结构体
 * @class
 */
class GetIntentChainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图链
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntentChain> || null}
         */
        this.IntentChainList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IntentChainList) {
            this.IntentChainList = new Array();
            for (let z in params.IntentChainList) {
                let obj = new IntentChain();
                obj.deserialize(params.IntentChainList[z]);
                this.IntentChainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ExportBot请求参数结构体
 * @class
 */
class ExportBotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人编辑状态：0-测试版本，1-线上版本
         * @type {number || null}
         */
        this.BotStatus = null;

        /**
         * Bot版本号
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 机器人id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 导出的bot信息内容类型
         * @type {number || null}
         */
        this.ContentType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotStatus = 'BotStatus' in params ? params.BotStatus : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;

    }
}

/**
 * DeleteEntityValue返回参数结构体
 * @class
 */
class DeleteEntityValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWxBotInfo请求参数结构体
 * @class
 */
class GetWxBotInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;

    }
}

/**
 * 状态信息
 * @class
 */
class StateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Category = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.State = null;

        /**
         * 是否接入允许标志位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Category = 'Category' in params ? params.Category : null;
        this.State = 'State' in params ? params.State : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * GetIntentCallbackInterface返回参数结构体
 * @class
 */
class GetIntentCallbackInterfaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 回调地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WechatPostText返回参数结构体
 * @class
 */
class WechatPostTextResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态。取值:"start"/"continue"/"complete"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 机器人回答
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 语义解析的槽位结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 用户说法。该说法是用户原生说法或ASR识别结果，未经过语义优化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Question = null;

        /**
         * tts合成pcm音频存储链接。仅当请求参数NeedTts=true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveUrl = null;

        /**
         * tts合成的pcm音频。二进制数组经过base64编码(暂时不返回)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.WaveUrl = 'WaveUrl' in params ? params.WaveUrl : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 词条信息
 * @class
 */
class EntityValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityValueId = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 同义词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Synonyms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityValueId = 'EntityValueId' in params ? params.EntityValueId : null;
        this.Word = 'Word' in params ? params.Word : null;
        this.Synonyms = 'Synonyms' in params ? params.Synonyms : null;

    }
}

/**
 * VadAudioProcess请求参数结构体
 * @class
 */
class VadAudioProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人id，用于定义抽象机器人
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * ASR语音请求id，一句话对应一个
         * @type {string || null}
         */
        this.VoiceId = null;

        /**
         * 当前语音分片的序数，必须从0开始递增，更换VoiceId后从头开始
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 从seq=0开始到当前语音包的语音总长度
         * @type {number || null}
         */
        this.TotalAudioLength = null;

        /**
         * 客户端播放回复的语音长度，没有播放时带上最后一次的值
         * @type {number || null}
         */
        this.LastTalkingLength = null;

        /**
         * 音频二进制分片的base64编码
         * @type {string || null}
         */
        this.AudioData = null;

        /**
         * 终端id，每个终端对应一个，区分并发多用户
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.VoiceId = 'VoiceId' in params ? params.VoiceId : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.TotalAudioLength = 'TotalAudioLength' in params ? params.TotalAudioLength : null;
        this.LastTalkingLength = 'LastTalkingLength' in params ? params.LastTalkingLength : null;
        this.AudioData = 'AudioData' in params ? params.AudioData : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * 意图信息
 * @class
 */
class IntentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 意图中文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentCnName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.IntentCnName = 'IntentCnName' in params ? params.IntentCnName : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.UpdateDate = 'UpdateDate' in params ? params.UpdateDate : null;

    }
}

/**
 * UpdateWechatWorkUserlist请求参数结构体
 * @class
 */
class UpdateWechatWorkUserlistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 客服列表
         * @type {Array.<string> || null}
         */
        this.Userlist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.Userlist = 'Userlist' in params ? params.Userlist : null;

    }
}

/**
 * GetQAInfo请求参数结构体
 * @class
 */
class GetQAInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * QA的ID
         * @type {string || null}
         */
        this.QAId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.QAId = 'QAId' in params ? params.QAId : null;

    }
}

/**
 * UpdateEntityBasicInfo请求参数结构体
 * @class
 */
class UpdateEntityBasicInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 实体ID
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 实体中文名
         * @type {string || null}
         */
        this.EntityCnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.EntityCnName = 'EntityCnName' in params ? params.EntityCnName : null;

    }
}

/**
 * SearchEntityValue返回参数结构体
 * @class
 */
class SearchEntityValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EntityValueInfo> || null}
         */
        this.EntityValueList = null;

        /**
         * 总共个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EntityValueList) {
            this.EntityValueList = new Array();
            for (let z in params.EntityValueList) {
                let obj = new EntityValueInfo();
                obj.deserialize(params.EntityValueList[z]);
                this.EntityValueList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetEntities请求参数结构体
 * @class
 */
class GetEntitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 查询页面下标
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 查询页面容量个数
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeRelationSlots返回参数结构体
 * @class
 */
class DescribeRelationSlotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 有关联关系的槽位列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotDetailInfo> || null}
         */
        this.SlotList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SlotList) {
            this.SlotList = new Array();
            for (let z in params.SlotList) {
                let obj = new SlotDetailInfo();
                obj.deserialize(params.SlotList[z]);
                this.SlotList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWxAccountInfo请求参数结构体
 * @class
 */
class GetWxAccountInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序调用方Appid
         * @type {string || null}
         */
        this.WechatAppId = null;

        /**
         * 小程序调用方Uin
         * @type {string || null}
         */
        this.WechatUin = null;

        /**
         * 小程序调用方子账号Uin
         * @type {string || null}
         */
        this.WechatSubAccountUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.WechatUin = 'WechatUin' in params ? params.WechatUin : null;
        this.WechatSubAccountUin = 'WechatSubAccountUin' in params ? params.WechatSubAccountUin : null;

    }
}

/**
 * GetBuiltInEntities返回参数结构体
 * @class
 */
class GetBuiltInEntitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EntityDetailInfo> || null}
         */
        this.EntityList = null;

        /**
         * 总共个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EntityList) {
            this.EntityList = new Array();
            for (let z in params.EntityList) {
                let obj = new EntityDetailInfo();
                obj.deserialize(params.EntityList[z]);
                this.EntityList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 槽位信息
 * @class
 */
class SlotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 槽位名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlotName = null;

        /**
         * 槽位值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlotValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SlotName = 'SlotName' in params ? params.SlotName : null;
        this.SlotValue = 'SlotValue' in params ? params.SlotValue : null;

    }
}

/**
 * UpdateEntity请求参数结构体
 * @class
 */
class UpdateEntityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 实体ID
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 实体中文名
         * @type {string || null}
         */
        this.EntityCnName = null;

        /**
         * 词条列表
         * @type {Array.<EntityValueInfoForCreate> || null}
         */
        this.EntityValueList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.EntityCnName = 'EntityCnName' in params ? params.EntityCnName : null;

        if (params.EntityValueList) {
            this.EntityValueList = new Array();
            for (let z in params.EntityValueList) {
                let obj = new EntityValueInfoForCreate();
                obj.deserialize(params.EntityValueList[z]);
                this.EntityValueList.push(obj);
            }
        }

    }
}

/**
 * DescribeParsedQueries请求参数结构体
 * @class
 */
class DescribeParsedQueriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 将文件上传后返回的filekey
         * @type {string || null}
         */
        this.FileKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileKey = 'FileKey' in params ? params.FileKey : null;

    }
}

/**
 * CreateQA请求参数结构体
 * @class
 */
class CreateQARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * QA详细信息
         * @type {QADetailInfo || null}
         */
        this.QAInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

        if (params.QAInfo) {
            let obj = new QADetailInfo();
            obj.deserialize(params.QAInfo)
            this.QAInfo = obj;
        }

    }
}

/**
 * ImportBot返回参数结构体
 * @class
 */
class ImportBotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * Msg
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeParsedQueries返回参数结构体
 * @class
 */
class DescribeParsedQueriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解析成功的qa问题列表，最大500条
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.QueryList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueryList = 'QueryList' in params ? params.QueryList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportBot请求参数结构体
 * @class
 */
class ImportBotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上传文件后返回的key
         * @type {string || null}
         */
        this.FileKey = null;

        /**
         * 需要导入的机器人id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 导入的机器内容类型：0-bot_all/json，1-task_bot/json, 2-qa_bot/json,  3-qa_bot/csv
         * @type {number || null}
         */
        this.ContentType = null;

        /**
         * 与ContentType一一对应，使用转义后的json字符串，详细内容参照对照表
         * @type {string || null}
         */
        this.ExtraMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileKey = 'FileKey' in params ? params.FileKey : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.ExtraMessage = 'ExtraMessage' in params ? params.ExtraMessage : null;

    }
}

/**
 * AppAudioProcess请求参数结构体
 * @class
 */
class AppAudioProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * ASR语音请求标识，每段音频对应一个，16位字符串。
         * @type {string || null}
         */
        this.VoiceId = null;

        /**
         * 音频二进制分片的base64编码，二进制分片大小建议8000~12000字节。（当前版本仅支持识别16k mp3格式音频。）
         * @type {string || null}
         */
        this.AudioData = null;

        /**
         * 当前语音分片的序数，必须从0开始递增，更换VoiceId后从头开始。
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 当前请求的语音分片是否是尾包。
         * @type {boolean || null}
         */
        this.IsEnd = null;

        /**
         * 平台类型，区分小程序和公众号，取值"MiniProgram"或"XiaoWei"或"OfficialAccount"，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount}。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 接口经过API3.0鉴权后，替换原始AppId，仅对内使用。
         * @type {number || null}
         */
        this.PrivateAppId = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 透传字段，透传给endpoint服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.VoiceId = 'VoiceId' in params ? params.VoiceId : null;
        this.AudioData = 'AudioData' in params ? params.AudioData : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.PrivateAppId = 'PrivateAppId' in params ? params.PrivateAppId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;

    }
}

/**
 * UpdateBotName返回参数结构体
 * @class
 */
class UpdateBotNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 异步任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 词典详细信息
 * @class
 */
class EntityDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 词典名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * 词典中文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityCnName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateDate = null;

        /**
         * 例子
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Example = null;

        /**
         * 引用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Quoted = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;
        this.EntityCnName = 'EntityCnName' in params ? params.EntityCnName : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.UpdateDate = 'UpdateDate' in params ? params.UpdateDate : null;
        this.Example = 'Example' in params ? params.Example : null;
        this.Quoted = 'Quoted' in params ? params.Quoted : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 机器人编译版本信息
 * @class
 */
class BotVersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 机器人状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BotStatus = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateDate = null;

        /**
         * 上线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OnlineDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.BotStatus = 'BotStatus' in params ? params.BotStatus : null;
        this.UpdateDate = 'UpdateDate' in params ? params.UpdateDate : null;
        this.OnlineDate = 'OnlineDate' in params ? params.OnlineDate : null;

    }
}

/**
 * GetAppAccessState请求参数结构体
 * @class
 */
class GetAppAccessStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * GetPatternDuplicateStatus请求参数结构体
 * @class
 */
class GetPatternDuplicateStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户请求话术
         * @type {string || null}
         */
        this.QueryPattern = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueryPattern = 'QueryPattern' in params ? params.QueryPattern : null;

    }
}

/**
 * AppTextReset请求参数结构体
 * @class
 */
class AppTextResetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 平台类型，区分小程序和公众号，取值"MiniProgram"或"XiaoWei"或"OfficialAccount"，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount}。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 接口经过API3.0鉴权后，替换原始AppId，仅对内使用。
         * @type {number || null}
         */
        this.PrivateAppId = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.PrivateAppId = 'PrivateAppId' in params ? params.PrivateAppId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;

    }
}

/**
 * 词典信息
 * @class
 */
class EntityInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 词典名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

    }
}

/**
 * UpdateAccountInfo请求参数结构体
 * @class
 */
class UpdateAccountInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账号AccountId
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 用户账号AccountKey
         * @type {string || null}
         */
        this.AccountKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.AccountKey = 'AccountKey' in params ? params.AccountKey : null;

    }
}

/**
 * OffLineBot返回参数结构体
 * @class
 */
class OffLineBotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWxIntents请求参数结构体
 * @class
 */
class GetWxIntentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 获取页面下标
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 获取页面容量个数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;

    }
}

/**
 * 更新实体时添加的词条
 * @class
 */
class EntityValueInfoForCreate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条名称
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 同义词列表
         * @type {Array.<string> || null}
         */
        this.Synonyms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.Synonyms = 'Synonyms' in params ? params.Synonyms : null;

    }
}

/**
 * PostText返回参数结构体
 * @class
 */
class PostTextResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态。取值:"start"/"continue"/"complete"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 机器人回答
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 语义解析的槽位结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 用户说法。该说法是用户原生说法或ASR识别结果，未经过语义优化
         * @type {string || null}
         */
        this.Question = null;

        /**
         * tts合成pcm音频存储链接。仅当请求参数NeedTts=true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveUrl = null;

        /**
         * tts合成的pcm音频。二进制数组经过base64编码(暂时不返回)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.WaveUrl = 'WaveUrl' in params ? params.WaveUrl : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIntent请求参数结构体
 * @class
 */
class CreateIntentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 意图名称
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 意图中文名称
         * @type {string || null}
         */
        this.IntentCnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.IntentCnName = 'IntentCnName' in params ? params.IntentCnName : null;

    }
}

/**
 * GetWxIntent请求参数结构体
 * @class
 */
class GetWxIntentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图标识Id
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;

    }
}

/**
 * UpdateBotChitchatType请求参数结构体
 * @class
 */
class UpdateBotChitchatTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 闲聊设置，0：关闭闲聊；1：开启闲聊
         * @type {number || null}
         */
        this.ChitchatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.ChitchatType = 'ChitchatType' in params ? params.ChitchatType : null;

    }
}

/**
 * UpdateQA请求参数结构体
 * @class
 */
class UpdateQARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * QA的ID
         * @type {string || null}
         */
        this.QAId = null;

        /**
         * QA详细信息
         * @type {QADetailInfo || null}
         */
        this.QAInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.QAId = 'QAId' in params ? params.QAId : null;

        if (params.QAInfo) {
            let obj = new QADetailInfo();
            obj.deserialize(params.QAInfo)
            this.QAInfo = obj;
        }

    }
}

/**
 * GetIntent返回参数结构体
 * @class
 */
class GetIntentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 意图中文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentCnName = null;

        /**
         * 用户请求话术
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.QueryPatterns = null;

        /**
         * 自动回复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Responses = null;

        /**
         * 自动回复是否有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnableResponse = null;

        /**
         * 槽位信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotDetailInfo> || null}
         */
        this.SlotList = null;

        /**
         * 回调类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ServiceType = null;

        /**
         * 回调地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceAddress = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.IntentCnName = 'IntentCnName' in params ? params.IntentCnName : null;
        this.QueryPatterns = 'QueryPatterns' in params ? params.QueryPatterns : null;
        this.Responses = 'Responses' in params ? params.Responses : null;
        this.EnableResponse = 'EnableResponse' in params ? params.EnableResponse : null;

        if (params.SlotList) {
            this.SlotList = new Array();
            for (let z in params.SlotList) {
                let obj = new SlotDetailInfo();
                obj.deserialize(params.SlotList[z]);
                this.SlotList.push(obj);
            }
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceAddress = 'ServiceAddress' in params ? params.ServiceAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryAnswer返回参数结构体
 * @class
 */
class QueryAnswerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActionStatus = null;

        /**
         * 错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorInfo = null;

        /**
         * 会话ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Qid = null;

        /**
         * 答案列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AnswerList> || null}
         */
        this.AnswerList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionStatus = 'ActionStatus' in params ? params.ActionStatus : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorInfo = 'ErrorInfo' in params ? params.ErrorInfo : null;
        this.Qid = 'Qid' in params ? params.Qid : null;

        if (params.AnswerList) {
            this.AnswerList = new Array();
            for (let z in params.AnswerList) {
                let obj = new AnswerList();
                obj.deserialize(params.AnswerList[z]);
                this.AnswerList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 更新意图操作中的槽位信息
 * @class
 */
class SlotForUpdateIntent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 槽位名称
         * @type {string || null}
         */
        this.SlotName = null;

        /**
         * 槽位关联的实体信息
         * @type {EntityInfoForUpdateIntent || null}
         */
        this.EntityInfo = null;

        /**
         * 槽位ID
         * @type {string || null}
         */
        this.SlotId = null;

        /**
         * 追问
         * @type {Array.<string> || null}
         */
        this.SlotPrompts = null;

        /**
         * 是否必填
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 槽位顺序
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SlotName = 'SlotName' in params ? params.SlotName : null;

        if (params.EntityInfo) {
            let obj = new EntityInfoForUpdateIntent();
            obj.deserialize(params.EntityInfo)
            this.EntityInfo = obj;
        }
        this.SlotId = 'SlotId' in params ? params.SlotId : null;
        this.SlotPrompts = 'SlotPrompts' in params ? params.SlotPrompts : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * QA类型信息
 * @class
 */
class QACategoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * QA类型ID
         * @type {string || null}
         */
        this.QACategoryId = null;

        /**
         * QA类型名称
         * @type {string || null}
         */
        this.QACategoryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QACategoryId = 'QACategoryId' in params ? params.QACategoryId : null;
        this.QACategoryName = 'QACategoryName' in params ? params.QACategoryName : null;

    }
}

/**
 * AppAudioProcess返回参数结构体
 * @class
 */
class AppAudioProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人回答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 透传字段，由endpoint服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 机器人信息
 * @class
 */
class BotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 机器人中文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotCnName = null;

        /**
         * 机器人状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateDate = null;

        /**
         * 机器人闲聊类型 0-无，1-默认类型，2-微信闲聊，3-知文闲聊
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChitchatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.BotCnName = 'BotCnName' in params ? params.BotCnName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.UpdateDate = 'UpdateDate' in params ? params.UpdateDate : null;
        this.ChitchatType = 'ChitchatType' in params ? params.ChitchatType : null;

    }
}

/**
 * GetIntents请求参数结构体
 * @class
 */
class GetIntentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 获取页面下标
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 获取页面容量个数
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * UpdateQACategory返回参数结构体
 * @class
 */
class UpdateQACategoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateEntity返回参数结构体
 * @class
 */
class UpdateEntityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetIntentCallbackInterface返回参数结构体
 * @class
 */
class SetIntentCallbackInterfaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveBuiltInEntities返回参数结构体
 * @class
 */
class RemoveBuiltInEntitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAccountInfo返回参数结构体
 * @class
 */
class UpdateAccountInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * Msg
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BuildBot请求参数结构体
 * @class
 */
class BuildBotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需编译的机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * 更新意图请求中的意图信息
 * @class
 */
class IntentInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图名称
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 意图中文名称
         * @type {string || null}
         */
        this.IntentCnName = null;

        /**
         * 用户说法
         * @type {Array.<string> || null}
         */
        this.QueryPatterns = null;

        /**
         * 回答
         * @type {Array.<string> || null}
         */
        this.Responses = null;

        /**
         * 槽位列表
         * @type {Array.<SlotForUpdateIntent> || null}
         */
        this.SlotList = null;

        /**
         * 自动回复是否有效
         * @type {number || null}
         */
        this.EnableResponse = null;

        /**
         * 服务类型
         * @type {number || null}
         */
        this.ServiceType = null;

        /**
         * 服务地址
         * @type {string || null}
         */
        this.ServiceAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.IntentCnName = 'IntentCnName' in params ? params.IntentCnName : null;
        this.QueryPatterns = 'QueryPatterns' in params ? params.QueryPatterns : null;
        this.Responses = 'Responses' in params ? params.Responses : null;

        if (params.SlotList) {
            this.SlotList = new Array();
            for (let z in params.SlotList) {
                let obj = new SlotForUpdateIntent();
                obj.deserialize(params.SlotList[z]);
                this.SlotList.push(obj);
            }
        }
        this.EnableResponse = 'EnableResponse' in params ? params.EnableResponse : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceAddress = 'ServiceAddress' in params ? params.ServiceAddress : null;

    }
}

/**
 * QA的回答
 * @class
 */
class QAAnswer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回答
         * @type {string || null}
         */
        this.Answer = null;

        /**
         * ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Answer = 'Answer' in params ? params.Answer : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * AppTextReset返回参数结构体
 * @class
 */
class AppTextResetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 机器人对话的应答文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateQA返回参数结构体
 * @class
 */
class UpdateQAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 异步任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWxBots请求参数结构体
 * @class
 */
class GetWxBotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页页码
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;

    }
}

/**
 * GetAppAccessState返回参数结构体
 * @class
 */
class GetAppAccessStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StateInfo> || null}
         */
        this.StateList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StateList) {
            this.StateList = new Array();
            for (let z in params.StateList) {
                let obj = new StateInfo();
                obj.deserialize(params.StateList[z]);
                this.StateList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetEntities返回参数结构体
 * @class
 */
class GetEntitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EntityDetailInfo> || null}
         */
        this.EntityList = null;

        /**
         * 总共词典个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EntityList) {
            this.EntityList = new Array();
            for (let z in params.EntityList) {
                let obj = new EntityDetailInfo();
                obj.deserialize(params.EntityList[z]);
                this.EntityList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateWechatWorkUserlist返回参数结构体
 * @class
 */
class UpdateWechatWorkUserlistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Msg
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateQACategory请求参数结构体
 * @class
 */
class UpdateQACategoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * QA类型ID
         * @type {string || null}
         */
        this.QACategoryId = null;

        /**
         * QA类型名称
         * @type {string || null}
         */
        this.QACategoryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.QACategoryId = 'QACategoryId' in params ? params.QACategoryId : null;
        this.QACategoryName = 'QACategoryName' in params ? params.QACategoryName : null;

    }
}

/**
 * QueryTaskStatus返回参数结构体
 * @class
 */
class QueryTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 任务状态 0为运行中 1为执行成功 -1为微信适配层失败 -2为元数据层失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 异步任务状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 创建类操作生成的ID信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IdInfo || null}
         */
        this.IdInfo = null;

        /**
         * 异步任务的额外信息，转义后的json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtraMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

        if (params.IdInfo) {
            let obj = new IdInfo();
            obj.deserialize(params.IdInfo)
            this.IdInfo = obj;
        }
        this.ExtraMessage = 'ExtraMessage' in params ? params.ExtraMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncBot返回参数结构体
 * @class
 */
class SyncBotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 异步任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEntity请求参数结构体
 * @class
 */
class CreateEntityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 词典名称
         * @type {string || null}
         */
        this.EntityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

    }
}

/**
 * GetIntent请求参数结构体
 * @class
 */
class GetIntentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图标识Id
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * GetQAInfo返回参数结构体
 * @class
 */
class GetQAInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * QA的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QAId = null;

        /**
         * QA详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QADetailInfo || null}
         */
        this.QAInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QAId = 'QAId' in params ? params.QAId : null;

        if (params.QAInfo) {
            let obj = new QADetailInfo();
            obj.deserialize(params.QAInfo)
            this.QAInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddBuiltInEntities返回参数结构体
 * @class
 */
class AddBuiltInEntitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetIntentCallbackInterface请求参数结构体
 * @class
 */
class GetIntentCallbackInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图标识Id
         * @type {string || null}
         */
        this.IntentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentId = 'IntentId' in params ? params.IntentId : null;

    }
}

/**
 * CreateIntent返回参数结构体
 * @class
 */
class CreateIntentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWxBotInfo返回参数结构体
 * @class
 */
class GetWxBotInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人信息
         * @type {BotInfo || null}
         */
        this.BotInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BotInfo) {
            let obj = new BotInfo();
            obj.deserialize(params.BotInfo)
            this.BotInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEntityValue请求参数结构体
 * @class
 */
class CreateEntityValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 词典标识Id
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 词典名称
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * 词条值
         * @type {EntityValue || null}
         */
        this.EntityValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

        if (params.EntityValue) {
            let obj = new EntityValue();
            obj.deserialize(params.EntityValue)
            this.EntityValue = obj;
        }

    }
}

/**
 * GetQACategories返回参数结构体
 * @class
 */
class GetQACategoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * QA类型数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QACategoryInfo> || null}
         */
        this.QACategoryList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.QACategoryList) {
            this.QACategoryList = new Array();
            for (let z in params.QACategoryList) {
                let obj = new QACategoryInfo();
                obj.deserialize(params.QACategoryList[z]);
                this.QACategoryList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateBotChitchatType返回参数结构体
 * @class
 */
class UpdateBotChitchatTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextProcess请求参数结构体
 * @class
 */
class TextProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 请求的文本。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 透传字段，透传给用户自定义的WebService服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;

    }
}

/**
 * SearchEntityValue请求参数结构体
 * @class
 */
class SearchEntityValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典Id
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 搜索内容
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 获取页面下标
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 获取页面容量个数
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * RtsAdapter请求参数结构体
 * @class
 */
class RtsAdapterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人id	用于定义抽象机器人
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端id	每个终端对应一个，区分并发多用户
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 透传字段	透传给endpoint服务
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 机器人中控代理id	(当前版本不使用)
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 机器人环境{dev:测试;release:线上}	默认BotEnv=dev
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 机器人版本号	(当前版本不使用)
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 是否返回音频	默认false
         * @type {boolean || null}
         */
        this.NeedTts = null;

        /**
         * 请求的文本
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * ASR语音请求id，一句话对应一个
         * @type {string || null}
         */
        this.VoiceId = null;

        /**
         * 音频二进制分片的base64编码
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 当前语音分片的序数	必须从0开始递增，更换VoiceId后从头开始
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 当前请求的语音分片是否是尾包
         * @type {boolean || null}
         */
        this.IsEnd = null;

        /**
         * 平台类型，区分小程序和公众号	{"MiniProgram":小程序; "XiaoWei":小微, "OfficialAccount":公众号}
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 接口经过API3.0鉴权后，替换原始AppId	仅对内使用
         * @type {number || null}
         */
        this.PrivateAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.NeedTts = 'NeedTts' in params ? params.NeedTts : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.VoiceId = 'VoiceId' in params ? params.VoiceId : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.PrivateAppId = 'PrivateAppId' in params ? params.PrivateAppId : null;

    }
}

/**
 * GetQACount请求参数结构体
 * @class
 */
class GetQACountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * RemoveBuiltInEntities请求参数结构体
 * @class
 */
class RemoveBuiltInEntitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 词典Id列表
         * @type {Array.<string> || null}
         */
        this.EntityIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityIds = 'EntityIds' in params ? params.EntityIds : null;

    }
}

/**
 * 游云南项目回答列表
 * @class
 */
class AnswerList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 问题
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Question = null;

        /**
         * 命中关键词列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchStr = null;

        /**
         * 答案
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Answer = null;

        /**
         * 知识库唯一ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Qaid = null;

        /**
         * FQA: 1, 任务型：2，闲聊：3，投诉FAQ: 4,  投诉：5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TypeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Question = 'Question' in params ? params.Question : null;
        this.MatchStr = 'MatchStr' in params ? params.MatchStr : null;
        this.Answer = 'Answer' in params ? params.Answer : null;
        this.Qaid = 'Qaid' in params ? params.Qaid : null;
        this.TypeId = 'TypeId' in params ? params.TypeId : null;

    }
}

/**
 * UpdateIntentBasicInfo返回参数结构体
 * @class
 */
class UpdateIntentBasicInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 异步任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateBotName请求参数结构体
 * @class
 */
class UpdateBotNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 机器人名称
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 机器人中文名
         * @type {string || null}
         */
        this.BotCnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.BotCnName = 'BotCnName' in params ? params.BotCnName : null;

    }
}

/**
 * OATextReset返回参数结构体
 * @class
 */
class OATextResetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 机器人对话的应答文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OnLineBot请求参数结构体
 * @class
 */
class OnLineBotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需上线机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * DeleteIntents返回参数结构体
 * @class
 */
class DeleteIntentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 槽位详细信息
 * @class
 */
class SlotDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 槽位标识Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlotId = null;

        /**
         * 槽位名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlotName = null;

        /**
         * 追问列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SlotPrompts = null;

        /**
         * 词典信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EntityInfo || null}
         */
        this.EntityInfo = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 优先级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SlotId = 'SlotId' in params ? params.SlotId : null;
        this.SlotName = 'SlotName' in params ? params.SlotName : null;
        this.SlotPrompts = 'SlotPrompts' in params ? params.SlotPrompts : null;

        if (params.EntityInfo) {
            let obj = new EntityInfo();
            obj.deserialize(params.EntityInfo)
            this.EntityInfo = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * RtsAdapter返回参数结构体
 * @class
 */
class RtsAdapterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态	取值:"START"/"COUTINUE"/"COMPLETE"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法	该说法是用户原生说法或ASR识别结果，未经过语义优化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人回答
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * tts合成音频存储链接	仅当请求参数NeedTts=true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveUrl = null;

        /**
         * 透传字段	由endpoint服务返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * tts合成的音频二进制数组经过base64编码	(该本版不使用)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.WaveUrl = 'WaveUrl' in params ? params.WaveUrl : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBotInfo请求参数结构体
 * @class
 */
class GetBotInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * ExportBot返回参数结构体
 * @class
 */
class ExportBotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导出文件key
         * @type {string || null}
         */
        this.FileKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileKey = 'FileKey' in params ? params.FileKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QA的用户说法
 * @class
 */
class QAQueryPattern extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户说法
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * ID
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * GetWxIntents返回参数结构体
 * @class
 */
class GetWxIntentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntentInfo> || null}
         */
        this.IntentList = null;

        /**
         * 总共意图个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IntentList) {
            this.IntentList = new Array();
            for (let z in params.IntentList) {
                let obj = new IntentInfo();
                obj.deserialize(params.IntentList[z]);
                this.IntentList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateAppAccessState返回参数结构体
 * @class
 */
class UpdateAppAccessStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行Id标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 任务执行回复
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWechatWorkInfo返回参数结构体
 * @class
 */
class GetWechatWorkInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回调token，首次生成
         * @type {string || null}
         */
        this.Token = null;

        /**
         *  回调aeskey，首次生成
         * @type {string || null}
         */
        this.EncodingAesKey = null;

        /**
         * 企业应用接收企业微信推送请求的访问协议和地址，首次生成
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 企业微信申请后返回的服务id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 企业微信corpid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CorpId = null;

        /**
         *  接口secret
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CorpSecret = null;

        /**
         * 客服企业微信列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Userlist = null;

        /**
         * key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HashKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Token = 'Token' in params ? params.Token : null;
        this.EncodingAesKey = 'EncodingAesKey' in params ? params.EncodingAesKey : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.CorpSecret = 'CorpSecret' in params ? params.CorpSecret : null;
        this.Userlist = 'Userlist' in params ? params.Userlist : null;
        this.HashKey = 'HashKey' in params ? params.HashKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetWxAccountInfo返回参数结构体
 * @class
 */
class GetWxAccountInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号Id
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 账号Key
         * @type {string || null}
         */
        this.AccountKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.AccountKey = 'AccountKey' in params ? params.AccountKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetQACount返回参数结构体
 * @class
 */
class GetQACountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * QA总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OffLineBot请求参数结构体
 * @class
 */
class OffLineBotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下线机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 下线机器人版本
         * @type {string || null}
         */
        this.BotVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;

    }
}

/**
 * AppTextProcess请求参数结构体
 * @class
 */
class AppTextProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 请求的文本。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 平台类型，区分小程序和公众号，取值"MiniProgram"或"XiaoWei"或"OfficialAccount"，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount}。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 接口经过API3.0鉴权后，替换原始AppId，仅对内使用。
         * @type {number || null}
         */
        this.PrivateAppId = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 透传字段，透传给用户自定义的WebService服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.PrivateAppId = 'PrivateAppId' in params ? params.PrivateAppId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;

    }
}

/**
 * GetSampleQuestions请求参数结构体
 * @class
 */
class GetSampleQuestionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * QA类型ID
         * @type {string || null}
         */
        this.QACategoryId = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页码大小
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.QACategoryId = 'QACategoryId' in params ? params.QACategoryId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * GetEntity返回参数结构体
 * @class
 */
class GetEntityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * 实体中文名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityCnName = null;

        /**
         * 实体值列表
         * @type {Array.<EntityValueInfo> || null}
         */
        this.EntityValueList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EntityName = 'EntityName' in params ? params.EntityName : null;
        this.EntityCnName = 'EntityCnName' in params ? params.EntityCnName : null;

        if (params.EntityValueList) {
            this.EntityValueList = new Array();
            for (let z in params.EntityValueList) {
                let obj = new EntityValueInfo();
                obj.deserialize(params.EntityValueList[z]);
                this.EntityValueList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateQA返回参数结构体
 * @class
 */
class CreateQAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 异步任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 词典值
 * @class
 */
class EntityValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条值
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 同义词
         * @type {Array.<string> || null}
         */
        this.Synonyms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.Synonyms = 'Synonyms' in params ? params.Synonyms : null;

    }
}

/**
 * 用户说法中匹配的实体信息
 * @class
 */
class MatchEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配的词语
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 匹配的实体名称
         * @type {string || null}
         */
        this.EntityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

    }
}

/**
 * TextReset请求参数结构体
 * @class
 */
class TextResetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;

    }
}

/**
 * 意图串联信息
 * @class
 */
class IntentChain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图ID
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 前置意图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SubIntentChain> || null}
         */
        this.PreIntentChain = null;

        /**
         * 后续意图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SubIntentChain> || null}
         */
        this.NextIntentChain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.PreIntentChain) {
            this.PreIntentChain = new Array();
            for (let z in params.PreIntentChain) {
                let obj = new SubIntentChain();
                obj.deserialize(params.PreIntentChain[z]);
                this.PreIntentChain.push(obj);
            }
        }

        if (params.NextIntentChain) {
            this.NextIntentChain = new Array();
            for (let z in params.NextIntentChain) {
                let obj = new SubIntentChain();
                obj.deserialize(params.NextIntentChain[z]);
                this.NextIntentChain.push(obj);
            }
        }

    }
}

/**
 * Reset请求参数结构体
 * @class
 */
class ResetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 子账户id，每个终端对应一个
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 机器人版本号。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 机器人环境{dev:测试;release:线上}。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotEnv = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;

    }
}

/**
 * DeleteEntities请求参数结构体
 * @class
 */
class DeleteEntitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 词典Id列表
         * @type {Array.<string> || null}
         */
        this.EntityIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityIdList = 'EntityIdList' in params ? params.EntityIdList : null;

    }
}

/**
 * SyncBot请求参数结构体
 * @class
 */
class SyncBotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 平台列表
         * @type {Array.<string> || null}
         */
        this.Platforms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.Platforms = 'Platforms' in params ? params.Platforms : null;

    }
}

/**
 * GetSentenceEntities请求参数结构体
 * @class
 */
class GetSentenceEntitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入语句
         * @type {string || null}
         */
        this.Sentence = null;

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sentence = 'Sentence' in params ? params.Sentence : null;
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * UpdateEntityValue返回参数结构体
 * @class
 */
class UpdateEntityValueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 任务返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OATextProcess请求参数结构体
 * @class
 */
class OATextProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识，用于定义抽象机器人。
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 请求的文本。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 透传字段，透传给用户自定义的WebService服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;

    }
}

/**
 * Reset返回参数结构体
 * @class
 */
class ResetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态。取值:"start"/"continue"/"complete"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 机器人回答
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 语义解析的槽位结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 透传字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 用户说法。该说法是用户原生说法或ASR识别结果，未经过语义优化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Question = null;

        /**
         * tts合成pcm音频存储链接。仅当请求参数NeedTts=true时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveUrl = null;

        /**
         * tts合成的pcm音频。二进制数组经过base64编码(暂时不返回)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.WaveUrl = 'WaveUrl' in params ? params.WaveUrl : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBot请求参数结构体
 * @class
 */
class CreateBotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人名称
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 机器人中文名称
         * @type {string || null}
         */
        this.BotCnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.BotCnName = 'BotCnName' in params ? params.BotCnName : null;

    }
}

/**
 * GetIntentChain请求参数结构体
 * @class
 */
class GetIntentChainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 意图ID
         * @type {string || null}
         */
        this.IntentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.IntentId = 'IntentId' in params ? params.IntentId : null;

    }
}

/**
 * BuildBot返回参数结构体
 * @class
 */
class BuildBotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编译机器人任务执行Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 执行任务返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 子意图串联信息
 * @class
 */
class SubIntentChain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图ID
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 意图名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

    }
}

/**
 * OATextProcess返回参数结构体
 * @class
 */
class OATextProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 机器人对话的应答文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WechatPostText请求参数结构体
 * @class
 */
class WechatPostTextRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 请求的文本
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 子账户id。每个终端对应一个，区分并发多用户
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用于后台替换抽象机器人中的AppId
         * @type {number || null}
         */
        this.WechatAppId = null;

        /**
         * 机器人版本号。BotVersion/BotEnv二选一。二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 透传字段，透传给后台
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 是否将机器人回答合成音频并返回url
         * @type {boolean || null}
         */
        this.NeedTts = null;

        /**
         * 音量大小，范围：[0，10]。默认值为0，代表正常音量
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 语速，范围：[-2，2]。0代表1.0倍（默认）
         * @type {number || null}
         */
        this.Speed = null;

        /**
         * 音色,{0：女声,1:男声}。默认为0
         * @type {number || null}
         */
        this.VoiceType = null;

        /**
         * 返回音频采样率{8k,16k}，默认16k
         * @type {string || null}
         */
        this.SampleRate = null;

        /**
         * 机器人环境{dev:测试;release:线上}。BotVersion/BotEnv二选一。二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * TTS合成音频格式。默认值为0
         * @type {number || null}
         */
        this.TtsVoiceFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.NeedTts = 'NeedTts' in params ? params.NeedTts : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.TtsVoiceFormat = 'TtsVoiceFormat' in params ? params.TtsVoiceFormat : null;

    }
}

/**
 * DeleteQACategory返回参数结构体
 * @class
 */
class DeleteQACategoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务执行返回信息
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 任务执行标识Id
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteQA返回参数结构体
 * @class
 */
class DeleteQAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 异步任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateIntent请求参数结构体
 * @class
 */
class UpdateIntentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 意图ID
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 意图信息
         * @type {IntentInfoForUpdate || null}
         */
        this.IntentInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.IntentId = 'IntentId' in params ? params.IntentId : null;

        if (params.IntentInfo) {
            let obj = new IntentInfoForUpdate();
            obj.deserialize(params.IntentInfo)
            this.IntentInfo = obj;
        }

    }
}

/**
 * QueryAnswer请求参数结构体
 * @class
 */
class QueryAnswerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人唯一标识，由用户指定，一经创建不能修改，最长64字节
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 提问者，用户唯一标识
         * @type {string || null}
         */
        this.FromUserName = null;

        /**
         * 问题
         * @type {string || null}
         */
        this.Question = null;

        /**
         * 答案最大回复数
         * @type {number || null}
         */
        this.MaxAnswerNum = null;

        /**
         * 第三方帐号认证信息，用作回调验证第三方帐号合法性
         * @type {string || null}
         */
        this.Auth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.FromUserName = 'FromUserName' in params ? params.FromUserName : null;
        this.Question = 'Question' in params ? params.Question : null;
        this.MaxAnswerNum = 'MaxAnswerNum' in params ? params.MaxAnswerNum : null;
        this.Auth = 'Auth' in params ? params.Auth : null;

    }
}

/**
 * DeleteBots返回参数结构体
 * @class
 */
class DeleteBotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除任务执行Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 任务执行返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateQACategory请求参数结构体
 * @class
 */
class CreateQACategoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人ID
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * QA类型名称
         * @type {string || null}
         */
        this.QACategoryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.QACategoryName = 'QACategoryName' in params ? params.QACategoryName : null;

    }
}

/**
 * WechatPostAudio请求参数结构体
 * @class
 */
class WechatPostAudioRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 语音识别引擎类型,{8k_0、16k_0、16k_en}
         * @type {string || null}
         */
        this.EngineModelType = null;

        /**
         * 输入音频文件编码格式。1：wav(pcm)；4：speex(sp)；6：silk
         * @type {number || null}
         */
        this.AsrVoiceFormat = null;

        /**
         * asr请求Id。长度为16位的字符串，同一句话VoiceId保持一致
         * @type {string || null}
         */
        this.VoiceId = null;

        /**
         * 语音分片序列号。同一句话必须从0开始，依次递增
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 是否为尾包。传递最后一个语音分片时为true，其他为false
         * @type {boolean || null}
         */
        this.IsEnd = null;

        /**
         * 待识别音频字节流
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 子账户id，每个终端对应一个
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用于后台替换抽象机器人中的AppId
         * @type {number || null}
         */
        this.WechatAppId = null;

        /**
         * 机器人版本号。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 识别返回文本编码格式	0：UTF-8（默认）；1：GB2312；2：GBK；3：BIG5
         * @type {number || null}
         */
        this.ResultTextFormat = null;

        /**
         * 透传字段，传递给后台
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 是否将机器人回答合成音频并返回url
         * @type {boolean || null}
         */
        this.NeedTts = null;

        /**
         * 音量大小，范围：[0，10]。默认值为0，代表正常音量
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 语速，范围：[-2，2]。0代表1.0倍
         * @type {number || null}
         */
        this.Speed = null;

        /**
         * 音色,{0：女声,1:男声}
         * @type {number || null}
         */
        this.VoiceType = null;

        /**
         * 返回音频的采样率{8k,16k}。默认16k
         * @type {string || null}
         */
        this.SampleRate = null;

        /**
         * 机器人环境{dev:测试;release:线上}。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * TTS合成音频格式，默认值为0
         * @type {number || null}
         */
        this.TtsVoiceFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EngineModelType = 'EngineModelType' in params ? params.EngineModelType : null;
        this.AsrVoiceFormat = 'AsrVoiceFormat' in params ? params.AsrVoiceFormat : null;
        this.VoiceId = 'VoiceId' in params ? params.VoiceId : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.ResultTextFormat = 'ResultTextFormat' in params ? params.ResultTextFormat : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.NeedTts = 'NeedTts' in params ? params.NeedTts : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.TtsVoiceFormat = 'TtsVoiceFormat' in params ? params.TtsVoiceFormat : null;

    }
}

/**
 * GetVersionStatus请求参数结构体
 * @class
 */
class GetVersionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;

    }
}

/**
 * UpdateIntent返回参数结构体
 * @class
 */
class UpdateIntentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图任务ID
         * @type {string || null}
         */
        this.TaskRequestId = null;

        /**
         * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateEntityValue请求参数结构体
 * @class
 */
class UpdateEntityValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 词典Id
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 词典名称
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * 词条详情
         * @type {EntityValueInfo || null}
         */
        this.EntityValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

        if (params.EntityValue) {
            let obj = new EntityValueInfo();
            obj.deserialize(params.EntityValue)
            this.EntityValue = obj;
        }

    }
}

/**
 * QA基本信息
 * @class
 */
class QABasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * QA的ID
         * @type {string || null}
         */
        this.QAId = null;

        /**
         * 标准问题
         * @type {string || null}
         */
        this.StandardQuestion = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateDate = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QAId = 'QAId' in params ? params.QAId : null;
        this.StandardQuestion = 'StandardQuestion' in params ? params.StandardQuestion : null;
        this.CreateDate = 'CreateDate' in params ? params.CreateDate : null;
        this.UpdateDate = 'UpdateDate' in params ? params.UpdateDate : null;

    }
}

/**
 * DeleteEntityValue请求参数结构体
 * @class
 */
class DeleteEntityValueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识Id
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 词典Id
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 词条Id
         * @type {string || null}
         */
        this.EntityValueId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.EntityValueId = 'EntityValueId' in params ? params.EntityValueId : null;

    }
}

/**
 * AudioProcess返回参数结构体
 * @class
 */
class AudioProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DialogStatus = null;

        /**
         * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BotName = null;

        /**
         * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SlotInfo> || null}
         */
        this.SlotInfoList = null;

        /**
         * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputText = null;

        /**
         * 机器人回答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseText = null;

        /**
         * 透传字段，由endpoint服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DialogStatus = 'DialogStatus' in params ? params.DialogStatus : null;
        this.BotName = 'BotName' in params ? params.BotName : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;

        if (params.SlotInfoList) {
            this.SlotInfoList = new Array();
            for (let z in params.SlotInfoList) {
                let obj = new SlotInfo();
                obj.deserialize(params.SlotInfoList[z]);
                this.SlotInfoList.push(obj);
            }
        }
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.ResponseText = 'ResponseText' in params ? params.ResponseText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateWechatWorkConfig返回参数结构体
 * @class
 */
class UpdateWechatWorkConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Msg
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAccountInfo请求参数结构体
 * @class
 */
class GetAccountInfoRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * PostAudio请求参数结构体
 * @class
 */
class PostAudioRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人标识
         * @type {string || null}
         */
        this.BotId = null;

        /**
         * 语音识别引擎类型,{8k_0、16k_0、16k_en}
         * @type {string || null}
         */
        this.EngineModelType = null;

        /**
         * 输入音频文件编码格式。1：wav(pcm)；4：speex(sp)；6：silk
         * @type {number || null}
         */
        this.AsrVoiceFormat = null;

        /**
         * asr请求Id。长度为16位的字符串，同一句话VoiceId保持一致
         * @type {string || null}
         */
        this.VoiceId = null;

        /**
         * 语音分片序列号。同一句话必须从0开始，依次递增
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 是否为尾包。传递最后一个语音分片时为true，其他为false
         * @type {boolean || null}
         */
        this.IsEnd = null;

        /**
         * 待识别音频字节流
         * @type {string || null}
         */
        this.WaveData = null;

        /**
         * 子账户id，每个终端对应一个
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 机器人版本号。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotVersion = null;

        /**
         * 识别返回文本编码格式	0：UTF-8（默认）；1：GB2312；2：GBK；3：BIG5
         * @type {number || null}
         */
        this.ResultTextFormat = null;

        /**
         * 透传字段，传递给后台
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 是否将机器人回答合成音频并返回url
         * @type {boolean || null}
         */
        this.NeedTts = null;

        /**
         * 音量大小，范围：[0，10]。默认值为0，代表正常音量
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 语速，范围：[-2，2]。0代表1.0倍
         * @type {number || null}
         */
        this.Speed = null;

        /**
         * 音色,{0：女声,1:男声}
         * @type {number || null}
         */
        this.VoiceType = null;

        /**
         * 返回音频的采样率{8k,16k}。默认16k
         * @type {string || null}
         */
        this.SampleRate = null;

        /**
         * 机器人环境{dev:测试;release:线上}。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * TTS合成音频格式，{0：wav}。该字段在当前版本仅支持取值为0。
         * @type {number || null}
         */
        this.TtsVoiceFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.EngineModelType = 'EngineModelType' in params ? params.EngineModelType : null;
        this.AsrVoiceFormat = 'AsrVoiceFormat' in params ? params.AsrVoiceFormat : null;
        this.VoiceId = 'VoiceId' in params ? params.VoiceId : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.WaveData = 'WaveData' in params ? params.WaveData : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.BotVersion = 'BotVersion' in params ? params.BotVersion : null;
        this.ResultTextFormat = 'ResultTextFormat' in params ? params.ResultTextFormat : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.NeedTts = 'NeedTts' in params ? params.NeedTts : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;
        this.VoiceType = 'VoiceType' in params ? params.VoiceType : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.TtsVoiceFormat = 'TtsVoiceFormat' in params ? params.TtsVoiceFormat : null;

    }
}

module.exports = {
    WechatPostAudioResponse: WechatPostAudioResponse,
    OATextResetRequest: OATextResetRequest,
    DeleteIntentsRequest: DeleteIntentsRequest,
    GetBotsRequest: GetBotsRequest,
    GetSampleQuestionsResponse: GetSampleQuestionsResponse,
    CreateQACategoryResponse: CreateQACategoryResponse,
    AppTextProcessResponse: AppTextProcessResponse,
    QueryTaskStatusRequest: QueryTaskStatusRequest,
    DeleteBotsRequest: DeleteBotsRequest,
    CreateBotResponse: CreateBotResponse,
    GetBuiltInEntitiesRequest: GetBuiltInEntitiesRequest,
    DescribeRelationSlotsRequest: DescribeRelationSlotsRequest,
    UpdateEntityBasicInfoResponse: UpdateEntityBasicInfoResponse,
    TextProcessResponse: TextProcessResponse,
    OAAudioProcessResponse: OAAudioProcessResponse,
    UpdateWechatWorkConfigRequest: UpdateWechatWorkConfigRequest,
    CreateEntityValueResponse: CreateEntityValueResponse,
    VadAudioProcessResponse: VadAudioProcessResponse,
    GetQACategoriesRequest: GetQACategoriesRequest,
    GetBotsResponse: GetBotsResponse,
    PostTextRequest: PostTextRequest,
    GetWxBotsResponse: GetWxBotsResponse,
    CreateEntityResponse: CreateEntityResponse,
    GetWechatWorkInfoRequest: GetWechatWorkInfoRequest,
    UpdateIntentBasicInfoRequest: UpdateIntentBasicInfoRequest,
    AudioProcessRequest: AudioProcessRequest,
    GetVersionStatusResponse: GetVersionStatusResponse,
    PostAudioResponse: PostAudioResponse,
    TextResetResponse: TextResetResponse,
    OnLineBotResponse: OnLineBotResponse,
    QADetailInfo: QADetailInfo,
    SetIntentCallbackInterfaceRequest: SetIntentCallbackInterfaceRequest,
    GetEntityValueResponse: GetEntityValueResponse,
    DeleteQARequest: DeleteQARequest,
    EntityInfoForUpdateIntent: EntityInfoForUpdateIntent,
    UpdateAppAccessStateRequest: UpdateAppAccessStateRequest,
    GetWxIntentResponse: GetWxIntentResponse,
    IdInfo: IdInfo,
    GetEntityRequest: GetEntityRequest,
    GetAccountInfoResponse: GetAccountInfoResponse,
    GetBotInfoResponse: GetBotInfoResponse,
    GetPatternDuplicateStatusResponse: GetPatternDuplicateStatusResponse,
    GetSentenceEntitiesResponse: GetSentenceEntitiesResponse,
    GetIntentsResponse: GetIntentsResponse,
    DeleteQACategoryRequest: DeleteQACategoryRequest,
    AddBuiltInEntitiesRequest: AddBuiltInEntitiesRequest,
    OAAudioProcessRequest: OAAudioProcessRequest,
    GetEntityValueRequest: GetEntityValueRequest,
    DeleteEntitiesResponse: DeleteEntitiesResponse,
    GetIntentChainResponse: GetIntentChainResponse,
    ExportBotRequest: ExportBotRequest,
    DeleteEntityValueResponse: DeleteEntityValueResponse,
    GetWxBotInfoRequest: GetWxBotInfoRequest,
    StateInfo: StateInfo,
    GetIntentCallbackInterfaceResponse: GetIntentCallbackInterfaceResponse,
    WechatPostTextResponse: WechatPostTextResponse,
    EntityValueInfo: EntityValueInfo,
    VadAudioProcessRequest: VadAudioProcessRequest,
    IntentInfo: IntentInfo,
    UpdateWechatWorkUserlistRequest: UpdateWechatWorkUserlistRequest,
    GetQAInfoRequest: GetQAInfoRequest,
    UpdateEntityBasicInfoRequest: UpdateEntityBasicInfoRequest,
    SearchEntityValueResponse: SearchEntityValueResponse,
    GetEntitiesRequest: GetEntitiesRequest,
    DescribeRelationSlotsResponse: DescribeRelationSlotsResponse,
    GetWxAccountInfoRequest: GetWxAccountInfoRequest,
    GetBuiltInEntitiesResponse: GetBuiltInEntitiesResponse,
    SlotInfo: SlotInfo,
    UpdateEntityRequest: UpdateEntityRequest,
    DescribeParsedQueriesRequest: DescribeParsedQueriesRequest,
    CreateQARequest: CreateQARequest,
    ImportBotResponse: ImportBotResponse,
    DescribeParsedQueriesResponse: DescribeParsedQueriesResponse,
    ImportBotRequest: ImportBotRequest,
    AppAudioProcessRequest: AppAudioProcessRequest,
    UpdateBotNameResponse: UpdateBotNameResponse,
    EntityDetailInfo: EntityDetailInfo,
    BotVersionInfo: BotVersionInfo,
    GetAppAccessStateRequest: GetAppAccessStateRequest,
    GetPatternDuplicateStatusRequest: GetPatternDuplicateStatusRequest,
    AppTextResetRequest: AppTextResetRequest,
    EntityInfo: EntityInfo,
    UpdateAccountInfoRequest: UpdateAccountInfoRequest,
    OffLineBotResponse: OffLineBotResponse,
    GetWxIntentsRequest: GetWxIntentsRequest,
    EntityValueInfoForCreate: EntityValueInfoForCreate,
    PostTextResponse: PostTextResponse,
    CreateIntentRequest: CreateIntentRequest,
    GetWxIntentRequest: GetWxIntentRequest,
    UpdateBotChitchatTypeRequest: UpdateBotChitchatTypeRequest,
    UpdateQARequest: UpdateQARequest,
    GetIntentResponse: GetIntentResponse,
    QueryAnswerResponse: QueryAnswerResponse,
    SlotForUpdateIntent: SlotForUpdateIntent,
    QACategoryInfo: QACategoryInfo,
    AppAudioProcessResponse: AppAudioProcessResponse,
    BotInfo: BotInfo,
    GetIntentsRequest: GetIntentsRequest,
    UpdateQACategoryResponse: UpdateQACategoryResponse,
    UpdateEntityResponse: UpdateEntityResponse,
    SetIntentCallbackInterfaceResponse: SetIntentCallbackInterfaceResponse,
    RemoveBuiltInEntitiesResponse: RemoveBuiltInEntitiesResponse,
    UpdateAccountInfoResponse: UpdateAccountInfoResponse,
    BuildBotRequest: BuildBotRequest,
    IntentInfoForUpdate: IntentInfoForUpdate,
    QAAnswer: QAAnswer,
    AppTextResetResponse: AppTextResetResponse,
    UpdateQAResponse: UpdateQAResponse,
    GetWxBotsRequest: GetWxBotsRequest,
    GetAppAccessStateResponse: GetAppAccessStateResponse,
    GetEntitiesResponse: GetEntitiesResponse,
    UpdateWechatWorkUserlistResponse: UpdateWechatWorkUserlistResponse,
    UpdateQACategoryRequest: UpdateQACategoryRequest,
    QueryTaskStatusResponse: QueryTaskStatusResponse,
    SyncBotResponse: SyncBotResponse,
    CreateEntityRequest: CreateEntityRequest,
    GetIntentRequest: GetIntentRequest,
    GetQAInfoResponse: GetQAInfoResponse,
    AddBuiltInEntitiesResponse: AddBuiltInEntitiesResponse,
    GetIntentCallbackInterfaceRequest: GetIntentCallbackInterfaceRequest,
    CreateIntentResponse: CreateIntentResponse,
    GetWxBotInfoResponse: GetWxBotInfoResponse,
    CreateEntityValueRequest: CreateEntityValueRequest,
    GetQACategoriesResponse: GetQACategoriesResponse,
    UpdateBotChitchatTypeResponse: UpdateBotChitchatTypeResponse,
    TextProcessRequest: TextProcessRequest,
    SearchEntityValueRequest: SearchEntityValueRequest,
    RtsAdapterRequest: RtsAdapterRequest,
    GetQACountRequest: GetQACountRequest,
    RemoveBuiltInEntitiesRequest: RemoveBuiltInEntitiesRequest,
    AnswerList: AnswerList,
    UpdateIntentBasicInfoResponse: UpdateIntentBasicInfoResponse,
    UpdateBotNameRequest: UpdateBotNameRequest,
    OATextResetResponse: OATextResetResponse,
    OnLineBotRequest: OnLineBotRequest,
    DeleteIntentsResponse: DeleteIntentsResponse,
    SlotDetailInfo: SlotDetailInfo,
    RtsAdapterResponse: RtsAdapterResponse,
    GetBotInfoRequest: GetBotInfoRequest,
    ExportBotResponse: ExportBotResponse,
    QAQueryPattern: QAQueryPattern,
    GetWxIntentsResponse: GetWxIntentsResponse,
    UpdateAppAccessStateResponse: UpdateAppAccessStateResponse,
    GetWechatWorkInfoResponse: GetWechatWorkInfoResponse,
    GetWxAccountInfoResponse: GetWxAccountInfoResponse,
    GetQACountResponse: GetQACountResponse,
    OffLineBotRequest: OffLineBotRequest,
    AppTextProcessRequest: AppTextProcessRequest,
    GetSampleQuestionsRequest: GetSampleQuestionsRequest,
    GetEntityResponse: GetEntityResponse,
    CreateQAResponse: CreateQAResponse,
    EntityValue: EntityValue,
    MatchEntity: MatchEntity,
    TextResetRequest: TextResetRequest,
    IntentChain: IntentChain,
    ResetRequest: ResetRequest,
    DeleteEntitiesRequest: DeleteEntitiesRequest,
    SyncBotRequest: SyncBotRequest,
    GetSentenceEntitiesRequest: GetSentenceEntitiesRequest,
    UpdateEntityValueResponse: UpdateEntityValueResponse,
    OATextProcessRequest: OATextProcessRequest,
    ResetResponse: ResetResponse,
    CreateBotRequest: CreateBotRequest,
    GetIntentChainRequest: GetIntentChainRequest,
    BuildBotResponse: BuildBotResponse,
    SubIntentChain: SubIntentChain,
    OATextProcessResponse: OATextProcessResponse,
    WechatPostTextRequest: WechatPostTextRequest,
    DeleteQACategoryResponse: DeleteQACategoryResponse,
    DeleteQAResponse: DeleteQAResponse,
    UpdateIntentRequest: UpdateIntentRequest,
    QueryAnswerRequest: QueryAnswerRequest,
    DeleteBotsResponse: DeleteBotsResponse,
    CreateQACategoryRequest: CreateQACategoryRequest,
    WechatPostAudioRequest: WechatPostAudioRequest,
    GetVersionStatusRequest: GetVersionStatusRequest,
    UpdateIntentResponse: UpdateIntentResponse,
    UpdateEntityValueRequest: UpdateEntityValueRequest,
    QABasicInfo: QABasicInfo,
    DeleteEntityValueRequest: DeleteEntityValueRequest,
    AudioProcessResponse: AudioProcessResponse,
    UpdateWechatWorkConfigResponse: UpdateWechatWorkConfigResponse,
    GetAccountInfoRequest: GetAccountInfoRequest,
    PostAudioRequest: PostAudioRequest,

}
