import MyButton from "../../components/myButton/MyButton";

export default function Lesson13() {
  return (
    <div className="lesson-container">
      <h2>Lesson 13</h2>
      <p>Yup validation library</p>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <MyButton myType="submit" text="send"/>
      </form>
    </div>
  );
}
