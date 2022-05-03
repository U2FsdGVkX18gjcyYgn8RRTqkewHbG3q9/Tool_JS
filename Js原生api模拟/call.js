/**
 * 
 * @param {Object} ctx 传入 this 指向的对象 
 */
Function.prototype.diyCall = function (context) {
  // 判断对象是否存在,否则指向全局
  const ctx = context || window
  // 把需要执行的函数放入到 ctx 对象中
  ctx.fn = this
  // 创建一个数组用来接受遍历得到的参数指针
  const argArr = []
  // 遍历传入的参数
  for (let i = 1, len = arguments.length; i < len; i++) {
    argArr.push('arguments[' + i + ']')
  }
  // 得到结果
  const res = eval('ctx.fn(' + argArr + ')')
  // 删除 ctx 对象上的执行函数
  delete ctx.fn
  // 返回结果
  return res
}