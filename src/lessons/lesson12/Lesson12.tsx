import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from './lesson12.module.css';

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Lesson12() {
  // мы вызываем функцию хук useFormik и передаем в нее объект с настройками  - результат кладем в переменную для дальнейшей работы
  const formik = useFormik({
    // начальные значения для формы
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    } as IFormValues,
    // действие, которое случится в форме по нажатию на кнопку с типом submit
    // за место values придут значения из формы
    onSubmit: (values) => {
      console.log(values)
     }
  });

  // console.log(formik)

  return (
    <div className="lesson-container">
      <h2>Formik</h2>
      <p>Formik - это библиотека для удобной работы с формами в React</p>
      <form className={styles.form}>
        <input name="firstName" type="text" placeholder="имя" />
        <input name="lastName" type="text" placeholder="фамилия" />
        <input name="email" type="email" placeholder="email" />
        <MyButton myType="submit" text="отправить" />
      </form>
    </div>
  );
}
