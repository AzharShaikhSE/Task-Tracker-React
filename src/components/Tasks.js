import Task from './Task';

const Tasks = ({ taskList, onDelete, onToggle }) => {
  return (
    <>
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
