
/* 
    知识点：
    1. 列表渲染使用 map 方法，遍历数组并渲染每个元素；key 不要使用索引，而是使用唯一标识符
    2. 组件之间的复用，通过 props 传递数据和事件处理函数
    3. 使用 TypeScript 定义组件的 props 类型，提高代码的可读性和可维护性
    4. 不允许直接修改数组或对象，使用对应方法返回新状态
    5. 善用 useState 和 useEffect
    6. async 函数返回 Promise，在 useEffect 中应先定义再调用，避免直接在 useEffect 中使用 async 函数
*/


import { useEffect, useState } from "react";
import Item from "./Item";
import type { User } from "./types";

function ListRendering() {
    const [ users, setUsers ] = useState<User[]>([]);

    useEffect(() => {
        // 模拟获取用户数据
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data: User[] = await response.json();
            console.log(response);
            setUsers(data.map(user => ({
                id: user.id,
                avatar: `https://i.pravatar.cc/150?img=${user.id}`,
                name: user.name
            })));
        };

        fetchUsers();
    }, []);

    const handleRemove = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };


    return (
        <ul>
            {users.map(user => (
                <Item key={user.id} user={user} onRemove={handleRemove} />
            ))}
        </ul>
    );
};

export default ListRendering;