const Tag = ({ children, className }) => {
  return (
    <div className={`border-2 border-slate-400 rounded-3xl p-2 ${className}`}>
      {children}
    </div>
  )
}

export default Tag
