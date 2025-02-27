
export const Button = ({ name, isBeam = false, containerClass }) => {

  return (
    <button className={`btn ${containerClass} letter-spacing-contact fondo`}  >
        {isBeam && (
            <span className="relative flex h-3 w-3">
                <span className="btn-ping absolute"/>
                <span className="btn-ping_dot"/>
            </span>
            
        )}
        {name}
    </button>
  )
}
