import {css} from "@linaria/core";

export const innerLoader = css`
@keyframes inner {
  0% { transform: translate(12px,80px) scale(0); }
 25% { transform: translate(12px,80px) scale(0); }
 50% { transform: translate(12px,80px) scale(1); }
 75% { transform: translate(80px,80px) scale(1); }
100% { transform: translate(148px,80px) scale(1); }
}
@keyframes inner-r {
  0% { transform: translate(148px,80px) scale(1); }
100% { transform: translate(148px,80px) scale(0); }
}
@keyframes inner-c {
  0% { background: #499f53 }
 25% { background: #1c6581 }
 50% { background: #5ac2e9 }
 75% { background: #f9eb4f }
100% { background: #499f53 }
}
div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translate(80px,80px) scale(1);
  background: #499f53;
  animation: inner 1s infinite cubic-bezier(0,0.5,0.5,1);
}
div:nth-child(1) {
  background: #f9eb4f;
  transform: translate(148px,80px) scale(1);
  animation: inner-r 0.25s infinite cubic-bezier(0,0.5,0.5,1), inner-c 1s infinite step-start;
}
div:nth-child(2) {
    animation-delay: -0.25s;
    background: #499f53;
}
div:nth-child(3) {
  animation-delay: -0.5s;
  background: #f9eb4f;
}
 div:nth-child(4) {
  animation-delay: -0.75s;
  background: #5ac2e9;
}
 div:nth-child(5) {
  animation-delay: -1s;
  background: #1c6581;
}
  `;


export const loader = css`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
`;

export const expanded = css`
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background: white;
  `;
  
  export const wrapper = css`
  align-items:center;
  display: flex;
  justify-content: center;
  z-index:1;
`;
