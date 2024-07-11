<div align="center">
  <img width="130" src="https://www.github.com/CCNUPracticalTraining-530-2.png" alt="Harmony Logo">
  <h1 align="center">Harmony</h1>
  <h3>在线即时通讯平台</h3>
  <a href="https://github.com/CCNUPracticalTraining-530-2/Harmony"><strong>探索项目文档 »</strong></a>
  <br />
  <br />

![license](https://img.shields.io/github/license/CCNUPracticalTraining-530-2/Harmony)
![language](https://img.shields.io/github/languages/top/CCNUPracticalTraining-530-2/Harmony)
![last](https://img.shields.io/github/last-commit/CCNUPracticalTraining-530-2/Harmony)

<a href="https://harmony-530-2.vercel.app" target="_blank">在线体验</a>
·
<a href="https://github.com/BlackishGreen33/ZhiXueTuPu/issues">报告Bug</a>
·
<a href="https://github.com/BlackishGreen33/ZhiXueTuPu/issues">提出新特性</a>

</div>

## 🔖 项目导览

### ✨ 現有功能

- 创建专属服务器
- 服务器权限管理(包括 `拥有者` 、 `管理员` 与 `一般成员`)
- 建立服务器邀请链接
- 创建频道(包括 `文字频道` 、 `语音频道` 与 `视讯频道`)
- 发送 emoji 、图片、pdf 文件(可在线预览)
- 公众频道/私人聊天和通讯
- 屏幕画面共享

### ✒️ 引用技術

- **框架**: [Next.js](https://nextjs.org)
- **样式**: [Tailwind CSS](https://www.tailwindcss.cn/)
- **数据库**: [MySQL](https://www.mysql.com/)
- **数据库工具**: [Prisma](https://www.prisma.io/)
- **即时通讯**: [Socket.IO](https://socket.io/)
- **媒体串流**: [WebRTC](https://webrtc.org/)

### 📋 提交规范

- 🎉 init：项目初始化
- ✨ feat：新增功能（feature）
- 🐞 fix：修复bug
- 📃 docs：文档修改
- 🌈 style：代码样式修改，不影响原代码逻辑
- ✅ test：测试相关的改动
- 🔨 refactor：代码重构
- 🔧 chore：建制过程或辅助工具的变动

### 🎯 相容环境

- 现代浏览器（Chrome >= 64, Edge >= 79, Firefox >= 78, Safari >= 12）

### 💻 本地调试

记得先配置环境变量：
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

接着拉取代码和安装依赖：
```bash
$ git clone https://github.com/CCNUPracticalTraining-530-2/Harmony.git
$ cd Harmony
$ pnpm install
$ pnpm run dev
```

### 📝 授权

上述文件皆以 MIT 许可授权

> 详细之授权请参考 [LICENSE](LICENSE) 文件
