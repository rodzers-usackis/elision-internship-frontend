import Toolbar from "@mui/material/Toolbar";
import {alpha} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import React from "react";
import {useDeleteTrackedProducts} from "../../../hooks/products/useDeleteTrackedProducts";
import {EnhancedTableToolbarProps} from "./EnhancedTableToolbarProps";
import {EditTrackedProductModal} from "../EditTrackedProductModal";
import {useState} from "react";
import {AddTrackedProductModal} from "../AddTrackedProductModal";
import {usePostScrapingTask} from "../../../hooks/usePostScrapingTask";
import {ScrapingTask} from "../../../model/ScrapingTask";
import {ScrapingFeedbackSnackbar} from "./ScrapingFeedbackSnackbar";

export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const {
        deleteTrackedProductsMutation,
        isDeleteTrackedProductsError,
        isDeleteTrackedProductsLoading
    } = useDeleteTrackedProducts()

    const {isPostScrapingTaskError, isPostScrapingTaskLoading, postScrapingTaskMutation} = usePostScrapingTask();
    const {numSelected, selected} = props;
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [scrapingFeedbackSnackbarOpen, setScrapingFeedbackSnackbarOpen] = useState(false);


    function handleDelete() {
        deleteTrackedProductsMutation(selected.map(product => product.id));
    }

    function onEditClick() {
        setEditModalOpen(true);
    }

    function onEditModalClose() {
        setEditModalOpen(false);
    }

    function onAddClick() {
        setAddModalOpen(true);
    }

    function onAddModalClose() {
        setAddModalOpen(false);
    }

    function handlePostScrape() {
        setScrapingFeedbackSnackbarOpen(true);
        const productIds = selected.map(product => product.id);
        const scrapingTask = {
            productIds: productIds
        } as ScrapingTask;
        postScrapingTaskMutation(scrapingTask);
    }

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            <ScrapingFeedbackSnackbar open={scrapingFeedbackSnackbarOpen} onClose={() => {
                setScrapingFeedbackSnackbarOpen(false)
            }} isError={isPostScrapingTaskError} isLoading={isPostScrapingTaskLoading}/>

            {numSelected > 0 ? (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {props.title}
                </Typography>
            )}
            {numSelected === 1 ? (
                <>
                    <Tooltip title="Scrape Product's Price">
                        <IconButton onClick={handlePostScrape} size="large">
                            <CloudDownloadIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit Product">
                        <IconButton size="large" onClick={onEditClick}>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete Product">
                        <IconButton onClick={handleDelete} size="large">
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>

                </>
            ) : (
                numSelected > 1 ? (
                    <>
                        <Tooltip title="Scrape Selected Products' Prices">
                            <IconButton onClick={handlePostScrape} size="large">
                                <CloudDownloadIcon/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete Selected Products">
                            <IconButton onClick={handleDelete} size="large">
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    </>
                ) : (
                    <Tooltip title="Add Product">
                        <IconButton size="large" onClick={onAddClick}>
                            <AddBoxIcon/>
                        </IconButton>
                    </Tooltip>
                )
            )}
            {selected.length === 1 && editModalOpen ?
                <EditTrackedProductModal product={selected[0]} open={editModalOpen} onClose={onEditModalClose}/> : ''}
            {addModalOpen ?
                <AddTrackedProductModal open={addModalOpen} onClose={onAddModalClose}/> : ''}

        </Toolbar>
    );
}