const BackToTop = ({ visible, onClick }) => {
  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={onClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

export default BackToTop
