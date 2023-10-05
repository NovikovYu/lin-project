import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppBarRestyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: `${theme.spacing(0)} ${theme.spacing(0.75)} ${theme.spacing(
    1.5,
  )} -${theme.spacing(0.75)} rgba(24, 39, 75, 0.12), ${theme.spacing(
    0,
  )} ${theme.spacing(1)} ${theme.spacing(3)} -${theme.spacing(
    0.5,
  )} rgba(24, 39, 75, 0.08)`,
}));

export const HeaderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6),
}));

export const MenuButtonRestyled = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'capitalize',
  fontWeight: theme.typography.body1.fontWeight,
  fontSize: theme.typography.body1.fontSize,
  letterSpacing: theme.typography.body1.letterSpacing,
  '& .MuiButton-root:hover': {
    background: theme.palette.action.hover,
  },
}));

export const MenuIconButtonRestyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
}));

export const SignInButtonRestyled = styled(Button)<ButtonProps>(
  ({ theme }) => ({
    color: theme.palette.text.primary,
    textTransform: 'none',
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    letterSpacing: theme.typography.body1.letterSpacing,
    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(2),
    },
  }),
);

export const ToolbarRestyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: theme.spacing(18),
  marginRight: theme.spacing(18),
  padding: 0,
  [theme.breakpoints.down('lg')]: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
}));

export const NavigationUlItem = styled(List)(() => ({
  display: 'flex',
}));

export const NavigationListItem = styled(ListItem)(({ theme }) => ({
  listStyleType: 'none',
  marginRight: theme.spacing(4),
  padding: 0,
}));

export const SignInBoxRestyled = styled(Box)(({ theme }) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width: 496,
  minHeight: 392,
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '45%',
    left: '50%',
    width: 330,
    minHeight: 250,
  },
}));

export const SignUpBoxRestyled = styled(Box)(({ theme }) => ({
  position: 'absolute' as 'absolute',
  top: '55%',
  left: '50%',
  width: 496,
  minHeight: 588,
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '53%',
    left: '50%',
    width: 320,
    minHeight: 270,
  },
}));

export const ForgotPasswordBoxRestyled = styled(Box)(({ theme }) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width: 496,
  minHeight: 242,
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '50%',
    left: '50%',
    width: 400,
    minHeight: 155,
  },
}));

export const ForgotPasswordMessageBoxRestyled = styled(Box)(({ theme }) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width: 496,
  height: 240,
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '50%',
    left: '50%',
    width: 400,
    height: 190,
  },
}));
