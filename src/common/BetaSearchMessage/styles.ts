import { css } from '@linaria/core';
import { fontColorMain, MobileCN, secondaryColorLight,  } from '../../styles';

export const hidden = css``;
export const message = css`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  width: 500px;
  margin: 10px;
  background: ${secondaryColorLight};
  border-radius: 10px;
  padding: 35px;
  font-size: 25px;
  text-align: center;
  transition: .3s;
  font-color: ${fontColorMain};
  z-index: 1;
  pointer-events: none;
  animation: fadeInOut 6s ease-in-out;
  opacity: 0;

  &.${MobileCN} {
    width: 80%;
    font-size: 16px;
    padding: 15px;
  }

  @keyframes fadeInOut { 0%, 100% { opacity: 0; } 20%, 80% { opacity: 1; }
`;

