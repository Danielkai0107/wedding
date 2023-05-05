import React from 'react';

const EmailButton = ({ onSendEmail }) => {
  return (
    <button onClick={onSendEmail}>發送圖片和價錢到我的e-mail</button>
  );
};

export default EmailButton;
