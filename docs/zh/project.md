---
headerDepth: 0
category: [公告, 项目, 功能]
redirectFrom: /project.html
comment: false
icon: iconfont icon-workingDirectory
order: 6
---

# 项目说明

胡桃工具箱是一款以 MIT 协议开源的原神工具箱，专为现代化 Windows 平台设计，旨在改善桌面端玩家的游戏体验。通过将既有的官方资源与开发团队设计的全新
功能相结合，它提供了一套完整且实用的工具集，且无需依赖任何移动设备。它不对游戏客户端进行任何破坏性修改以确保工具箱的安全性。

## 胡桃能解决的原神桌面端缺陷

|         功能         | 移动端                   | 桌面端                   | 胡桃的方案                                                 |
| :------------------: | ------------------------ | ------------------------ | ---------------------------------------------------------- |
|    **游戏高帧率**    | iOS/iPadOS官方支持120FPS | 最高仅60FPS              | [高级启动器 - 帧率解锁](features/game-launcher.md)         |
|   **游戏账号切换**   | 已登录的账号会被记录     | 注销后账号不会被记录     | [高级启动器 - 账号切换](features/game-launcher.md)         |
|     **每日签到**     | 米游社客户端             | 仅国际服用户可在网页签到 | [账号面板 - 签到](features/mhy-account-switch.md)          |
|     **实时便笺**     | 米游社客户端             | 无                       | [实时便笺](features/real-time-notes.md)                    |
| **派遣完成通知推送** | 通过移动端游戏推送通知   | 无                       | [实时便笺推送消息](features/real-time-notes.md)            |
|   **深渊数据查询**   | 米游社客户端             | 仅国际服用户可在网页查询 | [深境螺旋](features/hutao-API.md)                          |
|     **养成计划**     | 米游社客户端             | 仅国际服用户可在网页使用 | [养成计划](features/develop-plan.md)                       |
|   **Discord 状态**   | 无                       | 国际服客户端可用         | [高级启动器 - Discord Activity](features/game-launcher.md) |

## 项目资源

- [GitHub 代码库](https://github.com/DGP-Studio/Snap.Hutao)
- [Crowdin 本地化翻译](https://translate.hut.ao/)
- [Snap Hutao 用户社区](community.md)

## 完整功能一览

- [游戏内公告及倒计时](features/dashboard.md)
- [米哈游论坛多账号登录支持](features/mhy-account-switch.md)
  - 支持以网页登录和输入 Cookie 的方式登录米游社和 HoYoLAB
  - 支持签到奖励
- [高级启动器](features/game-launcher.md)
  - 服务器切换
  - 游戏账号切换
  - 自定义帧率上限
  - 游戏补丁包下载
- [祈愿记录管理](features/wish-export.md)
  - 从游戏数据中刷新数据
  - 导入/导出 UIGF 数据文件
  - 全局祈愿数据统计
- [成就管理](features/achievements.md)
  - 从游戏数据中刷新数据
  - 导入/导出 UIAF 数据文件
- [实时便笺](features/real-time-notes.md)
  - 支持多账号实时便笺
  - 自定义刷新间隔
  - Windows 原生通知推送
- [我的角色](features/character-data.md)
  - 支持多数据源同步数据
  - 圣遗物评分和双爆评分
  - 导出我的角色数据截图
- [深境螺旋](features/hutao-API.md)
  - 每期怪物和渊月祝福详情
  - 同步深境螺旋分详情战斗数据
  - 胡桃深渊数据库
    - 角色使用率
    - 角色出场率
    - 队伍出场统计
    - 角色持有率
- [养成计划](features/develop-plan.md)
  - 支持从实时数据和 WIKI 数据创建角色和武器养成计划
  - 支持多计划存档
- WIKI 数据
  - [角色资料](features/character-wiki.md)
  - [武器资料](features/weapon-wiki.md)
  - [怪物资料](features/monster-wiki.md)
- [胡桃云账号系统](features/hutao-settings#胡桃帐号)
  - 祈愿数据备份
  - 祈愿统计预测
