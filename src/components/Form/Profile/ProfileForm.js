import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  @media all and (min-width: 480px) {
    padding: 60px 0;
  }
`;

const SectionContainer = styled.form`
  @media all and (min-width: 480px) {
    margin: 0% 8%;
    max-width: 320px;
    margin-bottom: 45px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

const ProfileForm = ({ user, handleSubmit}) => {

  return (
    <PageContainer>
    <SectionContainer onSubmit={handleSubmit}>
    </SectionContainer>
    <CardContainer>
    { user.subscriptions.map(sub => {
        return <Card>{ sub.name }</Card> }
     )} 
    </CardContainer>
    </PageContainer>
  )
}

export default ProfileForm;
