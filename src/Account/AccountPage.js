import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AccountTemplate from "./AccountTemplate";
import CreateUserBtn from "./CreateUserBtn";

const AccountPage = () => {
  const [page, setpage] = useState('logIn');
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("wtd_tk");
  useEffect(() => {
    if(accessToken){
      navigate('/todos')
    }
  }, [accessToken])

  const onSetPage =(pageName) => {
    console.log(pageName);
    setpage(pageName)
  }
  return (
    <>
      <AccountTemplate 
        pageName={page}
        typeAPI={page}
      />
      <CreateUserBtn
      onSetPage={onSetPage}
      />
    </>
  )
}

export default AccountPage;