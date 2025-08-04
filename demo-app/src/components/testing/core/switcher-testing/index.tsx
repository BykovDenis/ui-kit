import Typography from "@dbykov-ui-kit/core/typography";
import React, { useState } from "react";
import CertainDecision from "../../../../enums/certain-decision";
import ListItemWrapped from "./list-item-wrapped";
import ListItemContainer from "./list-item-container";
import SppiQuestion from "../../../../enums/sppi-question";
// local components
// import FlexContainer from '../../../../packages/flex-container/src';
// import List from '../../../../packages/list/src';
// import ListItem from '../../../../packages/list-item/src';
// import Switcher from '../../../../packages/switcher/src';

// components from package library
import FlexContainer from "@dbykov-ui-kit/core/flex-container";
import List from "@dbykov-ui-kit/core/list";
import ListItem from "@dbykov-ui-kit/core/list-item";
import Switcher from "@dbykov-ui-kit/core/switcher";

const checklistSppiTestQuestions: { [key: string]: CertainDecision } = {
  q1: CertainDecision.Unknown,
  q2: CertainDecision.Unknown,
  q3: CertainDecision.Unknown,
  q4: CertainDecision.Unknown,
  q5: CertainDecision.Unknown,
  q6: CertainDecision.Unknown,
  q7: CertainDecision.Unknown,
  q8: CertainDecision.Unknown,
  q9: CertainDecision.Unknown,
  q10: CertainDecision.Unknown,
  q11: CertainDecision.Unknown,
  q12: CertainDecision.Unknown,
};

const SwitcherTesting: React.FunctionComponent = () => {
  const [answers, setAnswers] = useState<{ [key: string]: CertainDecision }>(
    checklistSppiTestQuestions
  );

  const onCertainDecisionChange = (certainDecision: string, name?: string) => {
    setAnswers((answers: { [key: string]: CertainDecision }) => {
      answers[name as string] = certainDecision as CertainDecision;
      return { ...answers };
    });
  };

  let answerIndex: number = 1;

  return (
    <FlexContainer width={900} flexDirection="column">
      <Typography variant="H1" textAlign="center">
        Testing Datepickers components
      </Typography>
      <FlexContainer
        marginLeft={15}
        flexDirection="column"
        alignItems="flex-start"
      >
        <Typography variant="H2" fontSize={20}>
          Отметьте верные утверждения
        </Typography>
        <FlexContainer marginLeft={65} width="initial">
          <List width={1340}>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++}>
                {SppiQuestion.Q1}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q1"
                  name="q1"
                  activeElement={answers.q1 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++}>
                {SppiQuestion.Q2}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q2"
                  name="q2"
                  activeElement={answers.q2 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++}>
                {SppiQuestion.Q3}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q3"
                  name="q3"
                  activeElement={answers.q3 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++}>
                {SppiQuestion.Q4}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q4"
                  name="q4"
                  activeElement={answers.q4 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++}>
                {SppiQuestion.Q5}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q5"
                  name="q5"
                  activeElement={answers.q5 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++}>
                {SppiQuestion.Q6}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q6"
                  name="q6"
                  activeElement={answers.q6 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++} paddingBottom={10}>
                {SppiQuestion.Q7}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q7"
                  name="q7"
                  activeElement={answers.q7 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <FlexContainer
                flexDirection="column"
                alignItems="flex-start"
                width={1000}
              >
                <ListItemContainer answerIndex={answerIndex++}>
                  <FlexContainer
                    flexDirection="column"
                    alignItems="flex-start"
                    fontSize={18}
                  >
                    В сделке ПДВ рассчитывается иначе чем:
                    <FlexContainer marginLeft={20} marginTop={5}>
                      <List fontSize={18}>
                        <ListItem
                          textAlign="left"
                          isVisibleTextUnderline={false}
                        >
                          <Typography
                            variant="Phrase"
                            fontSize={18}
                            margin="0"
                            height={20}
                          >
                            a. % от досрочно возвращаемой суммы кредита
                          </Typography>
                        </ListItem>
                        <ListItem
                          textAlign="left"
                          isVisibleTextUnderline={false}
                        >
                          <Typography
                            variant="Phrase"
                            fontSize={18}
                            margin="0"
                            minHeight={50}
                            whiteSpace="normal"
                            width={1000}
                            lineHeight={2}
                          >
                            b. % от досрочно возвращаемой суммы кредита с учетом
                            срока до плановой даты погашения/ до даты
                            уведомления. Например, ПДВ привязана к рыночной
                            ставке (в т.ч. ОФЗ)
                          </Typography>
                        </ListItem>
                      </List>
                    </FlexContainer>
                  </FlexContainer>
                </ListItemContainer>
              </FlexContainer>
              <FlexContainer width={140} alignSelf="center">
                <Switcher
                  id="q8"
                  name="q8"
                  activeElement={answers.q8 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++}>
                {SppiQuestion.Q9}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q9"
                  name="q9"
                  activeElement={answers.q9 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <FlexContainer
                flexDirection="column"
                alignItems="flex-start"
                width={1000}
              >
                <ListItemContainer answerIndex={answerIndex++}>
                  <FlexContainer
                    flexDirection="column"
                    alignItems="flex-start"
                    fontSize={18}
                  >
                    Сделка заключается в рамках Программы субсидирования
                    отличной от следующего списка:
                    <FlexContainer marginLeft={20} marginTop={15}>
                      <List fontSize={18}>
                        <ListItem
                          textAlign="left"
                          isVisibleTextUnderline={false}
                        >
                          <Typography
                            variant="Phrase"
                            fontSize={18}
                            margin="0 0 15px 0"
                            height={18}
                          >
                            a. МСХ Постановление Правительства №1528
                          </Typography>
                        </ListItem>
                        <ListItem
                          textAlign="left"
                          isVisibleTextUnderline={false}
                        >
                          <Typography
                            variant="Phrase"
                            fontSize={18}
                            margin="0 0 15px 0"
                            height={18}
                          >
                            b. МПТ Постановление Правительства №191
                          </Typography>
                        </ListItem>
                      </List>
                    </FlexContainer>
                  </FlexContainer>
                </ListItemContainer>
              </FlexContainer>
              <FlexContainer width={140} alignSelf="center">
                <Switcher
                  id="q10"
                  name="q10"
                  activeElement={answers.q10 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex++}>
                {SppiQuestion.Q11}
              </ListItemContainer>
              <FlexContainer width={140}>
                <Switcher
                  id="q11"
                  name="q11"
                  activeElement={answers.q11 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
            <ListItemWrapped>
              <ListItemContainer answerIndex={answerIndex} paddingBottom={10}>
                {SppiQuestion.Q12}
              </ListItemContainer>
              <FlexContainer width={140} alignSelf="center">
                <Switcher
                  id="q12"
                  name="q12"
                  activeElement={answers.q12 as string}
                  element1={CertainDecision.Yes as string}
                  element2={CertainDecision.No as string}
                  onSwitcherChange={onCertainDecisionChange}
                  width={140}
                  height={30}
                />
              </FlexContainer>
            </ListItemWrapped>
          </List>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default SwitcherTesting;
