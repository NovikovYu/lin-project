import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { P } from '../CommonComponents/Common-сomponents-style';

export const InfoPageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '560px',
  margin: theme.spacing(0, 'auto'),
  padding: '32px 12px',
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow:
    '0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)',
  borderRadius: theme.spacing(0.5),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 5),
  },

  [theme.breakpoints.up('md')]: {
    maxWidth: '760px',
    padding: theme.spacing(6, 17.5),
  },
}));

export const InfoPageImgWrapper = styled(Typography)(({ theme }) => ({
  marginBottom: theme.typography.overline.fontSize,
}));

export const InfoPageTitle = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: '1.35',
  fontWeight: '600',
  textAlign: 'center',

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const InfoPageText = styled(P)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));
