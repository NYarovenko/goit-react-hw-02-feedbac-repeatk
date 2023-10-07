import { StyledSectinTitele } from './Section.styles';

export const Section = ({ title, children }) => {
  return (
    <>
      <StyledSectinTitele>{title}</StyledSectinTitele>
      {children}
    </>
  );
};
