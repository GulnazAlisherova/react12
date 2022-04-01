function Paragraph({ size, color, children}) {
  const style = {
    fontSize: size,
    color: color
  };
  return <p style={style}></p>
}