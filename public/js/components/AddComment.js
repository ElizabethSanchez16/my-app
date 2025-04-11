function AddComment({ blogId }) {
    const [commentText, setCommentText] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      // Simulación de envío a API
      setTimeout(() => {
        console.log("Commentaire soumis :", { blogId, text: commentText });
        setIsSubmitting(false);
        setSuccess(true);
        setCommentText("");
        setTimeout(() => setSuccess(false), 3000); // Mensaje de éxito desaparece
      }, 1500);
    };
  
    return (
      <div className="add-comment">
        <h3>Ajouter un commentaire</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Écrivez votre commentaire..."
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Envoi..." : "Envoyer"}
          </button>
          {success && <p className="success-message">Commentaire envoyé !</p>}
        </form>
      </div>
    );
  }