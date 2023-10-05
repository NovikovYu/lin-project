import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Container, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LintuIcon from '../img/icon';
import {
  AppBarRestyled,
  HeaderWrapper,
  MenuButtonRestyled,
  MenuIconButtonRestyled,
  NavigationListItem,
  NavigationUlItem,
  SignInButtonRestyled,
  ToolbarRestyled,
} from './Header-style';
import { selectAccessKey, setAccessKey } from '../../store/slices/sessionSlice';
import deleteSessionFromLocalStorage from '@/feature/utils/session/deleteSessionFromLocalStorage';

interface Props {
  handleOpenSignInModal: () => void;
}

const pages = ['Portfolio', 'Settings', 'Confirm-your-email'];

function Header({ handleOpenSignInModal }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const accessKey = useSelector(selectAccessKey);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    deleteSessionFromLocalStorage();
    dispatch(setAccessKey(null));
  };

  if (isDesktop) {
    return (
      <AppBarRestyled>
        <Container maxWidth="xl">
          <ToolbarRestyled>
            <Box border={'1px solid tomato'}>
              <Button href="/">
                <LintuIcon />
              </Button>
            </Box>

            <HeaderWrapper>
              <Box component="nav">
                <NavigationUlItem>
                  {pages.map((page) => (
                    <NavigationListItem key={page}>
                      <MenuButtonRestyled href={`/${page.toLowerCase()}`}>
                        {page}
                      </MenuButtonRestyled>
                    </NavigationListItem>
                  ))}
                </NavigationUlItem>
              </Box>

              {accessKey && (
                <SignInButtonRestyled onClick={handleSignOut}>
                  Sign Out
                </SignInButtonRestyled>
              )}
              {!accessKey && (
                <SignInButtonRestyled onClick={handleOpenSignInModal}>
                  Sign In
                </SignInButtonRestyled>
              )}
            </HeaderWrapper>
          </ToolbarRestyled>
        </Container>
      </AppBarRestyled>
    );
  }

  return (
    <AppBarRestyled>
      <Container maxWidth="md">
        <ToolbarRestyled>
          <Button href="/">
            <LintuIcon />
          </Button>
          <div>
            {accessKey && (
              <SignInButtonRestyled onClick={handleSignOut}>
                Sign Out
              </SignInButtonRestyled>
            )}
            {!accessKey && (
              <SignInButtonRestyled onClick={handleOpenSignInModal}>
                Sign In
              </SignInButtonRestyled>
            )}
            <MenuIconButtonRestyled
              id="menu-button"
              aria-controls={open ? 'menu-button' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </MenuIconButtonRestyled>
            <Menu
              id="item-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'item-button',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} href="/">
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </ToolbarRestyled>
      </Container>
    </AppBarRestyled>
  );
}

export default Header;
