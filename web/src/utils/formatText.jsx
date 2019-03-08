import React from 'react';

export default blockContent =>
  blockContent.map((p, i) => (
    <p key={i}>
      {p.children &&
        p.children.map((span, j) => {
          let text = span.text;
          if (span.marks.indexOf('em') !== -1) {
            text = <em>{text}</em>;
          }
          if (span.marks.indexOf('strong') !== -1) {
            text = <strong>{text}</strong>;
          }
          return <span key={j}>{text}</span>;
        })}
    </p>
  ));
