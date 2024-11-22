module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "ecmaVersion": "latest",
                "sourceType": "script"
            }
        }
    ],
    // "parse":'vue-eslint-parse',
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-var":'error',
        "no-multiple-empty-lines":['warn',{max:1}],//不允许多个空行
        'no-unexpected-multiline':'error', //禁止多余空行

        'no-console': 'off', // 不允许使用 console.log 等
        'no-unused-vars': 'warn', // 不允许存在未使用的变量
        'no-undef': 'error', // 不允许使用未定义的变量

        'vue/html-indent': ['error', 2], // HTML 缩进为 2 个空格
        'vue/attribute-hyphenation': 'error', // 属性名使用连字符形式
        'vue/html-self-closing': 'off', // 关闭自闭合标签要求，根据个人或团队喜好配置
        'vue/no-mutating-props':'off'
    }
}
