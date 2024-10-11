import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import popupStyles from './popup.module.scss'

export default function SortPopup() {

    const [service, setService] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setService(event.target.value as string);
    };

    return (
        <FormControl size="small">
            <InputLabel id="service-select" sx={{ top: '-5px' }} className={popupStyles.popup__label}>Sort by: Newest or oldest</InputLabel>
            <Select
                labelId="service-select"
                id="service-select"
                value={service}
                label="Age"
                onChange={handleChange}
                className={popupStyles['popup__top-sort']}
                sx={{
                    height: '32px',
                    "& .MuiOutlinedInput-notchedOutline": {
                        background: "linear-gradient(162.66deg, rgba(255, 255, 255, 0.35) 0.2%, rgba(248, 247, 246, 0.35) 99.8%)",
                        color: "#25436D",
                        border: "1px solid #fff",
                        boxShadow: "0px 0px 4px 0px #25436D4D",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        textAlign: "left",
                        paddingRight: '16px'
                    },

                }}
            >
                <MenuItem value={10}>Service 1</MenuItem>
                <MenuItem value={20}>Service 2</MenuItem>
                <MenuItem value={30}>Service 3</MenuItem>
            </Select>
        </FormControl>
    );
}
