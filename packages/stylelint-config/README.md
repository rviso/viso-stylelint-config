# Gl Stylelint Config

这个包提供了 钢联 的 `.stylelintrc` 作为可扩展的共享配置。

## 安装

```bash
npm install --save-dev @gl/stylelint-config stylelint
```

## 使用

添加以下内容到你的 `.stylelintrc`:

```json
{
  "extends": ["@gl/stylelint-config"]
}
```

## Vscode 设置

如果您使用的是Visual Studio Code，您可以将以下设置添加到您的 `settings.json` 文件中：

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "stylelint.enable": true,
  "stylelint.validate": ["css", "scss", "less", "html", "vue"],

  // 由于stylelint 不支持自动修复所有格式化问题，所以需要 prettier 来修复一些问题
  "[scss]": {
    // 配置scss文件使用prettier + stylelint格式化
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[sass]": {
    // 配置scss文件使用prettier + stylelint格式化
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[css]": {
    // 配置scss文件使用prettier + stylelint格式化
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[less]": {
    // 配置scss文件使用prettier + stylelint格式化
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
}
```

为了使这些设置生效，您需要安装以下插件：

- [Stylelint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
