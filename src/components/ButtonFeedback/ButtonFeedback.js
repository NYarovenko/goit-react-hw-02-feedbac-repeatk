import { StyledButtom } from './ButtonFeedback.styles';

export const ButtonFeedback = ({ option, onLeaveFeedback }) => {
  return (
    <>
      <StyledButtom
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </StyledButtom>
    </>
  );
};
