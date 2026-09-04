import { useInView } from "../hooks/useInView";
import "./Reveal.css";

function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
