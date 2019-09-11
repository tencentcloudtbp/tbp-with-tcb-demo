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
 * GetFeatureFlags请求参数结构体
 * @class
 */
class GetFeatureFlagsRequest extends  AbstractModel {
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
 * Group是消息组的具体定义，当前包含ContentType、Url、Content三个字段。其中，具体的ContentType字段定义，参考互联网MIME类型标准。
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息类型参考互联网MIME类型标准，当前仅支持"text/plain"。
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * 返回内容以链接形式提供。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 普通文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeServiceOverview返回参数结构体
 * @class
 */
class DescribeServiceOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人概况列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Overview> || null}
         */
        this.OverviewList = null;

        /**
         * 值列表对应的名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnNames = null;

        /**
         * 值列表对应的中文名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnCNNames = null;

        /**
         * 满足条件的结果项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 满足条件的指标总和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalSum = null;

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

        if (params.OverviewList) {
            this.OverviewList = new Array();
            for (let z in params.OverviewList) {
                let obj = new Overview();
                obj.deserialize(params.OverviewList[z]);
                this.OverviewList.push(obj);
            }
        }
        this.ColumnNames = 'ColumnNames' in params ? params.ColumnNames : null;
        this.ColumnCNNames = 'ColumnCNNames' in params ? params.ColumnCNNames : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalSum = 'TotalSum' in params ? params.TotalSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQueryPatternCount请求参数结构体
 * @class
 */
class DescribeQueryPatternCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的排序方式。
         * @type {Array.<Sort> || null}
         */
        this.SortList = null;

        /**
         * 页码，从1开始，默认1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页面大小，默认10。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤器列表，过滤器之间是AND操作。
         * @type {Array.<Filter> || null}
         */
        this.FilterList = null;

        /**
         * 查询粒度 0-按天查询 1-按时查询昨天的数据
         * @type {number || null}
         */
        this.TimeInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SortList) {
            this.SortList = new Array();
            for (let z in params.SortList) {
                let obj = new Sort();
                obj.deserialize(params.SortList[z]);
                this.SortList.push(obj);
            }
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.FilterList) {
            this.FilterList = new Array();
            for (let z in params.FilterList) {
                let obj = new Filter();
                obj.deserialize(params.FilterList[z]);
                this.FilterList.push(obj);
            }
        }
        this.TimeInterval = 'TimeInterval' in params ? params.TimeInterval : null;

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
         * 词典列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EntityInfo || null}
         */
        this.EntityInfo = null;

        /**
         * 槽位是否必填，0否，1是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 槽位顺序
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
 * TextReset返回参数结构体
 * @class
 */
class TextResetResponse extends  AbstractModel {
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
         * 机器人应答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseMessage || null}
         */
        this.ResponseMessage = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 结果类型 {未命中机器人:0; 任务型机器人:1; 问答型机器人:2; 闲聊型机器人:3}。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultType = null;

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

        if (params.ResponseMessage) {
            let obj = new ResponseMessage();
            obj.deserialize(params.ResponseMessage)
            this.ResponseMessage = obj;
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 意图串联信息
 * @class
 */
class IntentChainItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 意图ID
         * @type {string || null}
         */
        this.IntentId = null;

        /**
         * 意图名称
         * @type {string || null}
         */
        this.IntentName = null;

        /**
         * 意图中文名称
注意：此字段可能返回 null，表示取不到有效值。
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
        this.IntentId = 'IntentId' in params ? params.IntentId : null;
        this.IntentName = 'IntentName' in params ? params.IntentName : null;
        this.IntentCnName = 'IntentCnName' in params ? params.IntentCnName : null;

    }
}

/**
 * 从TBP-RTS服务v1.3版本起，机器人以消息组列表的形式响应，消息组列表GroupList包含多组消息，用户根据需要对部分或全部消息组进行组合使用。
 * @class
 */
class ResponseMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息组列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Group> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new Group();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }

    }
}

/**
 * DownLoadQueryPattern返回参数结构体
 * @class
 */
class DownLoadQueryPatternResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件下载路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileUrl = null;

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
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询结果的排序方式。
 * @class
 */
class Sort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段名称，默认cdatetime。
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * 排序方式{ASC:升序; DESC:降序}，默认ASC。
         * @type {string || null}
         */
        this.SortType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.SortType = 'SortType' in params ? params.SortType : null;

    }
}

/**
 * DescribeServiceOverview请求参数结构体
 * @class
 */
class DescribeServiceOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 询结果的排序方式。
         * @type {Array.<Sort> || null}
         */
        this.SortList = null;

        /**
         * 页码，从1开始，默认1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页面大小，默认10。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤器列表，过滤器之间是AND操作。
         * @type {Array.<Filter> || null}
         */
        this.FilterList = null;

        /**
         * 查询粒度 0-按天查询 1-按时查询昨天的数据
         * @type {number || null}
         */
        this.TimeInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SortList) {
            this.SortList = new Array();
            for (let z in params.SortList) {
                let obj = new Sort();
                obj.deserialize(params.SortList[z]);
                this.SortList.push(obj);
            }
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.FilterList) {
            this.FilterList = new Array();
            for (let z in params.FilterList) {
                let obj = new Filter();
                obj.deserialize(params.FilterList[z]);
                this.FilterList.push(obj);
            }
        }
        this.TimeInterval = 'TimeInterval' in params ? params.TimeInterval : null;

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
         * @type {Array.<QueryPattern> || null}
         */
        this.QueryObjects = null;

        /**
         * 自动回复
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

        /**
         * 是否仅仅承接前置意图会话 1-是 0-否
         * @type {number || null}
         */
        this.InnerFlag = null;

        /**
         * 前置意图列表
         * @type {Array.<IntentChainItem> || null}
         */
        this.PreIntentList = null;

        /**
         * 后置意图列表
         * @type {Array.<IntentChainItem> || null}
         */
        this.NextIntentList = null;

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

        if (params.QueryObjects) {
            this.QueryObjects = new Array();
            for (let z in params.QueryObjects) {
                let obj = new QueryPattern();
                obj.deserialize(params.QueryObjects[z]);
                this.QueryObjects.push(obj);
            }
        }
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
        this.InnerFlag = 'InnerFlag' in params ? params.InnerFlag : null;

        if (params.PreIntentList) {
            this.PreIntentList = new Array();
            for (let z in params.PreIntentList) {
                let obj = new IntentChainItem();
                obj.deserialize(params.PreIntentList[z]);
                this.PreIntentList.push(obj);
            }
        }

        if (params.NextIntentList) {
            this.NextIntentList = new Array();
            for (let z in params.NextIntentList) {
                let obj = new IntentChainItem();
                obj.deserialize(params.NextIntentList[z]);
                this.NextIntentList.push(obj);
            }
        }

    }
}

/**
 * DescribeRequestIdCount请求参数结构体
 * @class
 */
class DescribeRequestIdCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的排序方式。
         * @type {Array.<Sort> || null}
         */
        this.SortList = null;

        /**
         * 页码，从1开始，默认1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页面大小，默认10。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤器列表，过滤器之间是AND操作。
         * @type {Array.<Filter> || null}
         */
        this.FilterList = null;

        /**
         * 查询粒度 0-按天查询 1-按时查询昨天的数据
         * @type {number || null}
         */
        this.TimeInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SortList) {
            this.SortList = new Array();
            for (let z in params.SortList) {
                let obj = new Sort();
                obj.deserialize(params.SortList[z]);
                this.SortList.push(obj);
            }
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.FilterList) {
            this.FilterList = new Array();
            for (let z in params.FilterList) {
                let obj = new Filter();
                obj.deserialize(params.FilterList[z]);
                this.FilterList.push(obj);
            }
        }
        this.TimeInterval = 'TimeInterval' in params ? params.TimeInterval : null;

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
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

        /**
         * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
         * @type {string || null}
         */
        this.TerminalId = null;

        /**
         * 平台类型，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount}。
         * @type {string || null}
         */
        this.PlatformType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;

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
         * 槽位ID
         * @type {string || null}
         */
        this.SlotId = null;

        /**
         * 槽位名称
         * @type {string || null}
         */
        this.SlotName = null;

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
         * 槽位关联的实体信息
         * @type {EntityInfoForUpdateIntent || null}
         */
        this.EntityInfo = null;

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
        this.SlotId = 'SlotId' in params ? params.SlotId : null;
        this.SlotName = 'SlotName' in params ? params.SlotName : null;
        this.SlotPrompts = 'SlotPrompts' in params ? params.SlotPrompts : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.EntityInfo) {
            let obj = new EntityInfoForUpdateIntent();
            obj.deserialize(params.EntityInfo)
            this.EntityInfo = obj;
        }
        this.Index = 'Index' in params ? params.Index : null;

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
         * 机器人应答。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseMessage || null}
         */
        this.ResponseMessage = null;

        /**
         * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 结果类型 {0:未命中机器人; 1:任务型机器人; 2:问答型机器人; 3:闲聊型机器人}
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultType = null;

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

        if (params.ResponseMessage) {
            let obj = new ResponseMessage();
            obj.deserialize(params.ResponseMessage)
            this.ResponseMessage = obj;
        }
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIntentCount请求参数结构体
 * @class
 */
class DescribeIntentCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的排序方式。
         * @type {Array.<Sort> || null}
         */
        this.SortList = null;

        /**
         * 页码，从1开始，默认1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页面大小，默认10。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤器列表，过滤器之间是AND操作。
         * @type {Array.<Filter> || null}
         */
        this.FilterList = null;

        /**
         * 查询粒度 0-按天查询 1-按时查询昨天的数据
         * @type {number || null}
         */
        this.TimeInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SortList) {
            this.SortList = new Array();
            for (let z in params.SortList) {
                let obj = new Sort();
                obj.deserialize(params.SortList[z]);
                this.SortList.push(obj);
            }
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.FilterList) {
            this.FilterList = new Array();
            for (let z in params.FilterList) {
                let obj = new Filter();
                obj.deserialize(params.FilterList[z]);
                this.FilterList.push(obj);
            }
        }
        this.TimeInterval = 'TimeInterval' in params ? params.TimeInterval : null;

    }
}

/**
 * 用户说法对象
 * @class
 */
class QueryPattern extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原始用户说法
         * @type {string || null}
         */
        this.SourceQueryText = null;

        /**
         * 标准用户说法
         * @type {string || null}
         */
        this.StandardQueryText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceQueryText = 'SourceQueryText' in params ? params.SourceQueryText : null;
        this.StandardQueryText = 'StandardQueryText' in params ? params.StandardQueryText : null;

    }
}

/**
 * DownLoadQueryPattern请求参数结构体
 * @class
 */
class DownLoadQueryPatternRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的排序方式。
         * @type {Array.<Sort> || null}
         */
        this.SortList = null;

        /**
         * 过滤器列表，过滤器之间是AND操作。
         * @type {Array.<Filter> || null}
         */
        this.FilterList = null;

        /**
         * 查询粒度 0-按天查询 1-按时查询昨天的数据
         * @type {number || null}
         */
        this.TimeInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SortList) {
            this.SortList = new Array();
            for (let z in params.SortList) {
                let obj = new Sort();
                obj.deserialize(params.SortList[z]);
                this.SortList.push(obj);
            }
        }

        if (params.FilterList) {
            this.FilterList = new Array();
            for (let z in params.FilterList) {
                let obj = new Filter();
                obj.deserialize(params.FilterList[z]);
                this.FilterList.push(obj);
            }
        }
        this.TimeInterval = 'TimeInterval' in params ? params.TimeInterval : null;

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
        this.TaskRequestId = 'TaskRequestId' in params ? params.TaskRequestId : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQuestionCount返回参数结构体
 * @class
 */
class DescribeQuestionCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果项的集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Overview> || null}
         */
        this.OverviewList = null;

        /**
         * 值列表对应的名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnNames = null;

        /**
         * 值列表对应的中文名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnCNNames = null;

        /**
         * 满足条件的结果项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 满足条件的指标总和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalSum = null;

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

        if (params.OverviewList) {
            this.OverviewList = new Array();
            for (let z in params.OverviewList) {
                let obj = new Overview();
                obj.deserialize(params.OverviewList[z]);
                this.OverviewList.push(obj);
            }
        }
        this.ColumnNames = 'ColumnNames' in params ? params.ColumnNames : null;
        this.ColumnCNNames = 'ColumnCNNames' in params ? params.ColumnCNNames : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalSum = 'TotalSum' in params ? params.TotalSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTerminalNum返回参数结构体
 * @class
 */
class DescribeTerminalNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果项的集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Overview> || null}
         */
        this.OverviewList = null;

        /**
         * 值列表对应的名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnNames = null;

        /**
         * 值列表对应的中文名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnCNNames = null;

        /**
         * 满足条件的结果项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 满足条件的指标总和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalSum = null;

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

        if (params.OverviewList) {
            this.OverviewList = new Array();
            for (let z in params.OverviewList) {
                let obj = new Overview();
                obj.deserialize(params.OverviewList[z]);
                this.OverviewList.push(obj);
            }
        }
        this.ColumnNames = 'ColumnNames' in params ? params.ColumnNames : null;
        this.ColumnCNNames = 'ColumnCNNames' in params ? params.ColumnCNNames : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalSum = 'TotalSum' in params ? params.TotalSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 特性值
 * @class
 */
class FeatureItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 特性名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 特性状态
         * @type {string || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeRequestIdCount返回参数结构体
 * @class
 */
class DescribeRequestIdCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果项的集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Overview> || null}
         */
        this.OverviewList = null;

        /**
         * 值列表对应的名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnNames = null;

        /**
         * 值列表对应的中文名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnCNNames = null;

        /**
         * 满足条件的结果项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 满足条件的指标总和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalSum = null;

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

        if (params.OverviewList) {
            this.OverviewList = new Array();
            for (let z in params.OverviewList) {
                let obj = new Overview();
                obj.deserialize(params.OverviewList[z]);
                this.OverviewList.push(obj);
            }
        }
        this.ColumnNames = 'ColumnNames' in params ? params.ColumnNames : null;
        this.ColumnCNNames = 'ColumnCNNames' in params ? params.ColumnCNNames : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalSum = 'TotalSum' in params ? params.TotalSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 基本过滤单元组成的过滤器。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前Filter下的基本过滤单元列表，基本过滤单元之间是OR操作。
         * @type {Array.<Unit> || null}
         */
        this.UnitList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UnitList) {
            this.UnitList = new Array();
            for (let z in params.UnitList) {
                let obj = new Unit();
                obj.deserialize(params.UnitList[z]);
                this.UnitList.push(obj);
            }
        }

    }
}

/**
 * DescribeQueryPatternCount返回参数结构体
 * @class
 */
class DescribeQueryPatternCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果项的集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Overview> || null}
         */
        this.OverviewList = null;

        /**
         * 值列表对应的名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnNames = null;

        /**
         * 值列表对应的中文名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnCNNames = null;

        /**
         * 满足条件的结果项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 满足条件的指标总和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalSum = null;

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

        if (params.OverviewList) {
            this.OverviewList = new Array();
            for (let z in params.OverviewList) {
                let obj = new Overview();
                obj.deserialize(params.OverviewList[z]);
                this.OverviewList.push(obj);
            }
        }
        this.ColumnNames = 'ColumnNames' in params ? params.ColumnNames : null;
        this.ColumnCNNames = 'ColumnCNNames' in params ? params.ColumnCNNames : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalSum = 'TotalSum' in params ? params.TotalSum : null;
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
         * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
         * @type {string || null}
         */
        this.BotEnv = null;

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
         * 透传字段，透传给用户自定义的WebService服务。
         * @type {string || null}
         */
        this.SessionAttributes = null;

        /**
         * 平台类型，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount}。
         * @type {string || null}
         */
        this.PlatformType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BotId = 'BotId' in params ? params.BotId : null;
        this.BotEnv = 'BotEnv' in params ? params.BotEnv : null;
        this.TerminalId = 'TerminalId' in params ? params.TerminalId : null;
        this.InputText = 'InputText' in params ? params.InputText : null;
        this.SessionAttributes = 'SessionAttributes' in params ? params.SessionAttributes : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;

    }
}

/**
 * DescribeQuestionCount请求参数结构体
 * @class
 */
class DescribeQuestionCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的排序方式。
         * @type {Array.<Sort> || null}
         */
        this.SortList = null;

        /**
         * 页码，从1开始，默认1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页面大小，默认10。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤器列表，过滤器之间是AND操作。
         * @type {Array.<Filter> || null}
         */
        this.FilterList = null;

        /**
         * 查询粒度 0-按天查询 1-按时查询昨天的数据
         * @type {number || null}
         */
        this.TimeInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SortList) {
            this.SortList = new Array();
            for (let z in params.SortList) {
                let obj = new Sort();
                obj.deserialize(params.SortList[z]);
                this.SortList.push(obj);
            }
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.FilterList) {
            this.FilterList = new Array();
            for (let z in params.FilterList) {
                let obj = new Filter();
                obj.deserialize(params.FilterList[z]);
                this.FilterList.push(obj);
            }
        }
        this.TimeInterval = 'TimeInterval' in params ? params.TimeInterval : null;

    }
}

/**
 * DescribeIntentCount返回参数结构体
 * @class
 */
class DescribeIntentCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人概况列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Overview> || null}
         */
        this.OverviewList = null;

        /**
         * 值列表对应的名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnNames = null;

        /**
         * 值列表对应的中文名称列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnCNNames = null;

        /**
         * 满足条件的结果项总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 满足条件的指标总和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalSum = null;

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

        if (params.OverviewList) {
            this.OverviewList = new Array();
            for (let z in params.OverviewList) {
                let obj = new Overview();
                obj.deserialize(params.OverviewList[z]);
                this.OverviewList.push(obj);
            }
        }
        this.ColumnNames = 'ColumnNames' in params ? params.ColumnNames : null;
        this.ColumnCNNames = 'ColumnCNNames' in params ? params.ColumnCNNames : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TotalSum = 'TotalSum' in params ? params.TotalSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTerminalNum请求参数结构体
 * @class
 */
class DescribeTerminalNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的排序方式。
         * @type {Array.<Sort> || null}
         */
        this.SortList = null;

        /**
         * 页码，从1开始，默认1。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页面大小，默认10。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤器列表，过滤器之间是AND操作。
         * @type {Array.<Filter> || null}
         */
        this.FilterList = null;

        /**
         * 查询粒度 0-按天查询 1-按时查询昨天的数据
         * @type {number || null}
         */
        this.TimeInterval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SortList) {
            this.SortList = new Array();
            for (let z in params.SortList) {
                let obj = new Sort();
                obj.deserialize(params.SortList[z]);
                this.SortList.push(obj);
            }
        }
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.FilterList) {
            this.FilterList = new Array();
            for (let z in params.FilterList) {
                let obj = new Filter();
                obj.deserialize(params.FilterList[z]);
                this.FilterList.push(obj);
            }
        }
        this.TimeInterval = 'TimeInterval' in params ? params.TimeInterval : null;

    }
}

/**
 * 机器人概况
 * @class
 */
class Overview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值列表
         * @type {Array.<string> || null}
         */
        this.ColumnValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ColumnValues = 'ColumnValues' in params ? params.ColumnValues : null;

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
 * 包含字段、条件、取值的基本过滤单元。
 * @class
 */
class Unit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待过滤字段名称。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 比较运算符：<、<=、=、<>、>、>=。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 待过滤字段的过滤值。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * GetFeatureFlags返回参数结构体
 * @class
 */
class GetFeatureFlagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 特性列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FeatureItem> || null}
         */
        this.FeatureList = null;

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

        if (params.FeatureList) {
            this.FeatureList = new Array();
            for (let z in params.FeatureList) {
                let obj = new FeatureItem();
                obj.deserialize(params.FeatureList[z]);
                this.FeatureList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * v1.3Query参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QueryPattern> || null}
         */
        this.QueryObjects = null;

        /**
         * 是否仅仅承接前置意图会话 1-是 0-否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InnerFlag = null;

        /**
         * 前序意图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntentChainItem> || null}
         */
        this.PreIntentList = null;

        /**
         * 后续意图
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntentChainItem> || null}
         */
        this.NextIntentList = null;

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

        if (params.QueryObjects) {
            this.QueryObjects = new Array();
            for (let z in params.QueryObjects) {
                let obj = new QueryPattern();
                obj.deserialize(params.QueryObjects[z]);
                this.QueryObjects.push(obj);
            }
        }
        this.InnerFlag = 'InnerFlag' in params ? params.InnerFlag : null;

        if (params.PreIntentList) {
            this.PreIntentList = new Array();
            for (let z in params.PreIntentList) {
                let obj = new IntentChainItem();
                obj.deserialize(params.PreIntentList[z]);
                this.PreIntentList.push(obj);
            }
        }

        if (params.NextIntentList) {
            this.NextIntentList = new Array();
            for (let z in params.NextIntentList) {
                let obj = new IntentChainItem();
                obj.deserialize(params.NextIntentList[z]);
                this.NextIntentList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetFeatureFlagsRequest: GetFeatureFlagsRequest,
    Group: Group,
    DescribeServiceOverviewResponse: DescribeServiceOverviewResponse,
    DescribeQueryPatternCountRequest: DescribeQueryPatternCountRequest,
    SlotDetailInfo: SlotDetailInfo,
    TextResetResponse: TextResetResponse,
    IntentChainItem: IntentChainItem,
    ResponseMessage: ResponseMessage,
    DownLoadQueryPatternResponse: DownLoadQueryPatternResponse,
    Sort: Sort,
    DescribeServiceOverviewRequest: DescribeServiceOverviewRequest,
    IntentInfoForUpdate: IntentInfoForUpdate,
    DescribeRequestIdCountRequest: DescribeRequestIdCountRequest,
    TextResetRequest: TextResetRequest,
    SlotForUpdateIntent: SlotForUpdateIntent,
    TextProcessResponse: TextProcessResponse,
    DescribeIntentCountRequest: DescribeIntentCountRequest,
    QueryPattern: QueryPattern,
    DownLoadQueryPatternRequest: DownLoadQueryPatternRequest,
    UpdateIntentResponse: UpdateIntentResponse,
    DescribeQuestionCountResponse: DescribeQuestionCountResponse,
    DescribeTerminalNumResponse: DescribeTerminalNumResponse,
    FeatureItem: FeatureItem,
    DescribeRequestIdCountResponse: DescribeRequestIdCountResponse,
    GetIntentRequest: GetIntentRequest,
    EntityInfo: EntityInfo,
    Filter: Filter,
    DescribeQueryPatternCountResponse: DescribeQueryPatternCountResponse,
    UpdateIntentRequest: UpdateIntentRequest,
    TextProcessRequest: TextProcessRequest,
    DescribeQuestionCountRequest: DescribeQuestionCountRequest,
    DescribeIntentCountResponse: DescribeIntentCountResponse,
    DescribeTerminalNumRequest: DescribeTerminalNumRequest,
    Overview: Overview,
    EntityInfoForUpdateIntent: EntityInfoForUpdateIntent,
    SlotInfo: SlotInfo,
    Unit: Unit,
    GetFeatureFlagsResponse: GetFeatureFlagsResponse,
    GetIntentResponse: GetIntentResponse,

}
