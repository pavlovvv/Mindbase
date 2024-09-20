import Popover from "@mui/material/Popover";
import { useState } from "react";
import popoverStyles from './popover.module.scss';

export default function PopoverDiscover() {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <div onMouseEnter={handleClick}>
                Discover
            </div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                // disableAutoFocus={true}
                // disableEnforceFocus={true}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                // sx={{ pointerEvents: 'none' }}
                className={popoverStyles.popover_discover}
            >
                <div className={popoverStyles.popover_discover__wrapper}>
                    <div>Needs</div>
                    <div>Offers</div>
                    <div>Organizations</div>
                </div>

            </Popover>
        </>
    );
}
