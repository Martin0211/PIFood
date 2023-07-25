import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 5vw;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: .5vw;
  font-family: 'ubuntu', sans-serif;
  font-weight: 300;
  background-color: ${(props) => (props.$active ? "#a846a0" : "#f0f0f0")};
  color: ${(props) => (props.$active ? "#fff" : "initial")};
  border: 1px solid #ccc;
  cursor: pointer;

  &.active {
    
  }
`;



const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const generatePageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <PageButton key={i} onClick={() => handlePageChange(i)} $active={currentPage === i ? "true" : undefined}>
          {i}
        </PageButton>
      );
    }
    return buttons;
  };

  return <PaginationContainer>{generatePageButtons()}</PaginationContainer>;
};

export default Pagination;