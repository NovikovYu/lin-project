import { Container } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';

export default function ConfirmYourEmail() {
  return (
    <Layout pageTitle={'Lintu - сonfirm Email page'}>
      <MainBox>
        <Container sx={{ maxWidth: '808px' }} maxWidth={false}>
          <InfoPageContent
            imgSrc={'/checking-info.png'}
            imgAlt={'our analytic is ckecking each users'}
            titleText={'Confirm your email'}
            mainText={`We sent an email to ${'mymailverylongnameforexample@mail.com'}
              Until you confirm the email, you will not be able to use some of the functionality of the platform`}
            buttonText={"OK, I'll confirm"}
            buttonLink={'/portfolios'}
          />
        </Container>
      </MainBox>
    </Layout>
  );
}
