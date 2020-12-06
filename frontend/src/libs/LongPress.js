export default {
    install(Vue, options = {
        time: 2000
    }) {
        Vue.directive('long-press', {
            bind: function (el, binding, vNode) {
                // 确保提供的表达式是函数
                if (typeof binding.value !== 'function') {
                    // 获取组件名称
                    const compName = vNode.context.$el.nodeName;
                    // 将警告传递给控制台
                    let warn = `[LongPress:] provided expression '${binding.expression}' is not a function, but has to be `;
                    if (compName) {
                        warn += `Found in component '${compName}' `
                    }
                    console.warn(warn);
                }
                // 定义变量
                let pressTimer = null;
                // 定义函数处理程序
                // 创建计时器
                let start = (e) => {
                    if (e.type === 'click' && e.button !== 0) {
                        return;
                    }
                    if (pressTimer === null) {
                        pressTimer = setTimeout(() => {
                            // 执行函数
                            handler();
                        }, options.time)
                    }
                }
                // 取消计时器
                // eslint-disable-next-line no-unused-vars
                let cancel = (e) => {
                    // 检查计时器是否有值
                    if (pressTimer !== null) {
                        clearTimeout(pressTimer);
                        pressTimer = null;
                    }
                }
                // 运行函数
                const handler = (e) => {
                    // 执行传递给指令的方法
                    binding.value(e)
                };
                // 添加事件监听器
                el.addEventListener("mousedown", start);
                el.addEventListener("touchstart", start);
                // 取消计时器
                el.addEventListener("mouseout", cancel);
                el.addEventListener("touchend", cancel);
                el.addEventListener("touchcancel", cancel);
            }
        })
    }
}