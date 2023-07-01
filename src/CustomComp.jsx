const CustomComp = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <button onClick={() => setShowMenu(!showMenu)}>Click</button>
      <p>{"" + showMenu}</p>
    </>
  );
};

export default CustomComp;
