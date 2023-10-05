import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import {
  MainBox,
  P,
} from '@/components/CommonComponents/Common-сomponents-style';
import {
  SurvayWrapper,
  SurvayPartTitleWrapper,
  SurvayPartTitleTitle,
  SurvayPartQuestionsWrapper,
  SurvayPartQuestionsCounter,
} from '@/components/Survey/Survey-style';
import Question from '@/components/Survey/Question';
import { selectAccessKey } from '@/store/slices/sessionSlice';

const axios = require('axios');

export default function Survey() {
  const router = useRouter();
  const accessKey = useSelector(selectAccessKey);

  // закладка - типизировать
  const [chaptersList, setСhaptersList] = useState<any>([]);
  const [questionList, setQuestionList] = useState<any>([]);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [currentPart, setCurrentPart] = useState<number>(0);
  // const [answers, setAnswers] = useState<Array<Array<Array<string>>>>([[], []]);

  // console.log('chaptersList >>', chaptersList);
  // console.log('questionList >>', questionList);

  // закладка - сделать запрос списка разделов / глав
  const getChaptersList = async () => {
    try {
      const response = await axios.get(
        process.env.BASE_DEV_URL + 'type_questionnaire/',
      );

      if (response.data) {
        setСhaptersList(response.data);
      }
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  useEffect(() => {
    getChaptersList();
  }, []);

  // закладка - сделать запрос списка вопросов
  const getQuestionList = async (id: string) => {
    try {
      const response = await axios.get(
        process.env.BASE_DEV_URL + `questionnaire/?questionnaire_id=${id}`,
      );

      if (response.data) {
        console.log('response.data >>', response.data);
        setQuestionList(response.data);
        return response.data.length;
      }
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  useEffect(() => {
    if (chaptersList.length) {
      getQuestionList(chaptersList[currentPart]['id']);
    }
  }, [chaptersList, currentPart]);

  const goNext = () => {
    // if (currentQuestion < questions[currentPart].quesionsArray.length - 1) {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion((value) => value + 1);
    } else {
      if (currentPart < chaptersList.length - 1) {
        setCurrentPart((value) => value + 1);
        setCurrentQuestion(0);
      } else {
        alert('Опрос закончен!');
      }
    }
  };

  const goBack = async () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((value) => value - 1);
    } else {
      if (currentPart > 0) {
        setCurrentPart((value) => value - 1);
        // закладка - проверить успевает ли обновиться questionList
        // мб вынести запрос questionList из второго юзЭффекта и запустить его здесь принудительно
        console.log('currentPart >>', currentPart);
        console.log('DO questionList.length >>', questionList.length);
        const questionListLength = await getQuestionList(
          chaptersList[currentPart - 1]['id'],
        );
        console.log('POSLE questionListLength >>', questionListLength);
        setCurrentQuestion(questionListLength - 1);
      } else {
        console.error('Кнопка НАЗАД не должна была сработать...');
      }
    }
  };

  console.log('accessKey >', accessKey);

  const saveAnswer = async (id: string) => {
    try {
      const response = await axios.post(
        process.env.BASE_DEV_URL + `user_answers/`,
        {
          answer: id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
          },
        },
      );
      console.log('axios response >>', response);

      if (response.data) {
        console.log('saveAnswer response.data >>', response.data);
      }
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  const updateAnswers = (answers: string[]): void => {
    // закладка - обработать мульти ответ
    console.log('answers >>>', answers);
    saveAnswer(answers[0]);

    // обновляем ответы на этот вопрос в общем массиве ответов
    // const newAnswers = cloneDeep(answers);
    // newAnswers[currentPart][currentQuestion] = answer;
    // setAnswers(newAnswers);
  };

  // console.log(
  //   'questionList[0].question_title >>>',
  //   questionList && questionList[0] && questionList[0].question_title
  //     ? questionList[0].question_title
  //     : 'пока пусто',
  // );

  return (
    <Layout pageTitle={'Lintu - survey page'}>
      <MainBox>
        <Container sx={{ maxWidth: '808px' }} maxWidth={false}>
          <SurvayWrapper>
            <SurvayPartTitleWrapper>
              {/* закладка - убрать */}
              {/* <SurvayPartTitleTitle variant="h1">
                Page id: {router.query?.id ?? 'ничего'}
              </SurvayPartTitleTitle> */}
              <SurvayPartTitleTitle variant="h1">
                Part {currentPart + 1} of {chaptersList.length}:{' '}
                {chaptersList[currentPart] && chaptersList[currentPart].title
                  ? chaptersList[currentPart].title
                  : 'Loading...'}
              </SurvayPartTitleTitle>
              <P>
                If you exit, the answers are saved. You can always come back and
                take the test to the end. There are a total of 38 questions in
                the question. Answer thoughtfully to get the best result
              </P>
            </SurvayPartTitleWrapper>

            <SurvayPartQuestionsWrapper>
              <SurvayPartQuestionsCounter>
                Question {currentQuestion + 1} of {questionList.length}
              </SurvayPartQuestionsCounter>

              <Question
                // question={questions[currentPart].quesionsArray[currentQuestion]}
                question={questionList[currentQuestion]}
                // answer={answers[currentPart][currentQuestion] ?? null}
                answer={null}
                goNext={goNext}
                goBack={goBack}
                updateAnswers={updateAnswers}
                disableGoBackBtn={currentPart === 0 && currentQuestion === 0}
              />
            </SurvayPartQuestionsWrapper>
          </SurvayWrapper>
        </Container>
      </MainBox>
    </Layout>
  );
}
