export const fullabs = ({ y = 'top', x = 'left' }) => `
  position: absolute;
  ${y}: 0;
  ${x}: 0;
  width: 100%;
  height: 100%;
`;

export const fullfixed = ({ y = 'top', x = 'left' }) => `
  position: fixed;
  ${y}: 0;
  ${x}: 0;
  width: 100%;
  height: 100%;
`;


export const fill = () => `
  width: 100%;
  height: 100%;
`
