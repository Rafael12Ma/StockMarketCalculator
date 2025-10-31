export default function Tasks({ tasks }) {
  return (
    <section id="stocksList">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} -- {task.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}
