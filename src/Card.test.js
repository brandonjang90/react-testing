import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke Test
it("renders Card without crashing", function () {
  render(
    <Card
      caption="Test Image"
      src="https://example.com/test.jpg"
      currNum={1}
      totalNum={3}
    />
  );
});

// Snapshot Test
it("matches Card snapshot", function () {
  const { asFragment } = render(
    <Card
      caption="Test Image"
      src="https://example.com/test.jpg"
      currNum={1}
      totalNum={3}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
