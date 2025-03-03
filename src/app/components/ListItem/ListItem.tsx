import React from "react";

interface ListItemProps {
    text: string;
}

const ListItem:  React.FC<ListItemProps> = ({ text }) => {
    return (
        <li className="text-body-color flex text-base">
            <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
            {text}
        </li>
    );
};

export default ListItem;