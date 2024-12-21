import './News.css'
import news from '../news.json'

export default function News(){
    const NewsItem = (props) => {
        const {title, desc, imageurl} = props;
        return (
            <div className="news__item">
                <img src={imageurl} alt="" />
                <div className="news__text">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="news__parent">
            <h3>НОВИНИ</h3>
            <div className="news__container">
                {news.map(el => {
                    return <NewsItem title={el.title} desc={el.desc} imageurl={el.imageurl}/>
                })}
            </div>
        </div>
    )
}