import { useState } from 'react';
import { Button, Modal, Box, Typography, Stack, Divider, Chip } from '@mui/material';
import wasabiBackground from './images/wasabi.svg';
import eth from './images/eth.svg';
import seth_logo from './images/sETH_logo.png';
import Fire_icon from './images/Fire_icon.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const ASSETS = [
  { icon: eth, name: 'ETH', amount: '1', value: '$3,520' },
  { icon: eth, name: 'WETH', amount: '0.5', value: '$1,750' },
  { icon: seth_logo, name: 'sETH', amount: '10', value: '$35,200' }
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: '#0A0F16',
  border: '1px solid #374155',
  boxShadow: 24,
  p: 3,
  borderRadius: 3,
};

const rowStyle = {
  bgcolor: '#0D1621',
  px: 1.5,
  py: 0.75,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  '&:hover': {
    bgcolor: '#22272d'
  }
};

const buttonStyle = {
  mb: 40,
  mr: 3,
  borderRadius: '20px',
  width: '104px',
  border: '1px solid #2c3645',
  bgcolor: '#21272e',
  color: '#87909f',
  '&:hover': {
    bgcolor: '#3a4557'
  },
  '& .MuiButton-startIcon': {
    marginRight: '4px'
  },
  '& .MuiButton-endIcon': {
    marginLeft: '2px'
  }
};

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundImage: `url(${wasabiBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: open ? 'blur(5px)' : 'none',
    transition: 'filter 0.3s ease'
  };

  const TokenIcon = ({ src }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '100%',
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '15px solid black'
    }}>
      <img src={src} alt="Token" style={{width: '20px', height: '20px'}} />
    </div>
  );

  const AssetRow = ({ icon, name, amount, value }) => (
    <Box sx={rowStyle}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.25 }}>
        <img src={icon} alt={name} style={{width: '51px', height: '51px'}} />
        <Typography sx={{ color: '#929DAE', fontSize: '2.1rem' }}>{name}</Typography>
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Typography sx={{ color: 'white', fontSize: '1.3rem' }}>{amount}</Typography>
        <Typography sx={{ color: '#87909f', fontSize: '1.3rem' }}>{value}</Typography>
      </Box>
    </Box>
  );

  return (
    <div style={containerStyle}>
      <Button 
        variant="contained" 
        onClick={handleOpen}
        sx={buttonStyle}
        startIcon={<TokenIcon src={eth} />}
        endIcon={<KeyboardArrowDownIcon sx={{ color: '#87909f' }} />}
      >
        <strong style={{fontSize: '1rem'}}>ETH</strong>
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        slotProps={{ backdrop: { style: { backgroundColor: 'rgba(0, 0, 0, 0.2)' } } }}
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.25}}>
            <Typography variant="subtitle2" component="h2" sx={{ color: 'white', fontWeight: 500, fontSize: '1.3rem' }}>
              Select from
            </Typography>
            <CloseIcon 
              onClick={handleClose}
              sx={{ cursor: 'pointer', color: '#929DAE', fontSize: '1.65rem' }}
            />
          </Box>
          
          <Box sx={{ border: '1px solid #364052', borderRadius: 3, overflow: 'hidden' }}>
            <Stack divider={<Divider sx={{ bgcolor: '#364052' }} />}>
              {ASSETS.map(asset => (
                <AssetRow key={asset.name} {...asset} />
              ))}
            </Stack>
          </Box>

          <Chip
            icon={<img src={Fire_icon} alt="Fire icon" style={{ width: '16px', height: '16px', marginLeft: '12px' }} />}
            label={
              <Typography sx={{ color: 'white', fontSize: '1rem' }}>
                Use your Vault Asset <u>without</u> interrupting your streak.
              </Typography>
            }
            sx={{
              mt: 2,
              width: '100%',
              height: 36,
              border: '1px solid #94FF0B',
              bgcolor: 'transparent', 
              color: '#94FF0B',
              '& .MuiChip-label': {
                px: 2,
                width: '100%'
              }
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default App;