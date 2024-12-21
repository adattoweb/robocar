import './LastNews.css'

export default function LastCard(props){
    const {title, image, desc} = props;
    console.log(image)
    return (
        <div className="lastcard">
            <h3>{title}</h3>
            <img src={image} alt="" />
            <p>{desc}</p>
            <div className="button">Прочитати</div>
        </div>
    )
}