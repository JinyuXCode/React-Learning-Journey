# React 学习之旅：从 Vue 到 React 的思维转变

你好！👋 这是一个记录我个人学习 React 全过程的仓库。

作为一个长期使用 Vue 和 uni-app 的开发者，我希望通过这个强化学习计划，不仅掌握 React 的核心技术，更重要的是**建立起 React 的思维模式和肌肉记忆**。

这个仓库既是我的学习笔记，也是我坚持下去的动力证明。

## 🎯 我的学习目标

- [⭐] **第一周**: 掌握核心概念，形成肌肉记忆。
- [ ] **第二、三周**: 能够独立完成小型综合项目，理解数据流与组件化。
- [ ] **第四周**: 了解进阶概念与性能优化，为实战做准备。
- [ ] **最终目标**: 能够得心应手地使用 React 进行开发，并开启 React Native 的学习之路。

## 🛠️ 技术栈

- **核心框架**: React (v18+)
- **构建工具**: Vite
- **编程语言**: TypeScript
- **版本控制**: Git & GitHub

## 🚀 如何运行本项目

```bash
# 1. 克隆项目到本地
git clone [请在这里粘贴你的仓库SSH或HTTPS链接]

# 2. 进入项目目录
cd react-learning-journey

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev
```

---

## ✅ 学习进度清单 (Learning Checklist)

### **第一周：思维重塑与肌肉记忆训练**

- [✌️] **`useState` 专项训练**
    - [⭐] 计数器 (`Counter.tsx`)
    - [⭐] 输入框与状态同步 (`InputMirror.tsx`)
- [✌️] **列表渲染(`.map()`)、Props 父子通信、`useEffect` 副作用初体验**
    - [⭐] 实现用户信息子组件，接收父组件传递的 Props (`list-rendering/Item.tsx`)
    - [⭐] 实现用户信息列表组件，从公开 API 获取数据后渲染列表 (`list-rendering/ListRendering.tsx`)
    - [⭐] 父组件通过 Props 传递给子组件相关数据与函数
- [✌️] **条件渲染**
    - [⭐] 使用三元运算符切换组件 (`ConditionalRender.tsx`)
    - [⭐] 使用 `&&` 操作符控制元素显示 (`ConditionalRender.tsx`)


### **第二、三周：小型综合项目实战**

> 任务：构建一个网页版的“短剧 App”界面

- [ ] **项目规划与组件拆分**
    - [ ] `Header`
    - [ ] `VideoList` / `VideoListItem`
    - [ ] `SearchBar`
    - [ ] `VideoDetailPage`
- [ ] **状态提升 (Lifting State Up)**
    - [ ] 将搜索状态和列表数据提升到父组件管理
- [ ] **路由管理 (`react-router-dom`)**
    - [ ] 配置首页和详情页的路由
    - [ ] 实现页面间的跳转和参数传递
- [ ] **表单处理**
    - [ ] 实现一个功能完善的受控搜索框
- [ ] **异步数据流管理**
    - [ ] 在多个页面中处理加载、成功、失败三种状态

### **第四周：深入与优化**

- [ ] **自定义 Hook (Custom Hooks)**
    - [ ] 封装一个 `useFetch(url)` 的自定义 Hook
- [ ] **性能优化 Hooks**
    - [ ] 理解并使用 `useMemo` 缓存计算结果
    - [ ] 理解并使用 `useCallback` 缓存函数引用
- [ ] **全局状态管理 (`Context` API)**
    - [ ] 使用 `Context` 实现一个全局主题切换功能 (白天/黑夜模式)

---

### 💡 如何查看每日练习

本项目的所有练习组件都存放在 `src/components` 目录下，并按周和天进行组织。

你可以通过修改 **`src/App.tsx`** 文件中的引入来展示不同的练习成果。

例如，要展示第一周的 `InputMirror` 组件：

```tsx
// 文件位置: src/App.tsx

// 1. 注释掉或删除旧的引入
// import ComponentToShow from './components/week1/Counter';

// 2. 引入你想要展示的新组件
import ComponentToShow from './components/week-1/InputMirror'; // <-- 只需修改这一行!

function App() {
  return (
    <div className="App">
      <ComponentToShow />
    </div>
  );
}

export default App;
```