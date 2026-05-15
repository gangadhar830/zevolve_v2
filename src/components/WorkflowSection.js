import { FaChair, FaArrowUp, FaHeartbeat, FaCheckCircle } from "react-icons/fa";

function WorkflowSection() {
  const steps = [
    {
      icon: <FaChair />,
      title: "Start Seated",
      desc: "Begin your workday in a comfortable seated posture using saved desk presets."
    },
    {
      icon: <FaArrowUp />,
      title: "Lift Instantly",
      desc: "Smooth dual-motor height adjustment helps you transition effortlessly."
    },
    {
      icon: <FaHeartbeat />,
      title: "Stay Active",
      desc: "Encourages better circulation, movement, and healthier work habits."
    },
    {
      icon: <FaCheckCircle />,
      title: "End Organized",
      desc: "Return to your ideal height and maintain a cleaner workflow."
    }
  ];

  return (
    <section className="workflow-section">
      <div className="workflow-container">

        <div className="workflow-header">
          <span>WORKFLOW EXPERIENCE</span>
          <h2>Designed Around Your Day</h2>
          <p>
            A smarter desk experience built to improve productivity,
            posture, and movement throughout your routine.
          </p>
        </div>

        <div className="workflow-timeline">
          {steps.map((step, index) => (
            <div className="workflow-step" key={index}>
              <div className="workflow-card">
                <div className="workflow-icon">{step.icon}</div>

                <div className="workflow-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <div className="workflow-arrow">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkflowSection;