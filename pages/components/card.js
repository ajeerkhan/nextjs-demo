import style from './card.module.css';

export default ({card={}})=>{

return(
    <div className={style.card}>
        <div className={style.front}>
          <img src="/static/juice.jpg" alt="Avatar" className={style.cardImage}></img>
          <div className={style.container}>
                <h1>Vitamin Juice <span className={style.price}>$24.99</span></h1>
                <p>
                Need a jump on your vitamins while drinking? Tired of popping the pills? 
            Drink our vitamin enhanced juice, available in several flavours.
                </p>
          </div>
        </div>
    </div>
)
}