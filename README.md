# ContiNew Admin UI

## 简介

全新 3.0 版本，基于 Gi Demo 前端模板开发的 ContiNew Admin 前端适配项目。

ContiNew Admin（Continue New Admin）持续迭代优化的前后端分离中后台管理系统框架。开箱即用，重视每一处代码规范，重视每一种解决方案细节，持续提供舒适的前、后端开发体验。

当前采用的技术栈：Spring Boot3（Java17）、Vue3 & Arco Design & TS & Vite、Sa-Token、MyBatis Plus、Redisson、JetCache、JustAuth、Crane4j、EasyExcel、Liquibase、Hutool 等。

## 后端地址

后端地址已修改为：http://139.196.92.110:31111/

## 项目源码

|         | 前端                                                         | 后端                                                         |
| :------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Gitee   | [continew/continew-admin-ui](https://gitee.com/continew/continew-admin-ui) | [continew/continew-admin](https://gitee.com/continew/continew-admin) |
| GitCode | [continew/continew-admin-ui](https://gitcode.com/continew/continew-admin-ui) | [continew/continew-admin](https://gitcode.com/continew/continew-admin) |
| GitHub  | [continew-org/continew-admin-ui](https://github.com/continew-org/continew-admin-ui) | [continew-org/continew-admin](https://github.com/continew-org/continew-admin) |

## 系统功能

- 仪表盘：提供工作台、分析页，工作台提供功能快捷导航入口、最新公告、动态；分析页提供全面数据可视化能力
- 个人中心：支持基础信息修改、密码修改、邮箱绑定、手机号绑定（并提供行为验证码、短信限流等安全处理）、第三方账号绑定/解绑、头像裁剪上传
- 消息中心：提供站内信消息统一查看、标记已读、全部已读、删除等功能（目前仅支持系统通知消息）
- 用户管理：管理系统用户，包含新增、修改、删除、导入、导出、重置密码、分配角色等功能
- 角色管理：管理系统用户的功能权限及数据权限，包含新增、修改、删除、分配角色等功能
- 菜单管理：管理系统菜单及按钮权限，支持多级菜单，动态路由，包含新增、修改、删除等功能
- 部门管理：管理系统组织架构，包含新增、修改、删除、导出等功能，以树形列表进行展示
- 字典管理：管理系统公用数据字典，例如：消息类型。支持字典标签背景色和排序等配置
- 通知公告：管理系统公告，支持设置公告的生效时间、终止时间、通知范围（所有人、指定用户）
- 文件管理：管理系统文件，支持上传、下载、预览（目前支持图片、音视频、PDF、Word、Excel、PPT）、重命名、切换视图（列表、网格）等功能
- 存储管理：管理文件存储配置，支持本地存储、兼容 S3 协议存储
- 系统配置：
  - 基础配置：提供修改系统标题、Logo、favicon、版权信息等基础配置功能，以方便用户系统与其自身品牌形象保持一致
  - 邮件配置：提供系统发件箱配置，也支持通过配置文件指定
  - 安全配置：提供密码策略修改，支持丰富的密码策略设定，包括但不限于 `密码有效期`、`密码重复次数`、`密码错误锁定账号次数、时间` 等
- 在线用户：管理当前登录用户，可一键踢除下线
- 日志管理：管理系统登录日志、操作日志，支持查看日志详情，包含请求头、响应头等报文信息
- 任务管理：管理系统定时任务，包含新增、修改、删除、执行功能，支持 Cron（可配置式生成 Cron 表达式） 和固定频率
- 任务日志：管理定时任务执行日志，包含停止、重试指定批次，查询集群各节点的详细输出日志等功能
- 应用管理：管理第三方系统应用 AK、SK，包含新增、修改、删除、查看密钥、重置密钥等功能，支持设置密钥有效期
- 代码生成：提供根据数据库表自动生成相应的前后端 CRUD 代码的功能，支持同步最新表结构及代码生成预览 