import Toolbar from "@mui/material/Toolbar";
import {alpha, Typography} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import * as React from "react";

export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const {numSelected} = props;

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
                    Products
                </Typography>
            )}
            {numSelected === 1 ? (
                <>
                    <Tooltip title="Edit Product">
                        <IconButton size="large">
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Product">
                        <IconButton size="large">
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </>
            ) : (
                numSelected > 1 ? (
                    <Tooltip title="Delete Selected Products">
                        <IconButton size="large">
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Add Product">
                        <IconButton size="large">
                            <AddBoxIcon/>
                        </IconButton>
                    </Tooltip>
                )
            )}
        </Toolbar>
    );
}