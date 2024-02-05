type ExerciseTitleProps = {
  title: string;
  description: string;
};

export default function ExerciseTitle({
  description,
  title,
}: ExerciseTitleProps) {
  return (
    <>
      <label>
        <h1>{title}</h1>
        <p>{description}</p>
      </label>
      <hr />
    </>
  );
}
