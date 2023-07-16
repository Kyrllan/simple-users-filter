import {styled} from 'styled-components';

export const Container = styled.header`
  background: var(--primary);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.2rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
`;
