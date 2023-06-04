import Toolbar from "@mui/material/Toolbar";
import {alpha} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import React from "react";
import {EnhancedTableToolbarProps} from "./EnhancedTableToolbarProps";
import {useState} from "react";
import {EditAlertRuleModal} from "../EditAlertRuleModal";
import {AddAlertRuleModal} from "../AddAlertRuleModal";
import {deleteAlertRules} from "../../../services/api/alert-rules";

export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const {numSelected, selected} = props;
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);

    function handleDelete() {
        deleteAlertRules(selected.map(product => product.id));
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
                    <Tooltip title="Edit Alert Rule">
                        <IconButton size="large" onClick={onEditClick}>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete Alert Rule">
                        <IconButton size="large" onClick={handleDelete}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>

                </>
            ) : (
                numSelected > 1 ? (
                    <>
                        <Tooltip title="Delete Selected Alert Rule">
                            <IconButton size="large">
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    </>
                ) : (
                    <Tooltip title="Add New Alert Rule">
                        <IconButton size="large" onClick={onAddClick}>
                            <AddBoxIcon/>
                        </IconButton>
                    </Tooltip>
                )
            )}
            {selected.length === 1 && editModalOpen ?
                <EditAlertRuleModal alertRule={selected[0]} open={editModalOpen} onClose={onEditModalClose}/> : ''}
            {addModalOpen ?
                <AddAlertRuleModal open={addModalOpen} onClose={onAddModalClose}/> : ''}
        </Toolbar>
    );
}