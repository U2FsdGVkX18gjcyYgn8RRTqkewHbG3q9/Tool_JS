/**
 * @description 实现复制功能
 * @param 需要复制的内容
 * @abstract clipboard 判断浏览器是否支持剪切板api
 */
function copyText (text) {
 if (navigator.clipboard) {
    // 直接使用现代浏览器的剪切板api，IE禁用
    navigator.clipboard.writeText(text)
 } else {
    // 先创建输入文本框
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)

    // 隐藏文本框
    textarea.style.opacity = 0

    // 赋值
    textarea.value = text

    // 选中
    textarea.select()

    // 复制
    document.execCommand('copy', true)

    // 移除文本框
    document.body.removeChild(textarea)
 }
}