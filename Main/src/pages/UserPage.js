import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import UserContainer from '../containers/UserContainer';

const UserPage = () => (
  <>
    <Header />
    <UserContainer />
    <Footer />
  </>
);

export default UserPage;
