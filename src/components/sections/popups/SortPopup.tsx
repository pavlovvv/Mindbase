import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import popupStyles from './popup.module.scss'
import popoverStyles from '@components/popovers/popover.module.scss'

interface SortPopupProps {
    items: string[];
}

export default function SortPopup({items}: SortPopupProps) {

    const [service, setService] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setService(event.target.value as string);
    };

    return (
        <FormControl size="small">
            <InputLabel id="service-select" sx={{ top: '-5px' }} className={popupStyles.popup__label}>Sort by</InputLabel>
            <Select
                labelId="service-select"
                id="service-select"
                value={service}
                label="Sort by"
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
                    {items.map(item => <div>{item}</div>)}
                </div>
            </Select>
        </FormControl>
    );
}
