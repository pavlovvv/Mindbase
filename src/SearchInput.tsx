import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import searchIcon from '../public/search-line.png'
import styles from './index.module.scss'
import arrow from '../public/arrow.png'

export default function CustomizedInputBase() {
    return (
        <Paper
            component="form"
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
            <div className={styles["header__input-partners"]}>
                Partners
                <img src={arrow} alt="arrow" style={{ width: '7px', height: '4px', marginLeft: '5px'}} />
            </div>
        </Paper>
    );
}
