import type { ItemProps } from "./types";

function Item({user,onRemove}: ItemProps){
    return(
        <div>
            <img src={user.avatar} alt={user.name} width={40} height={40} />
            <span>{user.name}</span>
            <button onClick={() => onRemove(user.id)}>Remove</button>
        </div>
    )
}

export default Item;