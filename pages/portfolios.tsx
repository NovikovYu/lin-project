import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, Container } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import {
  PortfoliosTitle,
  PortfoliosSubtitle,
  PortfolioCardTitle,
  PortfolioCardsList,
  PortfolioCardItem,
  PortfolioCardSubtitle,
  SecondaryButtonForPortfolioCard,
  PortfolioCardItemSkeleton,
} from '../components/Portfolios/Portfolios-style';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import IncompletedPortfolioCardItem from '@/components/Portfolios/Incompleted-portfolio-card-item copy';
import CompletedPortfolioCardItem from '@/components/Portfolios/Completed-portfolio-card-item';
import { selectAccessKey } from '@/store/slices/sessionSlice';

const completedPortfolios = [
  {
    currency: '€',
    amount: 2456,
    number: 1,
    profitability: 12,
    id: 'sdfsdf',
  },
  {
    currency: '€',
    amount: 9481,
    number: 2,
    profitability: -1,
    link: '/sdfsdf',
  },
];

const inCompletedPortfolios = [
  {
    id: 'sdfsdf',
  },
  {
    id: 'sdfsdf',
  },
];

const axios = require('axios');

export default function Portfolios() {
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!accessKey) {
      // router.push('/');
    }
  }, [accessKey, router]);

  // закладка - типизировать
  const [questionnairesList, setQuestionnairesList] = useState<any>();

  useEffect(() => {
    // закладка - сделать запрос списка портфолио
    const getQuestionnairesList = async () => {
      try {
        const response = await axios.get(
          process.env.BASE_DEV_URL + 'questionnaire_list/',
        );

        if (response.data) {
          setQuestionnairesList(response.data);
        }
      } catch (error) {
        console.error('Request error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getQuestionnairesList();
  }, []);

  return (
    <Layout pageTitle={'Lintu - portfolios page'}>
      <MainBox>
        <Container sx={{ maxWidth: '808px' }} maxWidth={false}>
          <PortfoliosTitle variant="h1">Portfolios</PortfoliosTitle>

          <PortfoliosSubtitle>
            Here are all your created portfolios and all the analytics about
            them
          </PortfoliosSubtitle>

          <PortfolioCardsList>
            <PortfolioCardItem>
              <PortfolioCardTitle variant="h2">
                Create new portfolio
              </PortfolioCardTitle>

              <PortfolioCardSubtitle>
                Take the questionnaire and create a new portfolio
              </PortfolioCardSubtitle>

              <SecondaryButtonForPortfolioCard
                type="button"
                fullWidth
                size="small"
                variant="contained"
                href="/start-the-questionnaire"
              >
                take a survey
              </SecondaryButtonForPortfolioCard>
            </PortfolioCardItem>

            {isLoading && (
              <PortfolioCardItemSkeleton>
                <CircularProgress />
              </PortfolioCardItemSkeleton>
            )}

            {/* закладка - мб поменять условие рендеринга */}
            {questionnairesList && questionnairesList.length > 0 && (
              <>
                {/* // закладка - типизировать */}
                {questionnairesList.map((portfolio: any) => {
                  if (portfolio.profitability) {
                    return (
                      <CompletedPortfolioCardItem
                        currency={portfolio.currency}
                        amount={portfolio.amount}
                        number={portfolio.number}
                        profitability={portfolio.profitability}
                        link={portfolio.link}
                        key={portfolio.number}
                      />
                    );
                  } else {
                    return (
                      <IncompletedPortfolioCardItem
                        id={portfolio.id}
                        key={portfolio.id}
                      />
                    );
                  }
                })}
              </>
            )}
          </PortfolioCardsList>
        </Container>
      </MainBox>
    </Layout>
  );
}
