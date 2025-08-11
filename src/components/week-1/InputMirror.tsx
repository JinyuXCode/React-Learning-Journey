/* 
    知识点：
    1. 输入框双向绑定：value 绑定变量，onChange 手动更新变量
    2. onChange 返回事件对象 e，e.target.value 为输入框的值
*/

import { useState } from "react"

function InputMirror() {
    const [input, setInput] = useState("")

    return (
        <div className="input-mirror">
            <p>输入框的内容是：{input}</p>
            <input type="text" value={input} onChange={(e) => setInput(prev => prev = e.target.value)} />
        </div>
    )
}

export default InputMirror