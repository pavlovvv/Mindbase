import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import popupStyles from './popup.module.scss'
import popoverStyles from '@components/popovers/popover.module.scss'

export default function TypesPopup() {

    const [service, setService] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setService(event.target.value as string);
    };

    return (
        <FormControl size="medium">
            <InputLabel id="service-select" sx={{ top: '-5px' }} className={popupStyles.popup__label}>Service</InputLabel>
            <Select
                labelId="service-select"
                id="service-select"
                value={service}
                label="Sort by"
                onChange={handleChange}
                sx={{
                    height: '44px',
                    width: "154px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        background: "transparent",
                        color: "#25436D",
                        border: "1px solid #8AADD8",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        textAlign: "left",
                        paddingRight: '16px'
                    }

                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            borderRadius: '14px 0 14px 14px',
                            boxShadow: "0px 0px 4px 0px #25436D4D"
                        }
                    },
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                      },
                      transformOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                      },
                    disableScrollLock: true,
                }}
            >
                <div style={{width: 'max-content', padding: '8px 16px'}} className={popoverStyles.popover_discover__wrapper}>
                    <div style={{marginBottom: 12, color: "#25436D", textDecoration: "underline"}}>Service</div>
                    <div style={{marginBottom: 12}}>Product</div>
                    <div>Partnership</div>
                </div>
            </Select>
        </FormControl>
    );
}
