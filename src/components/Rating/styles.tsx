import styled from "styled-components";

export const RatingGroup = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: center;
  align-content: center;
  gap: ${({ $gap = 0 }) => $gap}px;
`;

export const RatingStartsGroup = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: center;
  align-content: center;
  gap: ${({ $gap = 0 }) => $gap}px;
`;

export const RateItem = styled.label<{ $size: number }>`
  cursor: pointer;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  transition: all linear 120ms;
  &:hover {
    transform: scale(1.2);
  }
`;
