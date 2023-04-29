import React, { useEffect, useState } from 'react';
import { MultiSelect2 } from "@blueprintjs/select";
import { MenuItem } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

const Show = () => 
{
    const [item, setItem] = useState("Python");
    const [items, setItems] = useState([]);
  
    const waw = () => {
        setItems(["C++", "JavaScript"])
    }
    return (
        <center>
            <div style={{ textAlign: "center", color: "green" }}>
                <h1>GeeksforGeeks</h1>
                <h2>ReactJs Blueprint MultiSelect2 Props Interface</h2>
            </div>
            <button onClick={waw} type="button" >
                Dot
            </button>
            <div style={{ width: 500 }}>
                <MultiSelect2
                    activeItem={item}
                    items={["C++", "JavaScript", "Java", "Python", "NodeJs"]}
                    selectedItems={items}
                    itemRenderer={(val, itemProps) => {
                        return (
                            <MenuItem
                                key={val}
                                text={val}
                                onClick={(elm) => {
                                    setItem(elm.target.textContent);
                                    setItems((items) => {
                                        return [...items, 
                                            elm.target.textContent];
                                    });
                                }}
                                active={itemProps.modifiers.active}
                            />
                        );
                    }}
                    placeholder="Select languages..."
                    onItemSelect={() => { }}
                    tagRenderer={(item) => item}
                    onRemove={(item) => {
                        setItems((items) => items.filter(
                            (elm) => elm !== item));
                    }}
                    onClear={() => setItems([])}
                />
            </div>
        </center>
	);
}

export default Show;