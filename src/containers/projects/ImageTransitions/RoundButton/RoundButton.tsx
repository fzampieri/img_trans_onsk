import React, { useEffect, useRef } from 'react';

import { useHover } from 'hooks/useHover';

import * as S from './RoundButton.styles';

interface Props {
  label: string;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  elId: number;
}

export const RoundButton = (props: Props) => {
  const { elId, setIsHovered, label } = props;

  const wrapperRef = useRef(null);

  const { isHovered } = useHover(wrapperRef);

  useEffect(() => {
    setIsHovered(isHovered);
  }, [isHovered, setIsHovered]);

  return (
    <>
      <S.Wrapper data-itransition-btn={elId} ref={wrapperRef}>
        <S.LabelsContainer>
          <S.Label data-rb="label">{label}</S.Label>
          <S.LabelCopy data-rb="labelCopy">{label}</S.LabelCopy>
        </S.LabelsContainer>
      </S.Wrapper>
    </>
  );
};