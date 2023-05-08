import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    // 4i7rZMo5oH1TgJMB3axJl21WYIlsmgLt

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;

        // ASÍ NO: categories.push( newCategory );
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Título */}
            <h1>Gif Expert App</h1>
            
            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { categories.map( (category) => (
                <GifGrid key={ category } category={category} />
                ))
            }

        </>
    )
}


