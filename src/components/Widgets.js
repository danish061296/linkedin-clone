import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import { FiberManualRecord } from '@material-ui/icons';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecord
            style={{ fontSize: '9px', marginTop: '5px', color: 'gray' }}
          />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('React JS is so popular', 'Top news - 234 readers')}
      {newsArticle("Who's coming back in office?", 'Top news - 765 readers')}
      {newsArticle('Workers squeeze in one last trip', '24,333 readers')}
      {newsArticle('Consulting boom and bust', '3,765 readers')}
      {newsArticle('Google steered staff to counseling', '12,554 readers')}
    </div>
  );
};

export default Widgets;
