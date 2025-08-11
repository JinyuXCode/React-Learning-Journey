/* 
    知识点：
    1. 条件渲染使用三元表达式或者 && 运算符
    2. 事件函数逻辑过长时，可以提取成单独的函数
    3. DOM 组件可以定义在函数组件内部
*/
import { useState } from "react";

function ConditionalRender() {

    // 按钮文字
    const [buttonText, setButtonText] = useState("登录");

    // 状态
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    // 模拟个人信息 DOM 组件
    const UserInfo = () => {
        return (
            <div>
                <p>用户名: JohnDoe</p>
                <p>年龄: 30</p>
            </div>
        );
    };

    // 点击事件
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
        setButtonText(isLoggedIn ? "登录" : "注销");
    };

    return (
        <div className="conditional-render">
            <button onClick={handleClick}>{buttonText}</button>
            { isLoggedIn && <UserInfo /> }
        </div>
    );
}

export default ConditionalRender;