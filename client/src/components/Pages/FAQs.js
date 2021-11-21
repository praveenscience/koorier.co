import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Row
} from "reactstrap";

const FAQs = () => {
  const [Open, setOpen] = useState(0);
  const faqs = [
    {
      Question: "Question 1",
      Answer: "Here's the Answer for the Question 1"
    },
    {
      Question: "Question 2",
      Answer: "Here's the Answer for the Question 2"
    },
    {
      Question: "Question 3",
      Answer: "Here's the Answer for the Question 3"
    }
  ];
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h1>Frequently Asked Questions</h1>
          <Accordion
            className="mt-5"
            open={Open}
            toggle={function noRefCheck(which) {
              setOpen(which);
            }}
          >
            {faqs.map((faq, key) => (
              <AccordionItem key={key}>
                <AccordionHeader targetId={key}>{faq.Question}</AccordionHeader>
                <AccordionBody accordionId={key}>{faq.Answer}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQs;
