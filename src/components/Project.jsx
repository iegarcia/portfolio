const Project = ({ item }) => {
  return (
    <>
      <div className="project">
        <a href={item.url} target="_blank" rel="noreferrer">
          <div className="project-container">
            <img src={item.src} alt={item.name} className="project-image" />
          </div>
        </a>
        <div className="project-content">
          <h2 className="project-content-name">{item.name}</h2>
          <p className="project-content-desc">{item.desc}</p>
          <div className="project-content-stack">
            {item.stack.map((e, i) => {
              return (
                <span key={i} className="project-content-stack-item">
                  {e}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
