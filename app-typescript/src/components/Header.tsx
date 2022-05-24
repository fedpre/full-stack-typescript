type Name = {courseName: string};

const Header = (props: Name) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

export default Header;