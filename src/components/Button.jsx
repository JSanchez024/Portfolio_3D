

export const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn $${containerClass} letter-spacing-contact`}>
        {isBeam && (
            <span className="relative flex h-3 w-3">
                <span className="btn-ping"/>
                <span className="btn-ping-dot"/>
            </span>
        )}
        {name}
    </button>
  )
}
