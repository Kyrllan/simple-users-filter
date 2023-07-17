import {styled} from 'styled-components';

export const Content = styled.div`
  font-weight: 400;
  font-size: 1rem;
  background-color: var(--background);
  border-radius: 0.5rem;

  input {
    height: 3rem;
    margin: 1rem 0;
    padding: 6px;
    width: 100%;
    font-weight: 600;
    font-size: 1.25rem;
    border-radius: 0.4rem;
  }

  li {
    list-style-type: none;
    background: var(--background2);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: var(--background4);
    }

    & + li {
      margin-top: 0.5rem;
    }

    .profile-image {
      width: 3rem;
      background-color: var(--background3);
      border-radius: 50%;
      margin-left: 0.5rem;
      margin-right: 1rem;
    }

    .user-name {
      font-weight: 600;
    }

    .user-details {
      font-weight: 400;
      font-size: 12px;
    }
  }

  .input-card {
    border-radius: 0.4rem;
    margin-right: 10px;
    padding: 0 1rem;
    background: red;
    background-color: var(--shape);
  }

  .list-card {
    overflow-y: auto;
    height: 74vh;
    margin-top: 1rem;
    border-radius: 0.4rem;
    background-color: var(--background);
  }

  .list-card-content {
    margin-right: 10px;
    border-radius: 0.4rem;
    padding: 1rem;
    background-color: var(--shape);
  }
`;
