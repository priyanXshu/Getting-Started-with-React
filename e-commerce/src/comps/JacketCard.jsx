const JacketCard = ({imgURL, changeJacketImage, jacketImg}) => {
  const handleClick = () => {
    if(jacketImg !== imgURL.jacket){
        changeJacketImage(imgURL.jacket)
    }
  };
  return (
    <div className={`${jacketImg === imgURL.jacket ? 'border-primary' : 'border-transparent'}selection-container`} onClick={handleClick}>
        <div className="selection-card">
            <img src={imgURL.thumbnail} alt="" />
        </div>
    </div>
  )
}

export default JacketCard