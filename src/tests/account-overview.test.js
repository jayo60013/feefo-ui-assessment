import { render, screen } from '@testing-library/react';
import { AccountOverview } from '../components/account-overview';

jest.mock('../components/contact-support', () => ({ supportContact }) => (
  <div>
    {supportContact.name} {supportContact.email}
  </div>
));

jest.mock('../components/sales-overview', () => ({ salesOverview }) => (
  <div>
    {salesOverview.uploads} {salesOverview.successfulUploads} {salesOverview.linesAttempted} {salesOverview.linesSaved}
  </div>
));

describe('AccountOverview', () => {
  const mockData = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
    }
  }

  test('renders Account Overview header', () => {
    render(<AccountOverview data={mockData} />);

    const headerText = screen.getByText(/Account Overview/);
    expect(headerText).toBeInTheDocument();
  });

  test('renders ContactSupport component with correct supportContact prop', () => {
    render(<AccountOverview data={mockData} />);

    const supportContact = screen.getByText(`${mockData.supportContact.name} ${mockData.supportContact.email}`);
    expect(supportContact).toBeInTheDocument();
  });

  test('renders SalesOverview component with correct salesOverview prop', () => {
    render(<AccountOverview data={mockData} />);

    const salesOverview = screen.getByText(`${mockData.salesOverview.uploads} ${mockData.salesOverview.successfulUploads} ${mockData.salesOverview.linesAttempted} ${mockData.salesOverview.linesSaved}`);
    expect(salesOverview).toBeInTheDocument();
  });
});
