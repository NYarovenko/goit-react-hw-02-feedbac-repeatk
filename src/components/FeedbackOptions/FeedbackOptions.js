import { StyledButtonFeedback } from './FeedbackOptions.styled';
import { ButtonFeedback } from 'components/ButtonFeedback/ButtonFeedback';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButtonFeedback>
      {options.map(option => (
        <ButtonFeedback
          key={option}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </StyledButtonFeedback>
  );
};
