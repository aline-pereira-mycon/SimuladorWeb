import * as React from 'react';
import '../styles/tabs.css'
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SlideCreditos from '@/components/Slides/SlideCreditos'
import SlideParcelas from '@/components/Slides/SlideParcelas'
import Image from 'next/image';
import IconeImoveis from '../assets/images/ico-imovel.svg'
import IconeCarro from '../assets/images/ico-carro.svg'
import IconeMoto from '../assets/images/ico-moto.svg'
import IconeServicos from '../assets/images/ico-servicos.svg'


interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;

  onChange: (event: React.SyntheticEvent, newValue: number) => void;

}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}

  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface StyledTabProps {
  label: string;
  icon: any;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '12px',
  marginRight: theme.spacing(1),
  color: '#3A4256',
  '&.Mui-selected': {
    backgroundColor: '#5451FB',
    color: '#fff',
    borderRadius:'8px',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));



export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', p:3 }}>
        <div>
          <Typography gutterBottom variant="h5">
            Faça a simulação do seu crédito
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h6" sx={{mb:5}}>
            Selecione a sua Conquista
            </Typography>
        </div>
      <Box component="div">
        <StyledTabs
        
          value={value}
          onChange={handleChange}
          aria-label="escolha produto" sx={{ bgcolor: '#F9F9FB', borderRadius:'8px' }}>
          <StyledTab icon={<Image alt="Mycon" src={IconeImoveis} />} label="Imóvel" {...a11yProps(0)}/>
          <StyledTab icon={<Image alt="Mycon" src={IconeCarro} />} label="Carro" {...a11yProps(1)} />
          <StyledTab icon={<Image alt="Mycon" src={IconeMoto} />} label="Moto" {...a11yProps(2)} />
          <StyledTab icon={<Image alt="Mycon" src={IconeServicos} />} label="Serviços" {...a11yProps(3)} />
        </StyledTabs>
        
      </Box>
      <Box>
        <CustomTabPanel value={value} index={0} >
          <SlideCreditos></SlideCreditos>
          <SlideParcelas></SlideParcelas>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <SlideCreditos></SlideCreditos>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Three
        </CustomTabPanel>
      </Box>
      <Box>
        <Button variant="contained" sx={{mx:'auto', width:200}}>Simular agora
        </Button>
      </Box>
    </Box>
  );
}
