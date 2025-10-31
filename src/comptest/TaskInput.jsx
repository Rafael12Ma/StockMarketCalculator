export default function TaskInput({ handleAddTask, taskRef, descRef }) {
  return (
    <section>
      <label htmlFor="">Task</label>
      <input ref={taskRef} type="text" />
      <label htmlFor="">Description</label>
      <textarea ref={descRef} type="text" />
      <button
        onClick={() =>
          handleAddTask(taskRef.current.value, descRef.current.value)
        }
      >
        Save
      </button>
    </section>
  );
}
