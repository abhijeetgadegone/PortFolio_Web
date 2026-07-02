import resumeData from "../data/resumeData.js";

export default function StackVisual() {
  return (
    <div className="stack-visual" role="img" aria-label="Technology stack: frontend, backend, database, and tooling layers">
      {resumeData.stack.map((layer) => (
        <div className="stack-layer" data-color={layer.color} key={layer.layer}>
          <div className="stack-layer-head">
            <h4>{layer.layer}</h4>
            <span>layer</span>
          </div>
          <div className="stack-items">
            {layer.items.map((item) => (
              <span className="chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
