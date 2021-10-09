const ChildArea = (props: { open: boolean }) => {
  const { open } = props;

  return (
    <>
      {open ? (
        <div className="ChildArea">
          <h1>ChildArea</h1>
        </div>
      ) : null}
    </>
  );
};
export default ChildArea;
