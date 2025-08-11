/* 
    知识点：
    1. useState 提供的修改函数拥有两种写法，尽量采用 set(prev => xxx)
    2. 监听事件 onXXX 调用时外套个箭头函数，不然页面加载就会执行一次
    3. 标签样式多时，采取封装对象的方式
*/

import { useState } from "react"

function Counter() {

    // 定义计数变量
    const [count, setCount] = useState(0)

    // 定义按钮样式
    const btnStyleObj = {
        width: "50px",
        height: "50px",

    }

    return (
        <div className="counter" style={{ display: "flex", alignItems: "center" }}>
            {/* set函数写法一 */}
            <button onClick={() => setCount(prev => prev - 1)} style={btnStyleObj}>-</button>
            <span style={{ width: "40px", textAlign: "center" }}>{count}</span>
            {/* set函数写法二 */}
            <button onClick={() => setCount(count + 1)} style={btnStyleObj}>+</button>
        </div>
    )
}

export default Counter

