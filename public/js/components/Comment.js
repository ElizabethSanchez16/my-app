function Comment({ author, text, date }) {
    return (
      <div className="comment">
        <div className="comment-header">
          <strong>{author}</strong>
          <span className="comment-date">{date}</span>
        </div>
        <p className="comment-text">{text}</p>
      </div>
    );
  }