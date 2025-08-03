# 前端工具箱

一个使用 React + TypeScript + Ant Design 开发的纯前端工具箱，包含常用的开发工具。

## 功能特性

1. JSON格式化工具
2. 时间戳转换工具

## 技术栈

- React 18
- TypeScript
- Ant Design 5
- Vite
- Day.js

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

服务器启动后，会在终端中显示访问地址，通常是 http://localhost:5173/。如果5173端口被占用，Vite会自动使用其他可用端口，如 http://localhost:5174/。


### 构建生产版本

```bash
npm run build
```

### 部署到GitHub Pages

有两种方式可以部署到GitHub Pages：

1. **手动部署**：
   ```bash
   # 构建项目
   npm run build
   
   # 部署到GitHub Pages
   npm run deploy
   ```

2. **自动部署（推荐）**：
   项目已配置GitHub Actions工作流，当您将代码推送到main分支时，会自动部署到GitHub Pages。
   
   要启用GitHub Pages自动部署：
   1. 将代码推送到GitHub仓库
   2. 在GitHub仓库的Settings > Pages中，将Source设置为"GitHub Actions"


## 使用说明

1. JSON格式化工具：
   - 在输入框中粘贴需要格式化的JSON字符串
   - 点击"格式化"按钮
   - 可以复制格式化后的结果

2. 时间戳转换工具：
   - 时间戳转日期：
     * 在输入框中输入时间戳
     * 点击"转换为日期"按钮
     * 查看转换结果
   - 日期转时间戳：
     * 选择日期和时间
     * 点击"转换为时间戳"按钮
     * 可以复制生成的时间戳

## 项目结构

```
src/
├── components/
│   ├── JsonFormatter.tsx
│   └── TimestampConverter.tsx
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## 代码质量改进建议

1. **TypeScript类型安全**：
   - 为所有组件添加更详细的接口定义
   - 使用泛型来增强类型检查

2. **组件优化**：
   - 将重复的UI元素提取为可复用的子组件
   - 使用React Hooks优化状态管理

3. **错误处理**：
   - 添加更全面的错误边界处理
   - 为网络请求添加加载状态

4. **测试**：
   - 添加单元测试和集成测试
   - 使用Jest和React Testing Library

5. **代码规范**：
   - 配置ESLint和Prettier保持代码风格一致
   - 添加Husky和Lint-staged进行代码提交前检查

6. **性能优化**：
   - 使用React.memo优化组件渲染
   - 懒加载非关键组件

## 许可证

MIT