function AboutPageContent({ title, number, paragraph, imageUrl, classCustom="", children }) {
    const customClasses = "about-content " + classCustom;
    return (
    <div className={ customClasses }>
      <div className="about-content-title-div">
        <span className="about-content-title">
        <h1 className="number"> {number}</h1>
          <h3>{title}</h3>
        </span>
        <p>
        {paragraph}
        </p>
      </div>
      <div>
      
        <img className="about-image" src={imageUrl}></img>
      </div>
    </div>
  );
}

export default AboutPageContent;
