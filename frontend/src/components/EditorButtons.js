import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import SendIcon from '@mui/icons-material/SendToMobile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useNavigate } from 'react-router-dom';
const EditorButtons = ({ submitOnClick, downloadOnClick,showDownloadOptions }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );
    const navigate = useNavigate();
    
    return (
        <>
            <Box
                display='flex'
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems='flex-start'
                justifyContent='flex-start'
                marginTop={4}
            >
                <Button
                    variant='contained'
                    color='primary'
                    size='medium'
                    startIcon={<SendIcon />}
                    fullWidth={isMd ? false : true}
                    disableElevation={true}
                    onClick={submitOnClick}
                    sx={{
                        padding: '14px 30px',
                        marginRight: '15px',
                        fontSize: '18px',
                        border: '2px solid ' + theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.primary.main,
                            border: '2px solid ' + theme.palette.primary.main
                        }
                    }}
                >
                    Get Prediction
                </Button>
                
                {showDownloadOptions && <>
                    <Box
                    marginTop={{ xs: 2, sm: 0 }}
                    marginLeft={{ sm: 1 }}
                    width={{ xs: '100%', md: 'auto' }}
                >
                    <Button
                        variant='outlined'
                        size='medium'
                        color='secondary'
                        startIcon={<PictureAsPdfIcon />}
                        fullWidth={isMd ? false : true}
                        disableElevation={true}
                        onClick={downloadOnClick}
                        sx={{
                            padding: '14px 30px',
                            marginRight: '15px',
                            fontSize: '18px',
                            border: '2px solid ' + theme.palette.secondary.main,
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.text.secondary,
                                border: '2px solid ' + theme.palette.secondary.main
                            }
                        }}
                    >
                       Download Prediction
                    </Button>
                </Box>
                <Button
                    variant='contained'
                    color='primary'
                    size='medium'
                    startIcon={<SendIcon />}
                    fullWidth={isMd ? false : true}
                    disableElevation={true}
                    onClick={()=>navigate('/send-mail')}
                    sx={{
                        padding: '14px 30px',
                        marginRight: '15px',
                        fontSize: '18px',
                        border: '2px solid ' + theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.primary.main,
                            border: '2px solid ' + theme.palette.primary.main
                        }
                    }}
                >
                    Send To Email
                </Button>
                </>}
                
            </Box>
        </ >
    );
};

export default EditorButtons;