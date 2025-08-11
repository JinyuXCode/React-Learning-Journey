interface User {
    id: number;
    avatar: string;
    name: string;
};

interface ItemProps  {
    user: User;
    onRemove: (id: number) => void;
}

export type { User, ItemProps };