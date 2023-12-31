import { FC } from 'react';
import { useRouter } from 'next/router';
import {
  PortfolioCardItem,
  PortfolioCardTitle,
  PortfolioCardSubtitle,
  PrimaryButtonForPortfolioCard,
} from './Portfolios-style';

interface IProps {
  id: string;
}

const IncompletedPortfolioCardItem: FC<IProps> = ({ id }) => {
  const router = useRouter();

  const continueQuestionnaire = () => {
    router.push(`/survey/${id}`);
  };

  return (
    <PortfolioCardItem>
      <PortfolioCardTitle variant="h2">
        Portfolio is incomplete
      </PortfolioCardTitle>

      <PortfolioCardSubtitle>
        Finish the portfolio questionnaire
      </PortfolioCardSubtitle>

      <PrimaryButtonForPortfolioCard
        type="button"
        fullWidth
        size="small"
        variant="contained"
        // закладка - намутить отктытие незаконченного портфолио из карточки
        // href={link}
        onClick={continueQuestionnaire}
      >
        Continue
      </PrimaryButtonForPortfolioCard>
    </PortfolioCardItem>
  );
};

export default IncompletedPortfolioCardItem;
