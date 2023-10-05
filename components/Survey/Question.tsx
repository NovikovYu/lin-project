import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Checkbox, FormGroup } from '@mui/material';
import {
  SurvayAnswersWrapper,
  SurvayButtonsWrapper,
  SurvayQuestion,
} from './Survey-style';
import {
  SecondaryButton,
  PrimaryButton,
} from '../CommonComponents/Common-сomponents-style';

interface IAnswer {
  answer_text: string;
  answer_id: string;
}

interface IProps {
  question: {
    question_title: string;
    question_id: string;
    question_type_id: string;
    answers: IAnswer[];
  };
  answer: string[] | null;
  goNext: () => void;
  goBack: () => void;
  updateAnswers: (answer: string[]) => void;
  disableGoBackBtn: boolean;
}

const Question = ({
  question,
  answer,
  goNext,
  goBack,
  updateAnswers,
  disableGoBackBtn,
}: IProps) => {
  const [value, setValue] = useState<string[]>([]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue([(event.target as HTMLInputElement).value]);
  };

  const handleCheckboxChange = (newAnswer: string) => {
    let oldAnswers = [...value];
    if (oldAnswers.includes(newAnswer)) {
      const index = oldAnswers.indexOf(newAnswer);
      oldAnswers.splice(index, 1);
    } else {
      oldAnswers.push(newAnswer);
    }
    setValue(oldAnswers);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateAnswers(value);
    setValue([]);
    goNext();
  };

  useEffect(() => {
    if (answer !== null) {
      setValue(answer);
    }
  }, [answer]);

  // console.log('question inside >>>', question);
  if (!question) {
    return <SurvayQuestion>Loading...</SurvayQuestion>;
  }

  if (question.question_id === '788d5c12-1a7b-4966-9319-509b11056eda') {
    console.log('WOW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('question >>', question);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <SurvayQuestion>
          {question?.question_title ?? 'Loading...'}
        </SurvayQuestion>

        {question.question_id === '788d5c12-1a7b-4966-9319-509b11056eda' ? (
          <SurvayAnswersWrapper>
            <FormGroup>
              {question.answers.map((answer, i) => (
                <FormControlLabel
                  key={answer.answer_id}
                  control={
                    <Checkbox
                      checked={value.includes(answer.answer_id)}
                      onChange={() => handleCheckboxChange(answer.answer_id)}
                    />
                  }
                  label={answer.answer_text}
                />
              ))}
            </FormGroup>
          </SurvayAnswersWrapper>
        ) : (
          <SurvayAnswersWrapper>
            <RadioGroup value={value} onChange={handleRadioChange}>
              {question.answers.map((answer, i) => (
                <FormControlLabel
                  key={answer.answer_id}
                  value={answer.answer_id}
                  control={<Radio />}
                  label={answer.answer_text}
                />
              ))}
            </RadioGroup>
          </SurvayAnswersWrapper>
        )}
        {/* ) : (
          <SurvayAnswersWrapper>
            <FormGroup>
              {question.answers.map((answer, i) => (
                <FormControlLabel
                  key={answer}
                  control={
                    <Checkbox
                      checked={value.includes(String(i))}
                      onChange={() => handleCheckboxChange(i)}
                    />
                  }
                  label={answer}
                />
              ))}
            </FormGroup>
          </SurvayAnswersWrapper>
        )} */}

        <SurvayButtonsWrapper>
          <SecondaryButton
            type="button"
            size="large"
            variant="contained"
            onClick={goBack}
            disabled={disableGoBackBtn}
          >
            Previous
          </SecondaryButton>

          <PrimaryButton
            type="submit"
            size="large"
            variant="contained"
            disabled={value.length === 0}
          >
            next
          </PrimaryButton>
        </SurvayButtonsWrapper>
      </FormControl>
    </form>
  );
};

export default Question;
