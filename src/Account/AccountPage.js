import { useEffect, useState } from "react"
import AccountTemplate from "./AccountTemplate";
import CreateUserBtn from "./CreateUserBtn";

const AccountPage = () => {
  const [page, setpage] = useState('logIn');

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