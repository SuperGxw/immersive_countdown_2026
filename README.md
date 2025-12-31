
# 🎇 2026 星尘跨年 3D 倒计时

一个基于 React + Three.js + Framer Motion 打造的世界级 3D 跨年倒计时体验。

## 🛠️ 自定义指南 (Customization Guide)

如果你想修改背景图片或祝福语，请参考以下步骤：

### 1. 如何修改背景图片
打开 `App.tsx` 文件，找到顶部的 `PRESET_BACKGROUNDS` 常量：
```typescript
const PRESET_BACKGROUNDS = [
  'https://images.unsplash.com/photo-1467810563316...', // 图片1
  'https://images.unsplash.com/photo-1514525253361...', // 图片2
  // 你可以继续添加更多图片链接
];
```
- **使用网络图片**：直接将引号内的 URL 替换为你自己的图片链接。
- **使用本地图片**：将图片放入项目目录后，使用相对路径（例如：`./assets/my-bg.jpg`）。
- **图片切换**：在庆祝界面，背景会自动每 8 秒循环切换，也可以点击右上角的 "Switch Theme" 按钮手动切换。

### 2. 如何修改祝福语
打开 `App.tsx` 文件，找到 `FIXED_BLESSING` 常量：
```typescript
const FIXED_BLESSING = '愿新的一年，星辰璀璨，万事胜意';
```
- 直接修改引号内的文字即可。该文字会在跨年倒计时结束后的庆祝界面显示在 "Happy New Year" 下方。

## ✨ 特性
- **3D 粒子系统**：基于 Three.js 的动态背景与倒计时数字。
- **动态烟花**：实时物理渲染的高质量 Canvas 烟火。
- **背景自动循环**：进入庆祝界面后背景图片自动淡入淡出切换。
- **全端自适应**：完美支持手机、平板与桌面端。

## 🚀 部署到 GitHub Pages
1. **新建仓库**：在 GitHub 上创建一个新仓库。
2. **上传文件**：将本项目根目录下的所有文件上传。
3. **启用 Pages**：在仓库的 `Settings` -> `Pages` 中选择 `main` 分支并保存。

---
*星尘构筑未来，烟火点亮 2026。*
