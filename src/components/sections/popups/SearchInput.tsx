import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import searchIcon from '@public/search-line.png'
import styles from '@/index.module.scss'
import arrow from '@public/arrow.png'
import Popover from "@mui/material/Popover";
import { useState } from "react";
import popoverStyles from '@components/popovers/popover.module.scss';


export default function CustomizedInputBase() {

    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Paper
            component="form"
            className={styles.paper}
            sx={{ display: 'flex', borderRadius: '4px', height: '36px', alignItems: 'center', boxShadow: 'none', border: '1px solid #8aadd8', outline: 'none', width: '330px' }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <img src={searchIcon} alt="search-icon" style={{ width: '20px', height: '20px' }} />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'Search' }}
            />
            <div className={styles["header__input-partners"]} onClick={handleClick}>
                Partners
                <img src={arrow} alt="arrow" style={{ width: '7px', height: '4px', marginLeft: '5px' }} />
            </div>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    zIndex: 1500,
                    "& .MuiPaper-root": { borderRadius: "14px 0 14px 14px" }
                }}
                className={popoverStyles.popover_partners}
            >
                <div className={popoverStyles.popover_partners__wrapper}>
                    <div>Services</div>
                    <div>Partnership</div>
                    <div>Product</div>
                    <div>Organizations</div>
                </div>

            </Popover>
        </Paper>
    );
}
