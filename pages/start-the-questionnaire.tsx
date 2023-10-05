import { Container } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { useRouter } from 'next/router';

const axios = require('axios');

export default function StartTheQuestionnaire() {
  const router = useRouter();

  // закладка - начать новый опрос
  // закладка поменять запрос
  const startNewQuestionnaire = async () => {
    try {
      const response = await axios.get(
        process.env.BASE_DEV_URL + 'type_questionnaire/',
      );

      if (response.data) {
        console.log('запрос новое портфолио', response.data);
        // заклакда - поменять id и условие
        if (response.data[0]['id'])
          router.push(`/survey/${response.data[0]['id']}`);
      }
    } catch (error) {
      console.error('Request error:', error);
    } 
  };

  return (
    <Layout pageTitle={'Lintu - start the questionnaire page'}>
      <MainBox>
        <Container sx={{ maxWidth: '808px' }} maxWidth={false}>
          <InfoPageContent
            imgSrc={'/business-product-planning-and-research.png'}
            imgAlt={
              'our analytics are thinking about the best investment strategy for you'
            }
            titleText={'Creating a new investment portfolio'}
            mainText={
              "Answer 38 questions and we'll create a unique, personalized portfolio for you"
            }
            buttonText={'Start the questionnaire'}
            onClick={startNewQuestionnaire}
          />
        </Container>
      </MainBox>
    </Layout>
  );
}
