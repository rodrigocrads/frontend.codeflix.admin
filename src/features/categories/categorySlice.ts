import { createSlice } from "@reduxjs/toolkit";

interface Category {
    id: string,
    name: string,
    description: null | string,
    is_active: boolean,
    deleted_at: null | string,
    created_at: string,
    updated_at: string
};

const category = {
    id: "c5670589-ac38-42c8-b458-d9fa245baf08",
    name: "Olive",
    description: "Earum quo at dolor tempore nisi.",
    is_active: true,
    deleted_at: null,
    created_at: "2022-08-15T10:59:09+0000",
    updated_at: "2022-08-15T10:59:09+0000"
};

export const categories: Category[] = [
    category,
    { ...category, id: "c4670589-ac38-42c8-b458-d9fa245baf08", name: "Banana" },
    { ...category, id: "c3670589-ac38-42c8-b458-d9fa245baf08", name: "Apple" },
    { ...category, id: "c2670589-ac38-42c8-b458-d9fa245baf08", name: "Peach" }
];

export const initialState = [ ...categories ];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        createCategory(state, action) {},
        updateCategory(state, action) {},
        deleteCategory(state, action) {},
    }
});

export default categoriesSlice.reducer;

