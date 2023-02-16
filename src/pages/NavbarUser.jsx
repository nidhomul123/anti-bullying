import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function NavbarUser() {
  let { id } = useParams();
  return (
    <div>
      <Navbar admin={"/user"} id={id} />
    </div>
  );
}

export default NavbarUser