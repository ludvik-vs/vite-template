import "./styleGuideComponent.scss"

function StyleGuideComponent(){
    return (
      <section>
        <h4>MD3 Pallete</h4>
        <div className="pallete--color-galley">
          <div className={`pallete--color-box pallete--primary-color`}>
            Primary
          </div>
          <div className={`pallete--color-box pallete--secondary-color`}>
            Secondary
          </div>
          <div className={`pallete--color-box pallete--error-color`}>Error</div>
          <div className={`pallete--color-box pallete--warning-color`}>
            Warning
          </div>
          <div className={`pallete--color-box pallete--success-color`}>
            Success
          </div>
          <div className={`pallete--color-box pallete--info-color`}>Info</div>
          <div className={`pallete--color-box pallete--background-color`}>
            Background
          </div>
        </div>
        <h4>Complement Colors</h4>
        <div className="pallete--color-galley">
          <div className={`pallete--color-box pallete--pink-color`}>Pink</div>
          <div className={`pallete--color-box pallete--red-color`}>Red</div>
          <div className={`pallete--color-box pallete--orange-color`}>
            Orange
          </div>
          <div className={`pallete--color-box pallete--yellow-color`}>
            Yellow
          </div>
          <div className={`pallete--color-box pallete--green-color`}>Green</div>
          <div className={`pallete--color-box pallete--blue-color`}>Blue</div>
          <div className={`pallete--color-box pallete--purple-color`}>
            Purple
          </div>
        </div>

        <h4>Gray Scake</h4>
        <div className="pallete--color-galley">
         <div className={`pallete--color-box pallete--white-color`}>White</div>
         <div className={`pallete--color-box pallete--gray-light-color`}>Light Gray</div>
         <div className={`pallete--color-box pallete--gray-medium-light-color`}>Medium Light Gray</div>
         <div className={`pallete--color-box pallete--gray-color`}>Gray</div>
         <div className={`pallete--color-box pallete--gray-medium-dark-color`}>Medium Dark Gray</div>
         <div className={`pallete--color-box pallete--dark-gray-color`}>Dark Gray</div>
         <div className={`pallete--color-box pallete--gray-very-dark-color`}>Very Dark Gray</div>
         <div className={`pallete--color-box pallete--black-color`}>Black</div>
        </div>
      </section>
    );
}

export { StyleGuideComponent };