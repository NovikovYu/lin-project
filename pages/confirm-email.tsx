import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  ConfirmEmailBoxRestyle,
  ConfirmEmailBoxWrapperRestyle,
  ConfirmEmailButtonRestyle,
  ConfirmEmailContentWrapperRestyle,
  ConfirmEmailHeadingRestyle,
  ConfirmEmailImgWrapperRestyle,
  ConfirmEmailMessageRestyle,
} from '@/feature/style-home';
import ConfirmEmailImg from '@/components/img/confirm-email-img';
import { GlobalStyles } from '@mui/material';

const ChangePasswordMessage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ButtonSize = isMobile ? 'medium' : 'large';
  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: theme.palette.grey[100] },
        }}
      />
      <ConfirmEmailBoxWrapperRestyle>
        <ConfirmEmailBoxRestyle>
          <ConfirmEmailContentWrapperRestyle>
            <ConfirmEmailImgWrapperRestyle>
              <ConfirmEmailImg />
            </ConfirmEmailImgWrapperRestyle>
            <ConfirmEmailHeadingRestyle>
              Confirm your email
            </ConfirmEmailHeadingRestyle>
            <ConfirmEmailMessageRestyle>
              We sent an email to mymailverylongnameforexample@mail.com Until
              you confirm the email, you will not be able to use some of the
              functionality of the platform
            </ConfirmEmailMessageRestyle>
            <ConfirmEmailButtonRestyle
              id="confirm-email-button"
              variant="contained"
              size={ButtonSize}
              href="/"
            >
              OK, I&apos;ll confirm
            </ConfirmEmailButtonRestyle>
          </ConfirmEmailContentWrapperRestyle>
        </ConfirmEmailBoxRestyle>
      </ConfirmEmailBoxWrapperRestyle>
    </>
  );
};
export default ChangePasswordMessage;
