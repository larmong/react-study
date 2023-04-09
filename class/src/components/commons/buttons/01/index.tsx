interface IPropsButton01 {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IPropsButton01) {
  return (
    <button style={{ backgroundColor: props.isActive ? "yellow" : "" }}>
      {props.title}
    </button>
  );
}
