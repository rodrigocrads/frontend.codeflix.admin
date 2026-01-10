import { Box, Button, IconButton, Toolbar } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { Category, selectCategories } from "./categorySlice";
import { Link } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete";
import { GridToolbar } from "@mui/x-data-grid/internals";

export const ListCategory = () => {
    const categories = useAppSelector(selectCategories);

    const rows: GridRowsProp = categories.map((category: Category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        isActive: category.is_active,
        createdAt: (new Date(category.created_at)).toLocaleDateString("pt-BR"),
    }));

    const columns: GridColDef[] = [
        {
            field: 'name', 
            headerName: 'Name',
            flex: 1
        },
        { 
            field: 'description', 
            headerName: 'Description',
            flex: 1
        },
        { 
            field: 'isActive', 
            headerName: 'Is Active',
            flex: 1,
            type: "boolean",
            renderCell: (row) => {
                return <span>{ row.value ? "Active" : "Inactive" }</span>;
            }
        },
        {
            field: 'createdAt',
            headerName: 'Created At', 
            flex: 1,
        },
        { 
            field: 'id', 
            headerName: 'Action',
            flex: 1,
            renderCell: renderIsActiveCell
        },
    ];

    function renderIsActiveCell(params: GridRenderCellParams) {
        return (
            <IconButton
                color="secondary"
                onClick={() => console.log("clicked", params.value)}
                aria-label="delete"
            >
                <DeleteIcon />
            </IconButton>
        );
    }

    return (
        <Box maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Box display="flex" justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/categories/create"
                    style={{ marginBottom: "1rem" }}
                >
                    New Category
                </Button>
            </Box>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    disableRowSelectionOnClick
                    disableMultipleRowSelection
                    showToolbar
                />
            </div>
        </Box>
    );
}