import '../../styles/tabs.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const max = 700000;
const min= 32000;
const marks = [
        {
            value: min,
            label: '',
        },
        {
            value: max,
            label: '',
        },
    ];



function calculateValue(valuecredito: number) {
    return  valuecredito;
}
        export default function SlideCreditos() {
        const [valuecredito, setValue] = React.useState<number>(32000);

        const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
        
    };

    return (
        <Box component="div">
            <Box component="div" sx={{ p: 3 }}>
                <Typography variant="subtitle1" component="p" sx={{fontWeight:700, fontSize:'12px'}}>
                Escolha o valor do crédito:
                </Typography>
                <Typography id="non-linear-slider" gutterBottom variant="subtitle1" component="p">
                R$ {valuecredito.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Typography>
            </Box>
            <Box>
                <Slider
                sx={{
                color: 'primary.main',
                }}
                marks={marks}
                step={10}
                value={valuecredito}
                onChange={handleChange}
                valueLabelDisplay="off"
                aria-label="Custom marks"
                min={min}
                max={max}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                R$ {min.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Typography>
                <Typography>
                R$ {max.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Typography>
            </Box>
        </Box>
    );
}