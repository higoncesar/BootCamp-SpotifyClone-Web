import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 250px;
  text-decoration: none;

  &:hover img {
    opacity: 0.4;
  }

  img {
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;
