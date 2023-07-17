import {styled} from 'styled-components';

export const Card = styled.div`
  overflow-y: auto;
  height: 100%;
  border-radius: 0.4rem;
  background-color: var(--background);
`;

export const CardEmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 0.4rem;
  background-color: var(--shape);
`;

export const CardContent = styled.div`
  height: 100%;
  border-radius: 0.4rem;
  background-color: var(--shape);

  .title-card {
    border-bottom: 1px solid var(--background);
    display: flex;
    padding: 1rem;

    .avatar {
      width: 140px;
      border-radius: 50%;
      background-color: var(--background3);
    }

    .main-card {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 2rem;
      width: 100%;
    }

    .name {
      display: flex;
    }

    .name-details {
      font-weight: 700;
      font-size: 13px;
      margin: 0;
      padding: 0;
    }

    .address-details {
      margin: 0;
      padding: 0;
      font-weight: normal;
      font-size: 13px;
    }
  }

  .body-card {
    border-bottom: 1px solid var(--background);
    padding: 1rem 2rem;

    .body-card-text{
      font-weight: 400;
      font-size: 13px;
      color: var(--text-title);
    }
  }
`;
