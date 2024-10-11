import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import popupStyles from './popup.module.scss'

export default function ServicePopup() {

    const [service, setService] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setService(event.target.value as string);
    };

    return (
        <FormControl size="small">
            <InputLabel id="service-select" className={popupStyles.popup__label}>Services</InputLabel>
            <Select
                labelId="service-select"
                id="service-select"
                value={service}
                label="Age"
                onChange={handleChange}
                className={popupStyles['popup__top-services']}
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #8AADD8",
                        color: "#25436D",
                        background: "transparent",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        textAlign: "left"
                    }
                }}
            >
                <MenuItem value={10}>Service 1</MenuItem>
                <MenuItem value={20}>Service 2</MenuItem>
                <MenuItem value={30}>Service 3</MenuItem>
            </Select>
        </FormControl>
    );
}
