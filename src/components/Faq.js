import React from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqSection = styled.div`

`;
const Container = styled.div``;
const Wrap = styled.div``;

const Faq = () => {
  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <FaqSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
              <Wrap>
                <h1>{item.question}</h1>
                </Wrap>
                <p>{item.answer}</p>
              </>
            );
          })}
        </Container>
      </FaqSection>
    </IconContext.Provider>
  );
};

export default Faq;
