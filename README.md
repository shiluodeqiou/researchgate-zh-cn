# ResearchGate 简体中文化

这是一个适用于 Tampermonkey、Violentmonkey 等用户脚本管理器的简体中文翻译脚本，用于：

<https://www.researchgate.net/>

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 或 Violentmonkey。
2. 打开 [`researchgate-zh-cn.user.js`](./researchgate-zh-cn.user.js)。
3. 点击脚本管理器显示的安装按钮。
4. 打开或刷新 ResearchGate 页面。

脚本使用 `MutationObserver` 处理 React 或异步页面更新，并翻译文本节点、按钮、输入框提示、ARIA 标签和 Tooltip。论文标题、作者名、机构名、DOI、外部链接和论文数据保留原样，方便核对原始内容。

## 适配范围

- 登录、注册、访问受限提示和页脚
- 顶部导航、搜索、动态、出版物、问题、项目和职位入口
- 个人主页、研究兴趣、统计数据和出版物信息
- 关注、分享、评论、推荐、引用、下载全文、请求全文等操作
- 筛选、排序、分页、弹窗和动态加载内容

## 说明

数据和账户功能由 ResearchGate 提供，翻译脚本只修改浏览器中的显示文本，不修改网站数据或向第三方发送数据。
