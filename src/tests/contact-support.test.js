import { render, screen } from '@testing-library/react';
import ContactSupport from '../components/contact-support';

const mockSupportContact = {
  name: 'John Smith',
  email: 'john.smith@feefo.com'
};

test('renders support contact component with correct data', () => {
  render(<ContactSupport supportContact={mockSupportContact} />);

  const salesElement = screen.getByText(/Your feefo support contact/);
  expect(salesElement).toBeInTheDocument();

  const firstLetterOfFirstName = mockSupportContact.name[0];
  const supportProfileLetterText = screen.getByText((content, element) => {
    return content.includes(firstLetterOfFirstName) && element.tagName.toLowerCase() === "p";

  });
  expect(supportProfileLetterText).toBeInTheDocument();

  const supportNameText = screen.getByText(mockSupportContact.name);
  expect(supportNameText).toBeInTheDocument();

  const supportNameEmail = screen.getByText(mockSupportContact.email);
  expect(supportNameEmail).toBeInTheDocument();

  const supportPhoneNumber = screen.getByText(/020 3362 4208/);
  expect(supportPhoneNumber).toBeInTheDocument();
});
