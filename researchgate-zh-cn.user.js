// ==UserScript==
// @name         ResearchGate 简体中文化
// @namespace    https://github.com/shiluodeqiou/researchgate-zh-cn
// @version      1.0.0
// @description  将 ResearchGate 的登录页、导航、论文操作、个人主页和常用控件翻译为简体中文。
// @author       shiluodeqiou
// @match        https://www.researchgate.net/*
// @match        https://researchgate.net/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const exact = new Map(Object.entries({
    'ResearchGate | Find and share research': 'ResearchGate｜发现并分享研究',
    'Home Feed | ResearchGate': 'ResearchGate｜首页动态',
    'Settings | ResearchGate': 'ResearchGate｜设置',
    'ResearchGate - Temporarily Unavailable': 'ResearchGate - 暂时不可用',
    'Login to ResearchGate': '登录 ResearchGate',
    'Your identity and impact in science.': '你在科学界的身份与影响力。',
    'Access restricted': '访问受限',
    "We've detected unusual activity from your network. Access to this page is temporarily restricted.": '我们检测到你的网络存在异常活动。此页面暂时受到限制。',
    'Are you a researcher?': '你是研究人员吗？',
    'Log in or sign up as a ResearchGate member to verify your access.': '请登录或注册 ResearchGate 账户以验证访问权限。',
    'Log in': '登录',
    'Email': '电子邮箱',
    'Email Hint': '邮箱提示',
    'Password': '密码',
    'Forgot password?': '忘记密码？',
    'Keep me logged in': '保持登录状态',
    'Continue with Google': '使用 Google 继续',
    'or': '或',
    'No account?': '没有账户？',
    'No account? Sign up': '没有账户？注册',
    'Sign up': '注册',
    'Create account': '创建账户',
    "Don't have an account?": '还没有账户？',
    "Don't have an account? Sign up": '还没有账户？注册',
    'Company': '公司',
    'About us': '关于我们',
    'News': '新闻',
    'Careers': '招聘',
    'Support': '支持',
    'Help Center': '帮助中心',
    'Business solutions': '商业解决方案',
    'Advertising': '广告',
    'Recruiting': '招聘',
    'Terms': '条款',
    'Privacy': '隐私',
    'Copyright': '版权',
    'Imprint': '法律声明',
    'Consent preferences': '同意偏好',
    'All rights reserved.': '保留所有权利。',
    'Home': '首页',
    'Feed': '动态',
    'Publications': '出版物',
    'Questions': '问题',
    'Topics': '主题',
    'Jobs': '职位',
    'Messaging': '消息',
    'Notifications': '通知',
    'Search': '搜索',
    'Discover': '发现',
    'Profile': '个人主页',
    'My profile': '我的主页',
    'Add new': '新增',
    'Suggested research based on': '根据以下内容推荐的研究',
    'your interests': '你的研究兴趣',
    'Article': '文章',
    'Preprint': '预印本',
    'Save': '保存',
    'Add publication': '添加出版物',
    'Add project': '添加项目',
    'Add question': '提出问题',
    'Edit profile': '编辑个人主页',
    'Follow': '关注',
    'Following': '已关注',
    'Unfollow': '取消关注',
    'Share': '分享',
    'Comment': '评论',
    'Recommend': '推荐',
    'Recommended': '已推荐',
    'Cite': '引用',
    'Citations': '引用次数',
    'Reads': '阅读次数',
    'Recommendations': '推荐次数',
    'Mentions': '提及次数',
    'Views': '浏览次数',
    'Download': '下载',
    'Download full-text': '下载全文',
    'Request full-text': '请求全文',
    'Request file': '请求文件',
    'Read full-text': '阅读全文',
    'Read more': '阅读更多',
    'View more': '查看更多',
    'Show more': '显示更多',
    'See more': '查看更多',
    'Show less': '收起',
    'Collapse': '收起',
    'Expand': '展开',
    'Sort by': '排序方式',
    'Filter': '筛选',
    'Filters': '筛选条件',
    'Clear filters': '清除筛选条件',
    'Apply': '应用',
    'Cancel': '取消',
    'Close': '关闭',
    'Save': '保存',
    'Submit': '提交',
    'Next': '下一步',
    'Back': '返回',
    'Continue': '继续',
    'Done': '完成',
    'Loading': '加载中',
    'No results found': '未找到结果',
    'No results': '没有结果',
    'Search results': '搜索结果',
    'Search ResearchGate': '搜索 ResearchGate',
    'Search publications, researchers, and more': '搜索出版物、研究人员等内容',
    'Search and explore research': '搜索并探索研究',
    'Our database has': '我们的数据库包含',
    'publication pages,': '个出版物页面，',
    'journal pages, and': '个期刊页面，以及',
    'members.': '名成员。',
    'Research': '研究',
    'Journals': '期刊',
    'People': '人员',
    'Institutions': '机构',
    'Search results in Research': '研究搜索结果',
    'Sort by relevance': '按相关性排序',
    'All types': '所有类型',
    'Any time': '任何时间',
    'Only full-texts': '仅全文',
    'Publications': '出版物',
    'Projects': '项目',
    'Researchers': '研究人员',
    'Institutions': '机构',
    'Organizations': '组织',
    'Disciplines': '学科',
    'Research interests': '研究兴趣',
    'Keywords': '关键词',
    'Questions & answers': '问题与回答',
    'Ask a question': '提出问题',
    'Answer': '回答',
    'Answers': '回答',
    'Stats': '统计数据',
    'Impact': '影响力',
    'RG Score': 'RG 分数',
    'About': '关于',
    'Overview': '概览',
    'Activity': '活动',
    'Experience': '经历',
    'Education': '教育经历',
    'Skills and expertise': '技能与专长',
    'Affiliations': '所属机构',
    'Publications and citations': '出版物与引用',
    'Projects and funding': '项目与资助',
    'Co-authors': '合作者',
    'Related researchers': '相关研究人员',
    'Related publications': '相关出版物',
    'Research interests': '研究兴趣',
    'Full-text available': '可获取全文',
    'Open access': '开放获取',
    'Published': '已发表',
    'Publication date': '发表日期',
    'Journal': '期刊',
    'Conference Paper': '会议论文',
    'Book': '书籍',
    'Chapter': '章节',
    'Preprint': '预印本',
    'Thesis': '学位论文',
    'Dataset': '数据集',
    'Article': '文章',
    'Research paper': '研究论文',
    'Authors': '作者',
    'Author': '作者',
    'Affiliation': '所属机构',
    'DOI': 'DOI',
    'Abstract': '摘要',
    'Keywords': '关键词',
    'Figures': '图',
    'References': '参考文献',
    'Related content': '相关内容',
    'Similar publications': '相似出版物',
    'Upload full-text': '上传全文',
    'Upload': '上传',
    'Share your research': '分享你的研究',
    'Invite co-authors': '邀请合作者',
    'Add a publication': '添加出版物',
    'Add a project': '添加项目',
    'Ask a question': '提出问题',
    'Post update': '发布动态',
    'Write a comment': '发表评论',
    'Write a reply': '撰写回复',
    'Report': '举报',
    'Delete': '删除',
    'Block': '屏蔽',
    'Unblock': '取消屏蔽',
    'More': '更多',
    'More options': '更多选项',
    'Settings': '设置',
    'Account settings': '账户设置',
    'Privacy settings': '隐私设置',
    'Log out': '退出登录',
    'Help': '帮助',
    'Contact us': '联系我们',
    'Resources': '资源',
    'Blog': '博客',
    'Business Solutions': '商业解决方案',
    'Marketing Solutions': '营销解决方案',
    'Scientific Recruitment': '科研招聘',
    'Publisher Solutions': '出版商解决方案',
    'Preferences': '偏好设置',
    'Jobs for you': '为你推荐的职位',
    'View more': '查看更多',
    'New job': '新职位',
    'Get your job displayed here': '在此展示你的职位',
    'Who to follow': '推荐关注',
    'Department colleague': '院系同事',
    'View all related researchers': '查看所有相关研究人员',
    'Do you have a research question?': '你有研究问题吗？',
    'Ask a question in Q&A to get help from experts in your field.': '在问答区提出问题，向所在领域的专家寻求帮助。',
    'Not now': '暂时不要',
    'follow or recommend this research': '关注或推荐这项研究',
    'follows this research': '正在关注这项研究',
    'follow this research': '关注这项研究',
    'recommends this research': '推荐这项研究',
    'Email address': '电子邮箱地址',
    'Which of your email addresses would you like to set as your primary email? Your primary email address is where you will receive email notifications. You can still log in with any of your verified email addresses.': '你想将哪个电子邮箱地址设为主要邮箱？主要邮箱用于接收邮件通知。你仍然可以使用任何已验证的邮箱登录。',
    'Primary email': '主要邮箱',
    'Additional': '其他邮箱',
    'Set as primary': '设为主要邮箱',
    'Add additional email': '添加其他邮箱',
    "We suggest you use a password you don't use anywhere else to help keep your account secure.": '建议使用未在其他地方使用过的密码，以保障账户安全。',
    'Change password': '修改密码',
    'Time zone': '时区',
    'Select your current time zone. Dates and times will be displayed according to your location.': '选择你当前所在的时区。日期和时间将根据你的位置显示。',
    'Delete your account': '删除账户',
    'Are you sure you want to delete your account?': '确定要删除账户吗？',
    'If you want to change your email address, simply do so right here from your': '如果你想更改邮箱地址，可以直接在这里通过',
    'Profile settings': '个人主页设置',
    'Privacy settings': '隐私设置',
    'Email settings': '邮件设置',
    'at any time.': '随时进行更改。',
    'Please note': '请注意',
    ": If you delete your account, you won't be able to reactivate it later.": '：删除账户后将无法重新激活。',
    'Delete account': '删除账户',
    'Settings': '设置',
    'Account': '账户',
    'Security': '安全',
    'Emails': '邮件',
    'Ads': '广告',
    'Connect with services': '连接服务',
    'Sent invitations': '已发送的邀请',
    'Need help?': '需要帮助吗？',
    'Check out our': '查看我们的',
    'Help Center.': '帮助中心。',
    'ResearchGate search': 'ResearchGate 搜索',
    'Main': '主导航',
    'Submit search': '提交搜索',
    'Updates': '动态更新',
    'Messages': '消息',
    'Requests': '请求',
    'Profile': '个人主页',
    'Clear search query': '清除搜索内容',
    'Go to the previous page': '前往上一页',
    'Go to the next page': '前往下一页',
    'Download iOS App': '下载 iOS 应用',
    'Download RG android app': '下载 ResearchGate 安卓应用',
    'Get it on Google Play': '从 Google Play 获取',
  }));

  // 处理带有数量、名称或上下文的动态文案；不对论文标题、作者名和机构名做宽泛替换。
  const fragments = new Map([
    ['Log in or sign up', '登录或注册'],
    ['temporarily restricted', '暂时受到限制'],
    ['from your network', '你的网络'],
    ['as a ResearchGate member', 'ResearchGate 账户'],
    ['Continue with', '使用'],
    ['No account?', '没有账户？'],
    ['Don\'t have an account?', '还没有账户？'],
    ['Search publications', '搜索出版物'],
    ['Search researchers', '搜索研究人员'],
    ['Search results for', '搜索结果：'],
    ['results found', '个结果'],
    ['results', '结果'],
    ['Reads', '次阅读'],
    ['Read', '次阅读'],
    ['Citations', '次引用'],
    ['Citation', '次引用'],
    ['researchers', '位研究人员'],
    ['researcher', '位研究人员'],
    ['ResearchGate search', 'ResearchGate 搜索'],
    ['Search for research, journals, people, etc.', '搜索研究、期刊、人员等内容'],
    ['Load more suggestions', '加载更多推荐'],
    ['open menu', '打开菜单'],
    ['Research pagination', '研究结果分页'],
    ['Page ', '第 '],
    [' of ', ' 页，共 '],
    ['Go to the previous page', '前往上一页'],
    ['Go to the next page', '前往下一页'],
    ['January', '一月'],
    ['February', '二月'],
    ['March', '三月'],
    ['April', '四月'],
    ['May', '五月'],
    ['June', '六月'],
    ['July', '七月'],
    ['August', '八月'],
    ['September', '九月'],
    ['October', '十月'],
    ['November', '十一月'],
    ['December', '十二月'],
    ['publications', '出版物'],
    ['researchers', '研究人员'],
    ['questions', '问题'],
    ['followers', '位粉丝'],
    ['following', '正在关注'],
    ['citations', '次引用'],
    ['reads', '次阅读'],
    ['recommendations', '次推荐'],
    ['mentions', '次提及'],
    ['Loading…', '加载中……'],
    ['Loading...', '加载中……'],
    ['Show more', '显示更多'],
    ['View all', '查看全部'],
    ['See all', '查看全部'],
    ['View profile', '查看个人主页'],
    ['View publication', '查看出版物'],
    ['Download full-text', '下载全文'],
    ['Request full-text', '请求全文'],
    ['Read full-text', '阅读全文'],
    ['Published in', '发表于'],
    ['Published on', '发表日期'],
    ['Last updated', '最后更新'],
    ['About this publication', '关于此出版物'],
    ['About this project', '关于此项目'],
    ['Share your research', '分享你的研究'],
    ['Invite co-authors', '邀请合作者'],
    ['Add a publication', '添加出版物'],
    ['Add a project', '添加项目'],
    ['Ask a question', '提出问题'],
    ['Write a comment', '发表评论'],
    ['More options', '更多选项'],
    ['Privacy settings', '隐私设置'],
    ['Account settings', '账户设置'],
    ['© 2008-', '© 2008-'],
    ['All rights reserved.', '保留所有权利。'],
  ]);
  const fragmentTerms = [...fragments.keys()].sort((a, b) => b.length - a.length);

  function translate(value) {
    if (!value || !/[A-Za-z]/.test(value)) return value;
    const trimmed = value.trim();
    const direct = exact.get(trimmed);
    if (direct) return value.replace(trimmed, direct);
    let next = value;
    for (const term of fragmentTerms) {
      if (next.includes(term)) next = next.split(term).join(fragments.get(term));
    }
    next = next.replace(/\b(\d+)\s+Reads?\b/g, '$1 次阅读');
    next = next.replace(/\b(\d+)\s+Citations?\b/g, '$1 次引用');
    next = next.replace(/\b(\d+)\s+researchers?\b/g, '$1 位研究人员');
    return next;
  }

  function shouldSkip(element) {
    return ['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA'].includes(element.tagName)
      || element.isContentEditable;
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || shouldSkip(node)) return;
    for (const attr of ['aria-label', 'title', 'placeholder', 'alt', 'value']) {
      if (!node.hasAttribute(attr)) continue;
      const old = node.getAttribute(attr);
      const next = translate(old);
      if (next !== old) node.setAttribute(attr, next);
    }
    for (const child of node.childNodes) translateNode(child);
  }

  function translatePage() {
    if (!document.documentElement) return;
    document.documentElement.lang = 'zh-CN';
    const translatedTitle = translate(document.title);
    if (translatedTitle !== document.title) document.title = translatedTitle;
    translateNode(document.documentElement);
  }

  function start() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') translateNode(mutation.target);
        for (const node of mutation.addedNodes) translateNode(node);
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    translatePage();
    [50, 200, 600, 1500, 3000].forEach((delay) => setTimeout(translatePage, delay));
  }

  if (document.documentElement) start();
  else document.addEventListener('DOMContentLoaded', start, { once: true });
})();
