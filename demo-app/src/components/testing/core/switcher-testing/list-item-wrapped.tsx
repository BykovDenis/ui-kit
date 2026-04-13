import ListItem from '@dbykov-ui-kit/core/list-item';

type ListItemWrappedProps = {
  children: React.ReactNode;
};

const ListItemWrapped: React.FunctionComponent<ListItemWrappedProps> = (props: ListItemWrappedProps) => {
  return (
    <ListItem
      textAlign="left"
      justifyContent="space-between"
      alignItems="baseline"
      isVisibleTextUnderline={false}
      margin="0 0 15px 0"
    >
      {props.children}
    </ListItem>
  );
};

export default ListItemWrapped;
