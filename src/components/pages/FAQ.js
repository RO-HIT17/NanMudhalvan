import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What are your delivery timings?",
    answer: "We deliver from 9 AM to 9 PM, seven days a week. You can choose your preferred delivery slot during checkout."
  },
  {
    question: "How can I pay for my order?",
    answer: "We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery."
  },
  {
    question: "What is your return policy?",
    answer: "If you're not satisfied with the quality of products received, you can return them at the time of delivery. Our delivery person will help you process the return."
  },
  {
    question: "Do you have minimum order value?",
    answer: "Yes, the minimum order value is ₹200 for free delivery. Orders below this amount will incur a delivery charge of ₹30."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is confirmed, you'll receive updates via SMS and email. You can also track your order status in real-time through our website."
  },
  {
    question: "What if an item is out of stock?",
    answer: "If an item is out of stock, we'll notify you and either suggest an alternative or provide a refund for that item."
  },
  {
    question: "Can I modify my order after placing it?",
    answer: "Yes, you can modify your order within 30 minutes of placing it. After that, the order goes into processing and cannot be modified."
  },
  {
    question: "Do you offer express delivery?",
    answer: "Yes, we offer express delivery within 2 hours for select pin codes. Additional charges may apply for express delivery."
  }
];

function FAQ() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom component="h1" align="center">
          Frequently Asked Questions
        </Typography>
        <Box sx={{ mt: 3 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="subtitle1" fontWeight="medium">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}

export default FAQ;