import react from 'react';
import styled from 'styled-components';
import Button from '../commons/button';

const WriteActionButtonBlock = styled.div`    
    margin-top : 1rem;
    margin-bottom : 3rem;
    button + button {
       margin-left :0.5rem;
    }
    `;

const StyledButton = styled(Button)`
    height:2.125rem;
    & + & {
     margin-left :0.5rem;
    }
    `;

const WriteActionButtons = ({onCancel , onPublish} : any) =>{
    return(
      <WriteActionButtonBlock>
          <StyledButton cyan onClick={onPublish}>
              포스트등록
          </StyledButton>
          <StyledButton onClick={onCancel}>취소</StyledButton>
      </WriteActionButtonBlock>  
    );
};

export default WriteActionButtons;