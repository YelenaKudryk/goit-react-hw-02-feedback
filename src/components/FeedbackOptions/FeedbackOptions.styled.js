import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const OptionButton = styled.button`
  width: 100px;
  padding: ${p => p.theme.spacing(1)};
  border: none;
  cursor: pointer;
  background-color: ${p => p.theme.colors.accentColor};
  border-radius: ${p => p.theme.radius.normal};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  transition: background-color 300ms linear, color 300ms linear;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accentColor};
  }
`;
