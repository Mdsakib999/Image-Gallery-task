import { useSortable } from "@dnd-kit/sortable";
import Item from "./Item";

const SortableItem = (props) => {
  const sortable = useSortable({ id: props.id });
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: transform ? transform.toString() : "",
    transition: transition || undefined,
  };

  return (
    <Item
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortableItem;
