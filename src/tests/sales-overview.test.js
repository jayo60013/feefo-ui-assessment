import { render, screen } from '@testing-library/react';
import SalesOverview from '../components/sales-overview';

const mockSalesOverview = {
  uploads: 8,
  successfulUploads: 3,
  linesAttempted: 20,
  linesSaved: 4,
}

test('renders sales overview component with correct data', () => {
  render(<SalesOverview salesOverview={mockSalesOverview} />);

  const salesElement = screen.getByText(/Sales/);
  expect(salesElement).toBeInTheDocument();

  const uploadsText = screen.getByText((content, element) => {
    return content.includes(`${mockSalesOverview.successfulUploads} uploads`) && element.tagName.toLowerCase() === "strong";
  });
  expect(uploadsText).toBeInTheDocument();

  const linesText = screen.getByText((content, element) => {
    return content.includes(mockSalesOverview.linesSaved) && element.tagName.toLowerCase() === "strong";

  });
  expect(linesText).toBeInTheDocument();

  const uploadSuccessPercentage = Math.floor(mockSalesOverview.successfulUploads / mockSalesOverview.uploads * 100);
  const uploadSuccessPercentageText = screen.getByText((content, element) => {
    return content.includes(`${uploadSuccessPercentage}%`) && element.tagName.toLowerCase() === "p";
  });
  expect(uploadSuccessPercentageText).toBeInTheDocument();
  const uploadSuccessLabel = screen.getByText(/Upload success/);
  expect(uploadSuccessLabel).toBeInTheDocument();

  const linesSavedPercentage = Math.floor(mockSalesOverview.linesSaved / mockSalesOverview.linesAttempted * 100);
  const linesSavedPercentageText = screen.getByText((content, element) => {
    return content.includes(`${linesSavedPercentage}%`) && element.tagName.toLowerCase() === "p";
  });
  expect(linesSavedPercentageText).toBeInTheDocument();
  const linesSavedLabel = screen.getByText(/Lines saved/);
  expect(linesSavedLabel).toBeInTheDocument();
});
