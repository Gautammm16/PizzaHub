



import styles from "../../styles/PizzaList.module.css";
import PizzaCard from "../../components/PizzaCard";
import axios from "axios";
const pizzaList =  axios.get("http://localhost:3000/api/products");
const index = () => {
     
        
       
    
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default index;


