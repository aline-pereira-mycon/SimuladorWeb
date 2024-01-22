import '../../styles/tabs.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const MAX = 700000;
const MIN = 32000;
const marks = [
    {
        value: MIN,
        label: '',
    },
    {
        value: MAX,
        label: '',
    },
    ];



function calculateValue(valueparcela: number) {
    return  valueparcela;
}
        export default function Slideparcelas() {
        const [valueparcela, setValue] = React.useState<number>(32000);

        const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
        
    };

    return (
        <Box component="div">
            <Box component="div" sx={{ p: 3 }}>
                <Typography variant="subtitle1" component="p" sx={{fontWeight:700, fontSize:'12px'}}>
                Escolha o valor da parcela:
                </Typography>
                <Typography id="non-linear-slider" gutterBottom variant="subtitle1" component="p">
                R$ {(calculateValue(valueparcela))}
                </Typography>
            </Box>
            <Box>
                <Slider
                sx={{
                color: 'primary.main',
                }}
                marks={marks}
                step={10}
                value={valueparcela}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-label="Custom marks"
                min={MIN}
                max={MAX}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                    {MIN}
                </Typography>
                <Typography>
                    {MAX}
                </Typography>
            </Box>
        </Box>
    );
}