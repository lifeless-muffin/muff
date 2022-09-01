type Props = {
  iconSource: string,
  iconSize?: {
    width?: number | string,
    height?: number | string,
  },
  iconAlt?: string,
  extraProps?: object
}

const IconRenderer = (props : Props) => {

  const { iconSource, iconSize, iconAlt, extraProps } 
    = props;

  return (
    <div className="icon-img-wrapper">
      <img className="icon-img" 
        alt={iconAlt}
        src={'/portfolio' + iconSource} 
        width={iconSize?.width}
        height={iconSize?.height}
        {...extraProps || ''}
      />
    </div>
  )
};

export default IconRenderer;